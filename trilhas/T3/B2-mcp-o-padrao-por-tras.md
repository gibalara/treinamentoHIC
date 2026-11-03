# B2 · Onde ligar o Claude aos seus sistemas (MCP)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** mapa de oportunidades
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

MCP (Model Context Protocol) é o padrão aberto que liga o Claude a outros sistemas. Os conectores da lição B1 da T3 são servidores MCP prontos.

Um servidor MCP é o programa que expõe dados e ações de um sistema ao Claude. Dá para fazer um para o seu produto. Aí o Claude consulta seus dados sem você copiar e colar.

Antes de construir, decida onde vale a pena: quais perguntas e ações, com qual risco. É isso que o mapa de oportunidades registra.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Liste 5 perguntas que você faria ao Claude sobre os seus registros (ex.: "Em quais lições travei mais?").
2. Liste 2 ações que você gostaria que o Claude executasse (ex.: "Registre 45 min na lição A8 da T3").
3. Para cada item, anote o dado necessário: tabela de registros, lições, travas.
4. Classifique: leitura ou escrita.
5. Classifique o risco com os "Critérios de risco", na Referência: baixo, médio ou alto.
6. Dê o ganho: quantas vezes por semana você faria isso e quanto tempo economiza.
7. Escolha 2 ou 3 itens de leitura e baixo risco para o primeiro servidor (lição B3 da T3).
8. Abra a pasta do Diário no modo de código, em **Manual**. Peça para salvar o mapa em `docs/mapa-mcp.md` e o commit.

[LINK A CURAR: introdução oficial ao Model Context Protocol]

## Prática

1. Liste 5 perguntas sobre os dados do seu produto que você faria ao Claude. Critério: hoje exigem abrir o app ou o Supabase e contar à mão.
2. Liste até 2 ações que o Claude poderia executar no produto, como no passo 2 da Demonstração.
3. Preencha o "Mapa de oportunidades", na Referência: dado, leitura ou escrita, risco e ganho.
4. Marque 2 ou 3 itens para o seu primeiro servidor: leitura e baixo risco.
5. No modo de código, salve o mapa em `docs/mapa-mcp.md` no seu repositório e peça o commit.

## Checagem

Entrega: mapa de oportunidades com pelo menos 5 itens classificados e os itens escolhidos para a lição B3 da T3.

## Referência

**Termos**

- MCP (Model Context Protocol): padrão aberto que liga o Claude a outros sistemas
- Servidor MCP: programa que expõe dados e ações de um sistema ao Claude
- Ferramenta: cada ação que o servidor oferece (ex.: "listar registros")
- Conector: servidor MCP pronto, instalado pela lista do Claude

**Mapa de oportunidades**

| Pergunta ou ação | Dado | Leitura / Escrita | Risco | Ganho por semana | Primeiro servidor? |
| --- | --- | --- | --- | --- | --- |
| Em quais lições travei mais? | Registros | Leitura | Baixo | | Sim |

**Critérios de risco**

| Risco | Quando |
| --- | --- |
| Baixo | Leitura de dados do próprio usuário |
| Médio | Escrita reversível nos dados do próprio usuário |
| Alto | Dados de outros usuários, dados sensíveis, ação irreversível ou efeito fora do produto |

**Regras**

- Primeiro servidor: só leitura e risco baixo
- Escrita entra depois, com aprovação a cada ação
- Efeito fora do produto fica fora da T3 (aprovação humana de ações é tema da T6)
