# B3 · Selecionar os documentos certos (RAG, degrau 2)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 75 min
- **Evidência:** comparação nos casos-ouro
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Quando todos os documentos vão em toda chamada, a IA se perde no excesso, e cada pergunta fica cara e lenta.

No degrau 2 do RAG, o servidor escolhe antes os documentos que importam. Usa filtros (lição, data, tipo) e busca por palavra-chave.

Você só sobe para cá se o degrau 1 não atingiu a meta. A comparação nos casos-ouro diz se a subida valeu.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra `evals/casos-ouro.csv` e confirme na coluna `degrau1` que o resultado ficou abaixo da meta.
2. Peça ao Claude Code: "Antes de chamar a IA, selecione os documentos do tutor. Filtre pela lição citada na pergunta e pelo período citado. Complete com busca por palavra-chave nas lições e nos registros do usuário logado. Envie no máximo 5 documentos."
3. Peça: "Registre em cada chamada os identificadores dos documentos enviados, os tokens e a latência."
4. Rode os 20 casos-ouro com a conta de teste e marque a coluna nova `degrau2`.
5. Para cada falha, confira no registro se o documento esperado foi enviado.
   - Não foi: falha de seleção (ajuste filtro ou palavra-chave)
   - Foi: falha de resposta (ajuste o prompt)
6. Ajuste uma coisa por vez e rode os 20 casos de novo.
7. Peça: "Monte a comparação degrau 1 × degrau 2: acerto, tokens médios de entrada e latência média."
8. Decida: degrau 2 atingiu a meta, fique nele; não atingiu, siga para a lição B4 da T4.
9. Registre a comparação e a decisão na seção 8 do `SPEC.md`.
10. Peça: "Faça um commit com a mensagem 'Adiciona seleção de documentos ao tutor (RAG degrau 2)'."

## Prática

1. Confira o resultado do degrau 1 na planilha.
2. Se o degrau 1 atingiu a meta, não construa o degrau 2. Registre no `SPEC.md`: "degrau 1 atinge [X]%; degrau 2 desnecessário". Siga para a lição B5 da T4.
3. Se não atingiu, defina os filtros do seu produto (veja "Filtros possíveis", na Referência).
4. Peça a seleção com filtros, palavra-chave e número máximo de documentos.
5. Peça o registro dos documentos enviados, dos tokens e da latência.
6. Rode os 20 casos-ouro e marque a coluna `degrau2`.
7. Classifique cada falha em seleção ou resposta e ajuste uma coisa por vez.
8. Peça a comparação entre os degraus, registre a decisão no `SPEC.md` e peça o commit.

## Checagem

Entrega: tabela comparativa degrau 1 × degrau 2 nos 20 casos-ouro (acerto, tokens, latência) + decisão no `SPEC.md`. Se ficou no degrau 1, a entrega é o resultado do degrau 1 + a decisão registrada.

## Referência

**Termos**

- RAG: a IA recebe trechos dos seus documentos e responde com base neles
- Degrau 2: o servidor seleciona os documentos antes de chamar a IA
- Filtro: regra que separa documentos por um campo (lição, data, tipo, autor)
- Busca por palavra-chave: encontra documentos que contêm as palavras exatas da pergunta, como um Ctrl+F
- Token: pedaço de palavra; a API conta e cobra por tokens
- Latência: tempo entre o envio da pergunta e a chegada da resposta
- Falha de seleção: o documento certo não foi enviado à IA
- Falha de resposta: o documento foi enviado, mas a IA respondeu errado

**Filtros possíveis**

| Produto | Filtro |
| --- | --- |
| Diário de Bordo | Lição, período, tipo (registro ou lição) |
| Base de manuais | Produto, versão, área |
| Contratos | Cliente, tipo de contrato, vigência |

**Template de comparação**

| Degrau | Acerto geral | Fora do escopo + maliciosos | Tokens médios de entrada | Latência média |
| --- | --- | --- | --- | --- |
| 1 | | | | |
| 2 | | | | |

**Regra de subida de degrau**

- Só se passa ao próximo degrau quando o atual não atinge a meta nos casos-ouro
- O número máximo de documentos é um ajuste: comece com 5 e mude conforme os casos-ouro

**Pedidos ao Claude Code**

- "Antes de chamar a IA, filtre por [campos] e complete com busca por palavra-chave. Envie no máximo [N] documentos."
- "Registre em cada chamada os documentos enviados, os tokens e a latência."
- "Monte a comparação degrau 1 × degrau 2: acerto, tokens médios e latência média."
