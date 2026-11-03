# D5 · Quanto cada usuário custa em IA (custo por usuário)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 45 min
- **Evidência:** planilha de custo
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Cada pergunta à IA tem custo; o usuário paga uma assinatura fixa, ou nada. Sem a conta, você descobre o prejuízo na fatura.

Custo por usuário é quanto a IA custa por usuário ativo por mês. Calcule no uso típico e no pior caso.

Esse número define o limite de uso e alimenta a precificação (lição X6 da trilha Transversal).

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Peça ao Claude Code: "Do registro de chamadas do tutor, mostre a média de tokens de entrada e de saída por pergunta."
2. Na página oficial de preços, anote o preço por milhão de tokens do modelo do tutor. [VERIFICAR: preço vigente]
3. Calcule o custo por pergunta com a fórmula da Referência.
4. Estime perguntas por usuário por mês no uso típico. [LACUNA: uso típico do Diário de referência, a medir com o aluno zero]
5. Calcule o pior caso: limite diário de perguntas × 30.
6. Some outros custos de IA por pergunta, se houver: embeddings (degrau 3 do RAG) e checagem extra de saída.
7. Calcule o custo por usuário por mês, típico e pior caso.
8. Separe o custo de desenvolvimento: cada rodada de evals × rodadas por mês. Ele não entra no custo por usuário.
9. Compare o pior caso com o que o usuário vai pagar. Se não couber, use as alavancas da Referência.
10. Peça: "Crie `docs/custo-por-usuario.csv` com estes números e faça um commit com a mensagem 'Adiciona custo por usuário do tutor'."

[LINK A CURAR: página oficial da Anthropic de preços da API]

## Prática

1. Peça a média de tokens de entrada e de saída por chamada da sua feature.
2. Anote o preço do modelo escolhido na página oficial.
3. Calcule o custo por chamada.
4. Estime chamadas por usuário por mês no uso típico.
5. Calcule o pior caso com o limite de uso da sua feature.
6. Some os outros custos de IA por chamada.
7. Calcule o custo por usuário, típico e pior caso, e separe o custo de desenvolvimento.
8. Ajuste o limite de uso se o pior caso não couber.
9. Peça a planilha `docs/custo-por-usuario.csv` e o commit.

## Checagem

Entrega: `docs/custo-por-usuario.csv` com custo por chamada, custo por usuário típico e pior caso, e custo de desenvolvimento separado.

## Referência

**Termos**

- Custo por usuário: custo de IA de um usuário ativo num mês
- Token: pedaço de palavra; a API cobra por milhão de tokens de entrada e de saída
- Registro de chamadas: tabela com tokens de cada chamada (lição B5 da T4)
- Pior caso: usuário que usa todo o limite de uso (lição C3 da T4)
- Embedding: números que representam o significado de um texto (lição B4 da T4)
- Custo de desenvolvimento: chamadas de evals e do juiz, pagas por você, não pelo uso
- Cache de prompt: reaproveitamento da parte fixa do prompt com desconto [VERIFICAR: condições na documentação oficial]

**Fórmulas**

- Custo por chamada = (tokens de entrada × preço de entrada + tokens de saída × preço de saída) ÷ 1.000.000
- Custo por usuário = chamadas por mês × (custo por chamada + outros custos por chamada)
- Pior caso = limite diário × 30 × custo por chamada

**Template da planilha**

| Item | Típico | Pior caso |
| --- | --- | --- |
| Tokens de entrada por chamada | | |
| Tokens de saída por chamada | | |
| Custo por chamada | | |
| Chamadas por usuário por mês | | |
| Outros custos de IA | | |
| Custo por usuário por mês | | |
| Custo de desenvolvimento por mês (separado) | | |

**Alavancas quando o custo não cabe**

- Reduzir o limite de uso (lição C3 da T4)
- Enviar menos documentos (degrau 2 do RAG, lição B3 da T4)
- Trocar por um modelo mais barato que atinja a meta (lição D3 da T4)
- Usar cache de prompt
- Toda alavanca passa pelos evals antes (lição D4 da T4)
