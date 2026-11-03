# B3 · Claude consultando os dados do seu produto (servidor MCP)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 2–2,5 h
- **Evidência:** Claude consultando o projeto
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Hoje, para o Claude analisar os dados do seu produto, você exporta e cola. Um servidor MCP (programa que expõe dados e ações do seu sistema ao Claude) elimina esse passo.

O Claude Code constrói o servidor; você decide quais ferramentas existem, o que cada uma lê e com qual acesso. A primeira versão é só leitura e só com os dados do próprio usuário.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a, com banco no Supabase.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**). Use o modo **Plano** (planeja antes de alterar).
2. Peça: "Planeje um servidor MCP local, só leitura, com 2 ferramentas: 'listar_registros' por trilha e 'resumo_de_travas'. Credenciais só em variável de ambiente. Nada que ignore o RLS."
   - Credencial: chave de acesso ao banco. RLS: regra do banco que limita as linhas de cada usuário.
3. Leia o plano e confira: só leitura, só dados do seu usuário, nenhum segredo no código.
4. Confira a credencial proposta. A chave de administração do Supabase ignora o RLS: recuse se aparecer. [LACUNA: forma de autenticação de referência do servidor MCP do Diário]
5. Troque para **Manual** e peça a construção a partir do plano.
6. Peça: "Confirme que o arquivo de variáveis de ambiente está fora do git."
7. Peça: "Registre este servidor no Claude Code para este projeto." [VERIFICAR NA INTERFACE: onde aparecem os servidores MCP conectados]
8. Em sessão nova, pergunte: "Em quais lições eu travei mais, e quanto tempo perdi em cada uma?"
9. Confira a resposta contra o painel do Diário.
10. Peça: "Explique o servidor do ponto de vista de arquitetura e risco."
11. Peça o commit.

[LINK A CURAR: guia oficial do Claude Code sobre conectar servidores MCP]

## Prática

1. Abra o `docs/mapa-mcp.md` (lição B2 da T3) e pegue os 2 ou 3 itens marcados para o primeiro servidor.
2. Abra a pasta do seu projeto no modo de código, em **Plano**.
3. Peça o plano com o "Pedido de servidor MCP", na Referência, trocando as ferramentas pelas do seu mapa.
4. Confira o plano com a "Conferência do plano", na Referência. Peça ajustes até marcar todos os itens.
5. Troque para **Manual** e peça a construção.
6. Peça: "Confirme que o arquivo de variáveis de ambiente está fora do git."
7. Peça: "Registre este servidor no Claude Code para este projeto." [VERIFICAR NA INTERFACE]
8. Em sessão nova, faça as perguntas do seu mapa e confira as respostas no app.
9. Peça a explicação reversa, como no passo 10 da Demonstração, e anote um risco.
10. Peça o commit.

## Checagem

Entrega: print de uma pergunta respondida pelo Claude com dados do seu projeto + a mesma informação no app.

## Referência

**Termos**

- MCP (Model Context Protocol): padrão aberto que liga o Claude a outros sistemas
- Servidor MCP: programa que expõe dados e ações de um sistema ao Claude
- Ferramenta: cada ação que o servidor oferece
- Servidor local: roda no seu computador, só para você
- RLS: regra no banco que limita quais linhas cada usuário vê (lição 2a.5 da T2)
- Variável de ambiente: lugar fora do código onde ficam segredos (lição 2a.8 da T2)
- Explicação reversa: o Claude explica o que gerou do ponto de vista de arquitetura e risco

**Pedido de servidor MCP**

- "Planeje um servidor MCP local, só leitura, com as ferramentas [nome: o que retorna]. Credenciais só em variável de ambiente. Nada que ignore o RLS."

**Conferência do plano**

- [ ] Só leitura
- [ ] Só dados do usuário dono da credencial
- [ ] Nenhuma chave de administração
- [ ] Segredos em variável de ambiente, fora do git
- [ ] Cada ferramenta retorna só os campos necessários

**Erros comuns (Tutor HIC)**

| Erro | Causa | Solução |
| --- | --- | --- |
| Claude não vê as ferramentas | Servidor não registrado ou sessão antiga | Registrar e abrir sessão nova |
| Resposta com dados de outro usuário | Credencial de administração | Trocar a credencial e seguir a lição B4 da T3 |
| Segredo apareceu no commit | Arquivo de ambiente no git | Trocar a chave no Supabase e tirar o arquivo do git |
