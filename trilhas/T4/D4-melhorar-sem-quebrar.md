# D4 · Melhorar sem quebrar (versionamento e regressão, inclusive na troca de modelo)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 60 min
- **Evidência:** evals automáticos antes de mudanças
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Mudar o prompt, o degrau do RAG ou o modelo pode consertar um caso e quebrar outro. Isso é regressão: algo que funcionava deixa de funcionar.

Versionar é guardar cada prompt e modelo com número, para comparar e voltar.

A regra: nenhuma mudança entra sem os evals rodarem antes. Automático, para não depender de memória.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Peça ao Claude Code: "Organize `prompts/` com um arquivo por versão e deixe a versão ativa e o modelo numa configuração única."
2. Peça: "Grave a versão do prompt e o modelo em cada linha do registro de chamadas e em cada resultado de evals."
3. Peça: "Salve cada rodada de evals em `evals/resultados/`, com data, versão do prompt, modelo e resumo."
4. Peça: "Crie um hook que, antes de qualquer commit que altere `prompts/` ou a configuração do modelo, rode o script de evals. Bloqueie o commit se a meta geral não for atingida ou se algum caso fora do escopo ou malicioso falhar." [VERIFICAR: forma de disparar o hook antes do commit no Claude Code]
5. Teste o bloqueio: peça para tirar do prompt a regra de recusa fora do escopo e tente o commit.
6. Confira: o commit foi bloqueado e o motivo aparece.
7. Peça: "Volte `prompts/` para a versão do último commit."
8. Teste uma troca de modelo pelo mesmo caminho: mude o modelo na configuração e tente o commit. O hook roda os evals com o modelo novo.
9. Peça: "Faça um commit com a mensagem 'Adiciona evals automáticos antes de mudanças no tutor'."

[LINK A CURAR: documentação oficial do Claude Code sobre hooks]

## Prática

1. Peça a organização dos prompts por versão e a configuração única de versão ativa e modelo.
2. Peça o registro de versão e modelo no registro de chamadas e nos resultados de evals.
3. Peça o salvamento de cada rodada em `evals/resultados/`.
4. Peça o hook que roda os evals antes de commits em prompts ou modelo, com as regras de bloqueio.
5. Teste com uma mudança ruim de propósito e confirme o bloqueio.
6. Volte a mudança.
7. Peça o commit.

## Checagem

Entrega: hook (ou comando personalizado) no repositório + registro de um commit bloqueado por queda nos evals.

## Referência

**Termos**

- Regressão: algo que funcionava deixa de funcionar depois de uma mudança
- Versionamento: guardar cada versão de prompt e modelo com número, para comparar e voltar
- Hook: verificação que o Claude Code executa sempre num evento, como antes de um commit (lição C3 da T3)
- Comando personalizado: atalho que dispara uma sequência repetida no Claude Code (lição C2 da T3)
- Script de evals: programa que roda os casos-ouro e o juiz (lição D1 da T4)
- Commit: ponto salvo de versão do projeto (lição 0.5 da T0)

**O que dispara os evals**

| Mudança | Evals antes? |
| --- | --- |
| Prompt da feature | Sim |
| Prompt do juiz | Sim, e recalcular a concordância (lição D1 da T4) |
| Modelo | Sim |
| Degrau do RAG ou seleção de documentos | Sim |
| Guardrails | Sim |
| Texto da tela | Não |

**Regras de bloqueio**

- Acerto geral abaixo da meta: bloqueia
- Qualquer falha em fora do escopo ou malicioso: bloqueia
- Acerto caiu em relação à última rodada aprovada: revisar antes de seguir

**Alternativa ao hook**

- Comando personalizado `/evals`, rodado antes de cada commit; exige disciplina, o hook não

**Pedidos ao Claude Code**

- "Crie um hook que rode os evals antes de commits que alterem [pastas] e bloqueie se [regras]."
- "Volte [arquivo] para a versão do último commit."
