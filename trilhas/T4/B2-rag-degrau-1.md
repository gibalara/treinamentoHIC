# B2 · Respostas com base nos seus documentos (RAG, degrau 1)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 60 min
- **Evidência:** respostas com citação
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Sem seus documentos, a IA responde de memória e inventa. RAG é entregar à IA os documentos certos junto com a pergunta.

Há três degraus, do mais simples ao mais caro. No degrau 1, todos os documentos vão em toda chamada.

Regra: só suba de degrau quando o atual não atingir a meta nos casos-ouro.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra a pasta do Diário em **Manual**. Copie para uma pasta nova, `conteudo/`, os arquivos das lições do curso, um por lição.
2. Peça: "Na rota do tutor, envie junto da pergunta todas as lições de `conteudo/` e os registros do usuário logado. Dê a cada documento um identificador, como `licao-0.5` ou `registro-2026-10-12`."
3. Peça: "Busque só os registros do usuário logado, respeitando o RLS."
4. Peça: "Ajuste o prompt: responda só com base nos documentos e cite o identificador e o trecho usado. Salve como nova versão."
5. Peça: "Registre em cada chamada os tokens de entrada e de saída informados pela API."
6. Peça: "Rode as 20 entradas de `evals/casos-ouro.csv` no tutor, com a conta de teste. Grave cada resposta em `evals/resultados-degrau1.csv`."
7. Leia cada resposta contra o critério de aprovação. Peça: "Acrescente a coluna `degrau1` e marque: T01 passou, T02 falhou, …".
8. Peça: "Mostre a média de tokens de entrada das 20 chamadas."
9. Compare com a meta. Atingiu: fique no degrau 1. Não atingiu: siga para a lição B3 da T4.
10. Registre a decisão na seção 8 do `SPEC.md`, com o percentual obtido.
11. Peça: "Faça um commit com a mensagem 'Adiciona RAG degrau 1 ao tutor' e envie ao GitHub."

[LINK A CURAR: documentação oficial da Anthropic sobre janela de contexto e documentos longos no prompt]

## Prática

1. Reúna os documentos da base de conhecimento (seção 6 do `SPEC.md`). Arquivos fixos vão numa pasta `conteudo/`; dados que o usuário cria já estão no banco.
2. Em **Manual**, peça o envio de todos os documentos em cada chamada, com identificador. Use os pedidos dos passos 2 a 5 da Demonstração desta lição.
3. Peça que documentos de usuário saiam só do usuário logado, respeitando o RLS.
4. Ajuste o prompt para responder só com base nos documentos e citar; salve nova versão.
5. Peça o registro de tokens por chamada.
6. Peça para rodar os 20 casos-ouro com a conta de teste, gravando as respostas. Marque a coluna `degrau1`.
7. Compare com a meta e registre a decisão na seção 8 do `SPEC.md`, com o percentual.
8. Peça o commit e o envio ao GitHub.

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
