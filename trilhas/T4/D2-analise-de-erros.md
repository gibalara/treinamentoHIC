# D2 · Descobrir por que a IA erra (análise de erros)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 75 min
- **Evidência:** falhas por categoria + novos casos
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Saber que a IA acerta 80% não diz o que corrigir. Análise de erros é ler cada falha, dar a ela uma categoria e contar.

A categoria mais frequente é a próxima correção. Mexer no prompt quando o problema é documento faltando só gasta tempo.

Cada falha encontrada em uso vira um caso-ouro novo. A base cresce com o uso real.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra a pasta do Diário em **Manual** e peça: "Rode o script de evals e liste os casos que falharam."
2. Peça: "Mostre as 20 chamadas mais recentes do registro de chamadas do tutor, de usuários reais." Anote as respostas ruins.
3. Para cada falha, peça: "Mostre os documentos enviados, a versão do prompt e a resposta da chamada [id ou pergunta]."
4. Dê a cada falha uma categoria da tabela "Categorias de falha", na Referência desta lição.
5. Peça ao Claude Code: "Crie `evals/analise-de-erros.md` com a tabela de falhas e a contagem por categoria."
6. Escolha a categoria com mais falhas. Peça uma única correção no lugar indicado na coluna "Onde corrigir".
7. Peça para rodar o script de evals completo. Confira se o acerto subiu sem quebrar outros casos.
8. Para cada falha vista no registro de chamadas, acrescente um caso-ouro a `evals/casos-ouro.csv`. Use dados fictícios e preencha a coluna nova `data_entrada`.
9. Peça: "Faça um commit com a mensagem 'Adiciona análise de erros e casos novos do tutor' e envie ao GitHub."

## Prática

1. Em **Manual**, peça para rodar o script de evals da sua feature e listar as falhas.
2. Peça as 20 chamadas mais recentes do registro de chamadas e anote as respostas ruins.
3. Classifique cada falha numa categoria (veja "Categorias de falha", na Referência desta lição).
4. Peça o arquivo `evals/analise-de-erros.md` com a contagem por categoria.
5. Corrija só a categoria mais frequente, com uma mudança.
6. Peça para rodar os evals completos.
7. Acrescente um caso-ouro para cada falha vista em uso, com dados fictícios e `data_entrada`.
8. Peça o commit e o envio ao GitHub.

## Checagem

Entrega: `evals/analise-de-erros.md` com falhas contadas por categoria + casos novos na planilha, com data de entrada.

## Referência

**Termos**

- Análise de erros: ler, classificar e contar as falhas antes de corrigir
- Categoria de falha: tipo de causa do erro, que aponta onde corrigir
- Registro de chamadas: tabela com pergunta, documentos enviados, prompt, modelo e resposta (lição B5 da T4)
- Script de evals: programa que roda os casos-ouro e resume o resultado (lição D1 da T4)
- Caso-ouro: pergunta com resposta esperada e critério de aprovação (lição A2 da T4)
- RAG: a IA recebe trechos dos seus documentos e responde com base neles (lições B2 a B4 da T4)

**Categorias de falha**

| Categoria | Sinal | Onde corrigir |
| --- | --- | --- |
| Seleção | O documento certo não foi enviado | Degrau do RAG (lições B3 e B4 da T4) |
| Resposta | Documento enviado, resposta errada | Prompt (lição A3 da T4) |
| Citação | Fonte errada ou trecho inexistente | Prompt e conferência de citação (lição B5 da T4) |
| Escopo | Recusou o que devia responder, ou o contrário | Guardrails (lições C1 e C2 da T4) |
| Formato | Campo faltando ou inválido | Saída estruturada (lição B1 da T4) |
| Caso-ouro | Critério errado ou vago | A própria planilha |

**Template da análise**

| Caso | Categoria | O que aconteceu | Correção |
| --- | --- | --- | --- |
| | | | |

| Categoria | Falhas |
| --- | --- |
| | |

**Regras**

- Uma correção por vez, sempre seguida dos evals completos
- Falha nova em uso vira caso-ouro, com data de entrada
- Caso malicioso ou fora do escopo que falhou bloqueia a feature até voltar a 100%
