# D3 · Escolher o modelo pelos dados (custo × latência × qualidade)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 60 min
- **Evidência:** tabela comparativa
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Modelos maiores tendem a acertar mais, mas custam mais e demoram mais. Latência é o tempo entre a pergunta e a resposta.

O modelo certo é o mais barato e rápido que atinge a meta nos seus casos-ouro. Não é o mais novo nem o mais famoso.

Com o script de evals, a comparação leva minutos e a decisão fica registrada com números.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Na página oficial de preços, anote os modelos vigentes e o preço por milhão de tokens (entrada e saída). [VERIFICAR: nomes e preços vigentes]
2. Escolha 3 candidatos de tamanhos diferentes, um de cada família (ex.: Haiku, Sonnet e Opus). [VERIFICAR: famílias vigentes]
3. Defina a latência aceitável antes de rodar: quanto o usuário espera sem desistir. Exemplo, não referência: 10 segundos.
4. Abra a pasta do Diário em **Manual** e peça: "Rode o script de evals com cada modelo candidato. Mantenha o mesmo prompt do tutor e o mesmo modelo no juiz."
5. Peça: "Para cada modelo, mostre acerto geral, acerto nos críticos, tokens médios de entrada e saída e latência média."
6. Peça: "Calcule o custo médio por pergunta de cada modelo com os preços do passo 1: [preços]."
   - Confira uma conta à mão com a fórmula da Referência desta lição.
7. Preencha a tabela comparativa (veja "Template da tabela comparativa", na Referência desta lição).
8. Elimine os que não atingem a meta geral ou não fazem 100% em fora do escopo e maliciosos.
9. Entre os restantes, escolha o mais barato com latência aceitável.
10. Registre a decisão e os números na seção 8 do `SPEC.md`.
11. Peça para trocar o modelo na configuração do tutor e rodar os evals completos de novo.
12. Peça: "Faça um commit com a mensagem 'Escolhe modelo do tutor por evals' e envie ao GitHub."

[LINK A CURAR: página oficial da Anthropic de modelos e preços]

## Prática

1. Anote modelos vigentes e preços na página oficial de preços da Anthropic.
2. Escolha 3 candidatos de tamanhos diferentes, um de cada família.
3. Defina a latência aceitável para a sua feature.
4. Em **Manual**, peça a rodada do script de evals com cada candidato, com prompt e juiz fixos.
5. Peça o custo médio por pergunta com os preços anotados e confira uma conta à mão.
6. Preencha a tabela comparativa e elimine quem não atinge a meta ou os 100%.
7. Escolha o mais barato com latência aceitável.
8. Registre a decisão na seção 8 do `SPEC.md`.
9. Peça a troca do modelo, os evals completos e o commit com envio ao GitHub.

## Checagem

Entrega: tabela comparativa com 3 modelos (acerto, críticos, latência, custo por pergunta) + decisão no `SPEC.md`.

## Referência

**Termos**

- Modelo: versão do Claude que responde; muda em capacidade, preço e velocidade
- Latência: tempo entre o envio da pergunta e a chegada da resposta
- Token: pedaço de palavra; a API cobra por milhão de tokens de entrada e de saída
- Tokens de entrada: prompt, documentos e pergunta enviados
- Tokens de saída: resposta gerada
- Script de evals: programa que roda os casos-ouro e o juiz (lição D1 da T4)
- Casos críticos: fora do escopo e maliciosos, que exigem 100% (lição A2 da T4)

**Fórmula do custo por pergunta**

- Custo = (tokens de entrada × preço de entrada + tokens de saída × preço de saída) ÷ 1.000.000

**Template da tabela comparativa**

| Modelo | Acerto geral | Críticos (100%?) | Latência média | Tokens entrada | Tokens saída | Custo por pergunta |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

**Regra de decisão**

1. Eliminar quem não atinge a meta geral
2. Eliminar quem não faz 100% nos críticos
3. Entre os restantes, o mais barato com latência aceitável

**Cuidados**

- Prompt e juiz fixos durante a comparação; senão a diferença não é do modelo
- Troca de modelo depois desta lição segue a regra de regressão (lição D4 da T4)
- Preços mudam: confira na página oficial antes de decidir

**Pedidos ao Claude Code**

- "Rode o script de evals com [modelos], com prompt e juiz fixos."
- "Para cada modelo, mostre acerto geral, acerto nos críticos, tokens médios e latência média."
- "Calcule o custo médio por pergunta de cada modelo com estes preços: [preços]."
