# B2 · Respostas com base nos seus documentos (RAG, degrau 1)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 60 min
- **Evidência:** respostas com citação
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Sem seus documentos, a IA responde de memória e inventa. RAG é entregar à IA os documentos certos junto com a pergunta.

Há três degraus, do mais simples ao mais caro. No degrau 1, todos os documentos vão em toda chamada.

Regra: só suba de degrau quando o atual não atingir a meta nos casos-ouro. Muitos produtos param no degrau 1.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Peça ao Claude Code: "Crie a pasta `conteudo/` e copie para ela as lições do curso, uma por arquivo."
2. Peça: "Na rota do tutor, envie junto da pergunta todas as lições de `conteudo/` e os registros do usuário logado. Dê a cada documento um identificador, como `licao-0.5` ou `registro-2026-10-12`."
3. Peça: "Busque só os registros do usuário logado, respeitando o RLS."
4. Peça: "Ajuste o prompt: responda só com base nos documentos e preencha `citacoes` com o identificador e o trecho usado. Salve como nova versão."
5. Peça: "Registre em cada chamada os tokens de entrada e de saída informados pela API."
6. Entre com a conta de teste (registros fictícios) e rode os 20 casos-ouro.
7. Marque "passou" ou "falhou" pelo critério de cada caso, na coluna nova `degrau1` da planilha.
8. Peça: "Mostre a média de tokens de entrada das 20 chamadas."
9. Compare com a meta. Atingiu: fique no degrau 1. Não atingiu: siga para a lição B3 da T4.
10. Registre a decisão na seção 8 do `SPEC.md`, com o percentual obtido.
11. Peça: "Faça um commit com a mensagem 'Adiciona RAG degrau 1 ao tutor'."

[LINK A CURAR: documentação oficial da Anthropic sobre janela de contexto e documentos longos no prompt]

## Prática

1. Reúna os documentos da base de conhecimento (seção 6 do `SPEC.md`) numa pasta ou tabela do projeto.
2. Peça o envio de todos os documentos em cada chamada, com identificador por documento.
3. Garanta que documentos de usuário saiam só do usuário logado.
4. Ajuste o prompt para responder só com base nos documentos e citar; salve nova versão.
5. Peça o registro de tokens por chamada.
6. Rode os 20 casos-ouro com uma conta de teste e marque a coluna `degrau1`.
7. Compare com a meta e registre a decisão no `SPEC.md`.
8. Peça o commit.

## Checagem

Entrega: planilha com a coluna `degrau1` preenchida, respostas com citação nos casos típicos e decisão registrada no `SPEC.md`.

## Referência

**Termos**

- RAG: a IA recebe trechos dos seus documentos e responde com base neles
- Degrau 1: todos os documentos em toda chamada
- Degrau 2: só os documentos selecionados por filtro e palavra-chave (lição B3 da T4)
- Degrau 3: busca por significado com embeddings (lição B4 da T4)
- Token: pedaço de palavra; a API conta e cobra por tokens de entrada e de saída
- Janela de contexto: limite de texto que o modelo lê por chamada
- RLS: regra no banco que limita quais linhas cada usuário vê (lição 2a.5 da T2a)
- Citação: indicação do documento e do trecho que sustentam a resposta

**Regra de subida de degrau**

- Só se passa ao próximo degrau quando o atual não atinge a meta nos casos-ouro
- Registrar cada decisão de degrau na seção 8 do `SPEC.md`, com o percentual

**Quando o degrau 1 não serve**

- Documentos não cabem na janela de contexto [VERIFICAR: tamanho da janela do modelo escolhido]
- Custo por pergunta alto demais (calcule na lição D5 da T4)
- Casos-ouro abaixo da meta por documentos demais misturados

**Pedidos ao Claude Code**

- "Envie junto da pergunta todos os documentos de [origem], com identificador por documento."
- "Busque só os dados do usuário logado, respeitando o RLS."
- "Registre em cada chamada os tokens de entrada e de saída informados pela API."
