#!/usr/bin/env node
// Gera curso.html (leitura local) a partir de trilhas/*/README.md e das lições.
// Uso: node scripts/gerar-curso.js

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const TRILHAS = path.join(RAIZ, 'trilhas');
const SAIDA = path.join(RAIZ, 'curso.html');
const ORDEM = ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'transversal'];

// ---------- Markdown → HTML ----------

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(texto, arquivo) {
  const codigos = [];
  let s = esc(texto).replace(/`([^`]+)`/g, (_, c) => `\u0000${codigos.push(c) - 1}\u0000`);
  s = s.replace(/\[(LINK A CURAR[^\]]*)\]/g, '<mark class="m-link">$1</mark>');
  s = s.replace(/\[(VERIFICAR[^\]]*)\]/g, '<mark class="m-verificar">$1</mark>');
  s = s.replace(/\[(LACUNA[^\]]*)\]/g, '<mark class="m-lacuna">$1</mark>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, rotulo, url) => {
    let alvo = url.replace(/&amp;/g, '&');
    if (!/^[a-z]+:/i.test(alvo) && !alvo.startsWith('#')) {
      alvo = path.relative(RAIZ, path.resolve(path.dirname(arquivo), alvo)).split(path.sep).join('/');
    }
    return `<a href="${esc(alvo)}">${rotulo}</a>`;
  });
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codigos[i])}</code>`);
}

const celulas = (linha) => linha.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
const indentacao = (linha) => linha.match(/^ */)[0].length;
const itemLista = (linha) => linha.match(/^( *)([-*]|\d+\.) +(.*)$/);

