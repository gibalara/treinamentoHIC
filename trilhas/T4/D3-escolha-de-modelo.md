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

1. Na página oficial de modelos e preços, anote os modelos vigentes e o preço por milhão de tokens de entrada e de saída. [VERIFICAR: nomes e preços vigentes]
2. Escolha 3 candidatos de tamanhos diferentes, um de cada família (ex.: Haiku, Sonnet e Opus). [VERIFICAR: famílias vigentes]
3. Peça ao Claude Code: "Rode o script de evals com cada modelo candidato. Mantenha o mesmo prompt do tutor e o mesmo modelo no juiz."
4. Peça: "Para cada modelo, mostre acerto geral, acerto em fora do escopo e maliciosos, tokens médios de entrada e saída e latência média."
5. Calcule o custo médio por pergunta de cada modelo com a fórmula da Referência.
6. Preencha a tabela comparativa.
7. Elimine os que não atingem a meta geral ou não fazem 100% em fora do escopo e maliciosos.
8. Entre os restantes, escolha o mais barato com latência aceitável. Defina antes o que é aceitável.
9. Registre a decisão e os números na seção 8 do `SPEC.md`.
10. Troque o modelo na configuração do tutor e rode os evals completos de novo.
11. Peça: "Faça um commit com a mensagem 'Escolhe modelo do tutor por evals'."

[LINK A CURAR: página oficial da Anthropic de modelos e preços]

## Prática

1. Anote modelos vigentes e preços na página oficial.
2. Escolha 3 candidatos de tamanhos diferentes.
3. Defina a latência aceitável para a sua feature.
4. Peça a rodada do script de evals com cada candidato, com prompt e juiz fixos.
5. Calcule o custo médio por pergunta.
6. Preencha a tabela comparativa e elimine quem não atinge a meta ou os 100%.
7. Escolha o mais barato com latência aceitável.
8. Registre no `SPEC.md`, troque o modelo, rode os evals e peça o commit.

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
