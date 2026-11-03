# T4 · Produto com IA

Esforço: 18–24 h · Badge: Produto IA

## Objetivo mensurável

Colocar uma feature de IA no ar com evals acima da meta e custo por usuário calculado.

## Vitória de abertura

A IA respondendo com citação sobre os documentos do próprio projeto.

## Lições

### A · Fundamentos

- A1 · A tarefa de IA certa para o seu produto (onde a IA agrega valor)
- A2 · Saber se a IA acerta antes de construí-la (evals com 20 casos-ouro)
- A3 · Um prompt aprovado nos casos-ouro antes de entrar no app (prototipar o prompt)
- A4 · A IA dentro do seu app, com a chave protegida (API Anthropic no servidor)

### B · Construção

- B1 · Respostas que o app consegue ler (geração e classificação com saída estruturada)
- B2 · Respostas com base nos seus documentos (RAG, degrau 1)
- B3 · Selecionar os documentos certos (RAG, degrau 2)
- B4 · Achar o trecho certo mesmo com outras palavras (busca por significado, RAG degrau 3, só se necessário)
- B5 · Toda resposta com fonte conferível (citação e rastreabilidade)

### C · Proteção

- C1 · Barrar pedidos maliciosos antes da IA (guardrails de entrada)
- C2 · Conferir a resposta antes de mostrar (guardrails de saída)
- C3 · Nenhum usuário esgota seu orçamento (limites de uso por usuário)

### D · Qualidade e economia

- D1 · Corrigir os evals automaticamente (IA como juiz, calibrada contra você)
- D2 · Descobrir por que a IA erra (análise de erros)
- D3 · Escolher o modelo pelos dados (custo × latência × qualidade)
- D4 · Melhorar sem quebrar (versionamento e regressão, inclusive na troca de modelo)
- D5 · Quanto cada usuário custa em IA (custo por usuário)
- D6 · A feature de IA comprovada em 1 página (fechamento da feature)

## Marco

Feature de IA com evals passando. Rubrica: [`rubricas/T4.md`](../../rubricas/T4.md).