function blocos(linhas, arquivo) {
  const html = [];
  let i = 0;
  while (i < linhas.length) {
    const linha = linhas[i];
    if (!linha.trim()) { i++; continue; }

    if (linha.trim().startsWith('<!--')) {
      while (i < linhas.length && !linhas[i].includes('-->')) i++;
      i++; continue;
    }

    const h = linha.match(/^(#{1,4}) +(.*)$/);
    if (h) { html.push(`<h${h[1].length}>${inline(h[2], arquivo)}</h${h[1].length}>`); i++; continue; }

    if (linha.trim().startsWith('```')) {
      const codigo = [];
      i++;
      while (i < linhas.length && !linhas[i].trim().startsWith('```')) codigo.push(linhas[i++]);
      i++;
      html.push(`<pre><code>${esc(codigo.join('\n'))}</code></pre>`);
      continue;
    }

    if (linha.trim().startsWith('|')) {
      const tabela = [];
      while (i < linhas.length && linhas[i].trim().startsWith('|')) tabela.push(linhas[i++]);
      const cab = celulas(tabela[0]);
      const corpo = tabela.slice(2).map(celulas);
      html.push('<div class="tabela"><table><thead><tr>' + cab.map((c) => `<th>${inline(c, arquivo)}</th>`).join('') +
        '</tr></thead><tbody>' + corpo.map((r) => '<tr>' + r.map((c) => `<td>${inline(c, arquivo)}</td>`).join('') + '</tr>').join('') +
        '</tbody></table></div>');
      continue;
    }

    const item = itemLista(linha);
    if (item) {
      const ordenada = /\d/.test(item[2]);
      const base = item[1].length;
      const itens = [];
      while (i < linhas.length) {
        const m = itemLista(linhas[i]);
        if (!m || m[1].length !== base || /\d/.test(m[2]) !== ordenada) break;
        const recuo = base + m[2].length + 1;
        const conteudo = [m[3]];
        i++;
        while (i < linhas.length) {
          const l = linhas[i];
          if (!l.trim()) {
            let j = i;
            while (j < linhas.length && !linhas[j].trim()) j++;
            if (j < linhas.length && indentacao(linhas[j]) >= recuo) { conteudo.push(''); i = j; continue; }
            break;
          }
          if (indentacao(l) >= recuo) { conteudo.push(l.slice(recuo)); i++; continue; }
          if (!itemLista(l) && indentacao(l) > base) { conteudo.push(l.trim()); i++; continue; }
          break;
        }
        itens.push(conteudo);
        let j = i;
        while (j < linhas.length && !linhas[j].trim()) j++;
        const prox = j < linhas.length && itemLista(linhas[j]);
        if (prox && prox[1].length === base && /\d/.test(prox[2]) === ordenada) i = j;
      }
      const tag = ordenada ? 'ol' : 'ul';
      html.push(`<${tag}>` + itens.map((c) => {
        const interno = blocos(c, arquivo);
        return `<li>${interno.replace(/^<p>([\s\S]*?)<\/p>/, '$1')}</li>`;
      }).join('') + `</${tag}>`);
      continue;
    }

    if (linha.startsWith('>')) {
      const citacao = [];
      while (i < linhas.length && linhas[i].startsWith('>')) citacao.push(linhas[i++].replace(/^> ?/, ''));
      html.push(`<blockquote>${blocos(citacao, arquivo)}</blockquote>`);
      continue;
    }

    const paragrafo = [];
    while (i < linhas.length && linhas[i].trim() && !/^(#{1,4} |\||```|>|<!--)/.test(linhas[i].trim()) && !itemLista(linhas[i])) {
      paragrafo.push(linhas[i++].trim());
    }
    html.push(`<p>${inline(paragrafo.join(' '), arquivo)}</p>`);
  }
  return html.join('\n');
}

const markdown = (texto, arquivo) => blocos(texto.replace(/\r\n/g, '\n').split('\n'), arquivo);

// ---------- Leitura das trilhas ----------

function secao(texto, titulo) {
  const m = texto.match(new RegExp(`^## ${titulo}\\s*\\n([\\s\\S]*?)(?=\\n## |(?![\\s\\S]))`, 'm'));
  return m ? m[1].trim() : '';
}

const ordemLicao = (id) => id.split(/[.]/).map((p) => p.match(/\d+|\D+/g).map((x) => (/\d/.test(x) ? x.padStart(4, '0') : x)).join('')).join('.');

const trilhas = ORDEM.filter((p) => fs.existsSync(path.join(TRILHAS, p, 'README.md'))).map((pasta) => {
  const dir = path.join(TRILHAS, pasta);
  const arqReadme = path.join(dir, 'README.md');
  const readme = fs.readFileSync(arqReadme, 'utf8').replace(/\r\n/g, '\n');
  const titulo = readme.match(/^# (.*)$/m)[1].trim();
  const meta = (readme.match(/^Esforço:.*$/m) || [''])[0];

  const arquivos = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md');
  const porId = {};
  for (const f of arquivos) porId[f.split('-')[0]] = f;

  const listadas = [];
  let grupo = '';
  for (const l of secao(readme, 'Lições').split('\n')) {
    const g = l.match(/^### (.*)$/);
    if (g) { grupo = g[1].trim(); continue; }
    const m = l.match(/^- (\S+) · (.*)$/);
    if (m) listadas.push({ id: m[1], titulo: m[2].trim(), grupo });
  }
  for (const id of Object.keys(porId)) {
    if (!listadas.some((l) => l.id === id)) listadas.push({ id, titulo: id, grupo: '' });
  }
  listadas.sort((a, b) => (ordemLicao(a.id) < ordemLicao(b.id) ? -1 : 1));

  const licoes = listadas.map((l) => {
    const arq = porId[l.id] && path.join(dir, porId[l.id]);
    const texto = arq && fs.readFileSync(arq, 'utf8');
    return {
      ...l,
      chave: `${pasta}/${l.id}`.toLowerCase(),
      html: texto ? markdown(texto, arq) : null,
      tituloArquivo: texto ? (texto.match(/^# (.*)$/m) || [, l.titulo])[1].trim() : l.titulo,
    };
  });

  return {
    pasta,
    chave: pasta.toLowerCase(),
    titulo,
    meta,
    objetivo: inline(secao(readme, 'Objetivo mensurável').replace(/\n/g, ' '), arqReadme),
    marco: inline(secao(readme, 'Marco').replace(/\s*Rubricas?:.*$/s, '').replace(/\n/g, ' '), arqReadme),
    html: markdown(readme, arqReadme),
    licoes,
  };
});

// ---------- Montagem do HTML ----------

const sequencia = trilhas.flatMap((t) => t.licoes.filter((l) => l.html).map((l) => ({ ...l, trilha: t })));
const escritas = sequencia.length;
const total = trilhas.reduce((n, t) => n + t.licoes.length, 0);

const menu = trilhas.map((t) => {
  let grupoAtual = '';
  const itens = t.licoes.map((l) => {
    let cab = '';
    if (l.grupo && l.grupo !== grupoAtual) { grupoAtual = l.grupo; cab = `<li class="grupo">${inline(l.grupo, '')}</li>`; }
    const rotulo = `<span class="num">${esc(l.id)}</span> ${inline(l.titulo, '')}`;
    return cab + (l.html
      ? `<li><a href="#/${l.chave}" data-chave="${l.chave}">${rotulo}</a></li>`
      : `<li class="pendente" title="A escrever">${rotulo}</li>`);
  }).join('');
  return `<details data-trilha="${t.chave}"><summary><a href="#/${t.chave}" data-chave="${t.chave}">${inline(t.titulo, '')}</a></summary><ul>${itens}</ul></details>`;
}).join('\n');

const cartoes = trilhas.map((t) => {
  const feitas = t.licoes.filter((l) => l.html).length;
  return `<a class="cartao" href="#/${t.chave}">
  <h2>${inline(t.titulo, '')}</h2>
  <p class="meta">${inline(t.meta, '')}</p>
  <p><span class="rotulo">Objetivo</span>${t.objetivo}</p>
  <p><span class="rotulo">Marco</span>${t.marco}</p>
  <p class="progresso">${feitas} de ${t.licoes.length} lições escritas</p>
</a>`;
}).join('\n');

const navegacao = (i) => {
  const ant = sequencia[i - 1];
  const prox = sequencia[i + 1];
  return `<nav class="anterior-proxima">
  ${ant ? `<a href="#/${ant.chave}" class="ant"><small>← Anterior</small>${inline(ant.tituloArquivo.replace(/^#\s*/, ''), '')}</a>` : '<span></span>'}
  ${prox ? `<a href="#/${prox.chave}" class="prox"><small>Próxima →</small>${inline(prox.tituloArquivo.replace(/^#\s*/, ''), '')}</a>` : '<span></span>'}
</nav>`;
};

const paginas = [
  `<section data-pagina="inicio"><h1>O HIC do Futuro</h1><p class="sub">${escritas} de ${total} lições escritas. Material de leitura gerado a partir do repositório.</p><div class="cartoes">${cartoes}</div></section>`,
  ...trilhas.map((t) => `<section data-pagina="${t.chave}" hidden>${t.html.replace(/<li>(\S+) · /g, (m, id) => {
    const l = t.licoes.find((x) => x.id === id && x.html);
    return l ? `<li><a href="#/${l.chave}">${esc(id)}</a> · ` : m;
  })}</section>`),
  ...sequencia.map((l, i) => `<section data-pagina="${l.chave}" data-trilha="${l.trilha.chave}" hidden>
<p class="trilha-atual"><a href="#/${l.trilha.chave}">${inline(l.trilha.titulo, '')}</a></p>
<article>${l.html}</article>
${navegacao(i)}
</section>`),
].join('\n');

const css = `
:root{--fundo:#fbfaf7;--painel:#f2f0ea;--texto:#23231f;--suave:#6b6a62;--borda:#dedbd2;--destaque:#2f5d50;--cartao:#fff;
--link-bg:#fff1cc;--link-tx:#7a4b00;--ver-bg:#dcebff;--ver-tx:#1d4a8a;--lac-bg:#fde0de;--lac-tx:#8f1d16;--codigo:#efece4}
:root[data-tema="escuro"]{--fundo:#1a1b1d;--painel:#222326;--texto:#e6e4de;--suave:#9b9a93;--borda:#36373b;--destaque:#7cc2ad;--cartao:#26272a;
--link-bg:#4a3a12;--link-tx:#ffd77a;--ver-bg:#1d3355;--ver-tx:#a8cbff;--lac-bg:#4d2120;--lac-tx:#ffb3ad;--codigo:#2d2e32}
@media (prefers-color-scheme:dark){:root:not([data-tema="claro"]){--fundo:#1a1b1d;--painel:#222326;--texto:#e6e4de;--suave:#9b9a93;--borda:#36373b;--destaque:#7cc2ad;--cartao:#26272a;
--link-bg:#4a3a12;--link-tx:#ffd77a;--ver-bg:#1d3355;--ver-tx:#a8cbff;--lac-bg:#4d2120;--lac-tx:#ffb3ad;--codigo:#2d2e32}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--fundo);color:var(--texto)}
body{font:17px/1.65 -apple-system,"Segoe UI",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;display:flex;min-height:100vh}
a{color:var(--destaque)}
aside{width:300px;flex-shrink:0;background:var(--painel);border-right:1px solid var(--borda);height:100vh;position:sticky;top:0;overflow-y:auto;padding:20px 14px;font-size:14.5px}
aside .topo{display:flex;justify-content:space-between;align-items:center;margin:0 6px 14px}
aside .topo a{font-weight:700;font-size:16px;color:var(--texto);text-decoration:none}
#tema{background:none;border:1px solid var(--borda);color:var(--texto);border-radius:6px;padding:4px 9px;cursor:pointer;font-size:13px}
details{margin:2px 0}
summary{cursor:pointer;padding:5px 6px;border-radius:6px;font-weight:600}
summary a{color:var(--texto);text-decoration:none}
details ul{list-style:none;margin:2px 0 8px;padding:0 0 0 12px}
details li a,details li.pendente{display:block;padding:4px 8px;border-radius:6px;text-decoration:none;color:var(--texto);line-height:1.35}
details li.pendente{color:var(--suave);opacity:.65}
details li.grupo{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--suave);padding:8px 8px 2px}
details li a:hover,summary:hover{background:var(--borda)}
a.ativo{background:var(--destaque)!important;color:var(--fundo)!important}
.num{font-variant-numeric:tabular-nums;color:inherit;opacity:.7;margin-right:2px}
main{flex:1;min-width:0;padding:40px 48px 80px}
section{max-width:760px;margin:0 auto}
section[data-pagina="inicio"]{max-width:1100px}
h1{font-size:2rem;line-height:1.25;margin:0 0 .6em}
h2{font-size:1.35rem;margin:2em 0 .5em;padding-bottom:.25em;border-bottom:1px solid var(--borda)}
h3{font-size:1.1rem;margin:1.6em 0 .4em}
.sub,.meta,.trilha-atual{color:var(--suave)}
.trilha-atual{font-size:14px;margin:0 0 6px}
.trilha-atual a{color:var(--suave)}
.cartoes{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-top:24px}
.cartao{display:block;background:var(--cartao);border:1px solid var(--borda);border-radius:12px;padding:18px 20px;text-decoration:none;color:var(--texto);transition:border-color .15s}
.cartao:hover{border-color:var(--destaque)}
.cartao h2{border:0;margin:0 0 2px;font-size:1.15rem;padding:0}
.cartao p{margin:.5em 0;font-size:15px;line-height:1.5}
.cartao .meta{font-size:13.5px;margin-top:0}
.rotulo{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--suave);font-weight:600}
.progresso{font-size:13px!important;color:var(--destaque)}
.tabela{overflow-x:auto;margin:1em 0}
table{border-collapse:collapse;width:100%;font-size:15px}
th,td{border:1px solid var(--borda);padding:7px 10px;text-align:left;vertical-align:top}
th{background:var(--painel)}
code{background:var(--codigo);padding:.1em .35em;border-radius:4px;font-size:.9em}
pre{background:var(--codigo);padding:12px 14px;border-radius:8px;overflow-x:auto}
pre code{background:none;padding:0}
li{margin:.3em 0}
blockquote{margin:1em 0;padding:.2em 1em;border-left:3px solid var(--borda);color:var(--suave)}
mark{padding:.1em .4em;border-radius:4px;font-size:.88em;font-weight:600}
.m-link{background:var(--link-bg);color:var(--link-tx)}
.m-verificar{background:var(--ver-bg);color:var(--ver-tx)}
.m-lacuna{background:var(--lac-bg);color:var(--lac-tx)}
.anterior-proxima{display:flex;justify-content:space-between;gap:16px;margin-top:56px;padding-top:20px;border-top:1px solid var(--borda)}
.anterior-proxima a{flex:1;max-width:48%;border:1px solid var(--borda);border-radius:10px;padding:10px 14px;text-decoration:none;color:var(--texto);font-size:15px;line-height:1.4}
.anterior-proxima a:hover{border-color:var(--destaque)}
.anterior-proxima small{display:block;color:var(--suave);font-size:12.5px}
.prox{text-align:right;margin-left:auto}
#abrir-menu{display:none}
@media (max-width:860px){
  body{display:block}
  aside{position:fixed;left:0;top:0;z-index:5;transform:translateX(-100%);transition:transform .2s;box-shadow:0 0 24px rgba(0,0,0,.25)}
  body.menu-aberto aside{transform:none}
  #abrir-menu{display:inline-block;position:sticky;top:0;margin:0 0 12px;background:var(--painel);border:1px solid var(--borda);color:var(--texto);border-radius:6px;padding:6px 12px}
  main{padding:16px 16px 60px}
}
`;

const js = `
(function(){
  var raiz=document.documentElement, botao=document.getElementById('tema');
  function aplicar(t){ if(t){raiz.setAttribute('data-tema',t);} else {raiz.removeAttribute('data-tema');}
    var escuro=t?t==='escuro':matchMedia('(prefers-color-scheme: dark)').matches; botao.textContent=escuro?'☀ Claro':'☾ Escuro'; }
  var salvo=null; try{salvo=localStorage.getItem('tema-curso');}catch(e){}
  aplicar(salvo);
  botao.addEventListener('click',function(){
    var escuro=raiz.getAttribute('data-tema')?raiz.getAttribute('data-tema')==='escuro':matchMedia('(prefers-color-scheme: dark)').matches;
    var novo=escuro?'claro':'escuro'; aplicar(novo); try{localStorage.setItem('tema-curso',novo);}catch(e){}
  });
  document.getElementById('abrir-menu').addEventListener('click',function(){document.body.classList.toggle('menu-aberto');});
  function mostrar(){
    var chave=decodeURIComponent(location.hash.replace(/^#\\/?/,''))||'inicio';
    var alvo=document.querySelector('section[data-pagina="'+chave+'"]')||document.querySelector('section[data-pagina="inicio"]');
    document.querySelectorAll('section[data-pagina]').forEach(function(s){s.hidden=s!==alvo;});
    document.querySelectorAll('aside a.ativo').forEach(function(a){a.classList.remove('ativo');});
    var link=document.querySelector('aside a[data-chave="'+alvo.dataset.pagina+'"]');
    if(link){link.classList.add('ativo'); var d=link.closest('details'); if(d) d.open=true;}
    var trilha=alvo.dataset.trilha; if(trilha){var dt=document.querySelector('details[data-trilha="'+trilha+'"]'); if(dt) dt.open=true;}
    var h=alvo.dataset.pagina!=='inicio'&&alvo.querySelector('h1'); document.title=(h?h.textContent+' · ':'')+'O HIC do Futuro';
    document.body.classList.remove('menu-aberto'); window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',mostrar); mostrar();
})();
`;

const pagina = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>O HIC do Futuro</title>
<style>${css}</style>
</head>
<body>
<aside>
  <div class="topo"><a href="#/">O HIC do Futuro</a><button id="tema" type="button">Tema</button></div>
  <nav>${menu}</nav>
</aside>
<main>
<button id="abrir-menu" type="button">☰ Menu</button>
${paginas}
</main>
<script>${js}</script>
</body>
</html>
`;

fs.writeFileSync(SAIDA, pagina, 'utf8');
console.log(`curso.html gerado: ${trilhas.length} trilhas, ${escritas} de ${total} lições escritas.`);
console.log(SAIDA);
