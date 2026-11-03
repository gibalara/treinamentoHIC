# B4 · Saber tudo o que o agente fez (registro de execuções)

- **Trilha:** T6 · Autonomia
- **Tempo:** 45 min
- **Evidência:** execuções no painel
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Agente (programa em que a IA escolhe passos e usa ferramentas) que roda sem você precisa deixar rastro. Sem registro, você não sabe se ele rodou, o que fez, quanto custou ou por que parou.

Toda execução é registrada, inclusive as que falham, param por limite ou são bloqueadas. O registro guarda a trajetória: a sequência de passos e ferramentas usadas.

"Toda execução registrada" é eliminatório no marco da T6.

## Demonstração

Exemplo: o registro do agente semanal do Diário de Bordo.

1. Peça ao Claude Code: "Crie o registro de execuções do agente: início, fim, organização, status, motivo da parada, trajetória, custo e itens criados na fila."
2. Peça: "Grave o registro no início da execução e atualize no fim. Uma execução que quebra no meio também deve aparecer."
3. Peça: "Mostre as execuções no painel administrativo, só da organização de quem está vendo."
4. Peça: "Crie um modo de teste que simula falha de uma ferramenta."
5. Na organização Turma Teste, com dados fictícios, dispare 3 execuções: uma normal, uma com limite de passos baixo e uma com falha simulada.
6. Confira no painel: 3 execuções, com status "concluída", "parada por limite" e "erro".
7. Abra a trajetória da execução normal e leia cada passo.
8. Entre como admin de outra organização. Confira que as execuções da Turma Teste não aparecem.
9. Peça um commit (versão salva no git).

## Prática

1. Abra seu projeto no Claude Code.
2. Peça o registro de execuções com os campos da Referência.
3. Peça a gravação no início e a atualização no fim.
4. Peça a tela de execuções no seu painel administrativo, filtrada por organização.
5. Dispare 3 execuções de teste: normal, parada por limite e falha simulada.
6. Confira: execuções disparadas = execuções no painel.
7. Tire um print do painel e peça um commit.

## Checagem

Entrega: print do painel com as 3 execuções de teste (concluída, parada por limite, erro) e a trajetória de uma delas aberta.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Execução: uma rodada completa do agente, do início à parada
- Trajetória: sequência de passos e ferramentas usadas numa execução
- Painel administrativo: tela de gestão criada na lição B2 da T5
- Organização: cliente, área ou turma isolada no produto (T5)

**Campos do registro**

- Início, fim, organização, gatilho (agendado ou manual)
- Status e motivo da parada
- Trajetória: cada passo com ferramenta, entrada resumida e resultado resumido
- Custo da execução
- Itens criados na fila de aprovação

**Status**

| Status | Quando |
| --- | --- |
| Em andamento | Começou e não terminou |
| Concluída | Objetivo cumprido |
| Parada por limite | Passos, custo ou tempo (lição B2 da T6) |
| Bloqueada pelo interruptor | Interruptor desligado (lição B5 da T6) |
| Ignorada: duplicada | Execução repetida (lição C2 da T6) |
| Erro | Falha durante a execução |

**Como verificar este eliminatório**

- Execuções disparadas = execuções no painel, inclusive erro e parada
- Execução que quebra no meio aparece como "em andamento" ou "erro", nunca some

**Pedidos ao Claude Code**

- Reaproveitar: "Verifique se a trilha de auditoria da lição B3 da T5 já guarda estes campos. Reaproveite o que der."

**Erros comuns**

- Gravar só no fim: execução que quebra não deixa rastro
- Registro com dados pessoais completos: guarde resumos
