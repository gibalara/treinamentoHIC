# A1 · Decidir se o seu caso pede um agente (agente vs. fluxo fixo)

- **Trilha:** T6 · Autonomia
- **Tempo:** 45 min
- **Evidência:** decisão no `SPEC.md`
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Fluxo fixo (sequência de passos definida antes, sempre igual) é barato, previsível e fácil de testar. Agente é um programa em que a IA escolhe os passos e usa ferramentas até cumprir um objetivo. Custa mais e erra de formas novas.

Agente só compensa quando o caminho muda a cada caso e exige julgamento. Se a regra cabe num fluxograma, use fluxo fixo, no n8n (ferramenta de automação da T5) ou em código.

Esta lição decide se o seu projeto pede um agente, antes de qualquer construção.

## Demonstração

Exemplo: o Diário de Bordo de referência já tem o agente semanal pronto. Primeiro, o resultado; depois, a decisão que o justificou.

1. Abra o painel administrativo do Diário de Bordo (tela de gestão da lição B2 da T5). Escolha a organização "Turma Teste", com dados fictícios.
2. Abra a última execução (uma rodada completa do agente) do agente semanal. Ela rodou agendada, sem ninguém presente.
3. Confira o que o agente fez sozinho: analisou as travas e gravou o próximo passo de cada aluno.
4. Confira o que ficou esperando: um alerta ao gestor na fila de aprovação, ainda não enviado.
5. Agora a decisão. Liste as tarefas candidatas: (a) lembrete a quem não registrou na semana; (b) análise das travas com próximo passo.
6. Aplique o teste das três perguntas a cada tarefa (veja "Teste agente ou fluxo fixo", na Referência).
7. Tarefa (a): regra fixa, "sem registro em 7 dias, envia lembrete". Resultado: fluxo fixo no n8n.
8. Tarefa (b): ler o texto livre das travas, julgar a causa e escolher o próximo passo. Resultado: agente.
9. Registre no `SPEC.md` (arquivo de especificação do projeto), seção 8, a decisão e o motivo.
10. Peça ao Claude Code: "Faça um commit com a mensagem 'Registra decisão do agente semanal'." Commit: versão salva no git.

[LINK A CURAR: guia oficial da Anthropic sobre quando usar agentes e quando usar fluxos fixos]

## Prática

1. Abra a pasta do seu projeto no modo de código do Claude Desktop.
2. Leia, no seu `SPEC.md`, a seção 6, item "Ação candidata a agente".
3. Liste 2–3 tarefas do seu produto que poderiam rodar sem você.
4. Aplique o teste das três perguntas a cada uma.
5. Peça ao Claude Code a revisão crítica (veja "Pedidos ao Claude Code", na Referência).
6. Escolha a tarefa do agente. Se nenhuma passar no teste, revise a seção 6 com o checklist de elegibilidade da lição 1.9 da T1.
7. Registre a decisão na seção 8 do `SPEC.md`, com o motivo e as tarefas que ficaram em fluxo fixo.
8. Peça um commit.

## Checagem

Entrega: decisão na seção 8 do `SPEC.md`, com a tarefa do agente, as tarefas em fluxo fixo e os motivos.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Fluxo fixo: sequência de passos definida antes, sempre igual; pode ter uma etapa de IA no meio
- Execução: uma rodada completa do agente, do início à parada
- `SPEC.md`: especificação do projeto, criada na lição 1.6 da T1; seção 8 = "Decisões tomadas"
- Commit: versão salva no git
- n8n: ferramenta de automação entre sistemas, apresentada no bloco C da T5

**Teste agente ou fluxo fixo**

| Pergunta | Se "não" |
| --- | --- |
| O caminho muda a cada caso? | Fluxo fixo |
| A tarefa exige interpretar texto livre ou julgar? | Fluxo fixo |
| O ganho paga o custo extra de IA, testes e aprovação? | Fluxo fixo |

- Três "sim": candidata a agente
- Regra n8n × código: n8n para fluxos de negócio entre sistemas; código para núcleo, permissões, dados sensíveis e cobrança

**Exemplos de tarefas**

- Triagem de pedidos de clientes em texto livre, com proposta de resposta: agente
- Relatório mensal com os mesmos indicadores: fluxo fixo
- Cobrança de documento pendente após o prazo: fluxo fixo

**Pedidos ao Claude Code**

- Revisão: "Avalie estas tarefas com o teste abaixo. Aponte onde discorda de mim e por quê." (cole o teste e as tarefas)
- Registro: "Acrescente na seção 8 do SPEC.md: [data] [decisão] + [motivo]."

**Template da decisão (seção 8)**

- [data] Tarefa [X] vira agente. Motivo: [caminho muda a cada caso + julgamento exigido]
- [data] Tarefas [Y, Z] ficam em fluxo fixo. Motivo: [regra fixa]

**Erros comuns**

- Chamar de agente um fluxo fixo com uma etapa de IA
- Usar agente onde uma regra simples resolve
