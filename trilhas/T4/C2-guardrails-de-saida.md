# C2 · Conferir a resposta antes de mostrar (guardrails de saída)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 60 min
- **Evidência:** casos fora do escopo passando
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Mesmo com a entrada limpa, a IA pode sair do escopo, inventar ou revelar o que não deve.

Guardrail de saída é uma verificação automática da resposta, no servidor, antes de chegar ao usuário. Se falhar, o usuário recebe uma recusa padrão.

Casos fora do escopo a 100% são eliminatórios no marco da T4.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Escreva a recusa padrão: "Só respondo sobre sua jornada e o conteúdo do curso. Ex.: 'Onde travei na T2a?'"
2. Liste os temas fora do escopo: investimento, saúde, questões jurídicas, assuntos sem relação com o curso.
3. Abra a pasta do Diário em **Manual**. Peça: "Depois da resposta da IA e antes de mostrar, confira no servidor:
   - formato válido;
   - categoria `fora_do_escopo` vira a recusa padrão;
   - citações conferidas;
   - nenhum trecho do prompt;
   - nenhum dado de outro usuário.
   Se falhar, mostre a recusa padrão e registre o motivo."
4. Escreva 3 casos na borda do escopo. Ex.: "Como monto meu currículo com o que aprendi no curso?"
5. Decida, para cada um, se o tutor atende ou recusa. Registre a decisão na seção 8 do `SPEC.md`.
6. Acrescente esses casos a `evals/casos-ouro.csv`, com a decisão como resposta esperada.
7. Peça: "Rode os casos fora do escopo no tutor, com a conta de teste, e grave as respostas."
   - Confira cada resposta contra o critério. Meta: 100%.
8. Peça o mesmo para todos os casos-ouro. Nenhuma resposta legítima pode virar recusa.
9. Peça: "Faça um commit com a mensagem 'Adiciona guardrails de saída ao tutor' e envie ao GitHub."

## Prática

1. Escreva a recusa padrão da sua feature, com um exemplo de pergunta válida.
2. Liste os temas fora do escopo do seu produto.
3. Em **Manual**, peça as verificações de saída no servidor, com recusa padrão e registro do motivo. Lista em "Verificações de saída", na Referência desta lição.
4. Escreva 3 casos na borda do escopo e decida cada um.
5. Registre as decisões na seção 8 do `SPEC.md` e acrescente os casos a `evals/casos-ouro.csv`.
6. Peça para rodar os casos fora do escopo e corrija até 100%.
7. Peça para rodar todos os casos-ouro e corrija recusas indevidas.
8. Peça o commit e o envio ao GitHub.

## Checagem

Entrega: casos fora do escopo (originais e de borda) a 100% + 20 casos-ouro sem recusa indevida.

## Referência

**Termos**

- Guardrail de saída: verificação automática da resposta antes de mostrá-la
- Escopo: o que a feature deve atender, definido na seção 6 do `SPEC.md`
- Recusa padrão: mensagem fixa para pedidos fora do escopo, com exemplo do que a feature faz
- Caso de borda: pedido em que a decisão de atender ou recusar não é óbvia
- Recusa indevida: pergunta legítima respondida com a recusa padrão
- Saída estruturada: resposta em campos fixos, como `categoria` (lição B1 da T4)
- Citação conferida: trecho citado que existe no documento enviado (lição B5 da T4)

**Verificações de saída**

| Verificação | Falha quando |
| --- | --- |
| Formato | Falta campo ou categoria inválida |
| Escopo | Categoria `fora_do_escopo` |
| Citação | Trecho citado não existe no documento |
| Vazamento de instrução | Resposta contém trecho do prompt |
| Dados de terceiros | Resposta contém dado de outro usuário |

- Se a regra no código não bastar: uma chamada curta à IA que só diz "no escopo" ou "fora"
- Essa checagem extra custa uma chamada a mais (lição D5 da T4)

**Sobre os 100%**

- É o mínimo para seguir, não garantia de segurança
- A cada falha encontrada em uso, um novo caso entra na base (lição D2 da T4)

**Pedidos ao Claude Code**

- "Antes de mostrar a resposta, confira [verificações]. Se falhar, mostre a recusa padrão e registre o motivo."
