# C2 · Agentes que trabalham sem você (agendamento sem duplicação)

- **Trilha:** T6 · Autonomia
- **Tempo:** 75 min
- **Evidência:** execução sem duplicação
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Agendado, o agente (programa em que a IA escolhe passos e usa ferramentas) roda sem você presente. Mas agendadores às vezes disparam duas vezes, e falhas geram nova tentativa.

Sem cuidado, há duplicação: o gestor recebe dois alertas iguais. A saída é a idempotência: rodar duas vezes tem o mesmo efeito que rodar uma.

Cada execução ganha uma chave única, como organização + semana. Se a chave já existe, a nova execução é ignorada e registrada.

## Demonstração

Exemplo: o agendamento semanal do agente do Diário de Bordo.

1. Peça ao Claude Code: "Proponha como agendar o agente semanal na pilha do projeto. Compare as opções e os riscos." Pilha: as ferramentas do curso (Vercel, Supabase, n8n). [LACUNA: a ementa não define o mecanismo de agendamento de referência]
2. Peça: "Crie a chave da execução: organização + semana. Com execução concluída ou em andamento na mesma chave, não rode."
3. Peça: "Registre a tentativa repetida com status 'ignorada: duplicada'. Execução com erro pode rodar de novo. Confira o interruptor antes da chave."
4. Peça: "Garanta no máximo um alerta pendente por aluno por semana na fila."
5. Peça: "Agende o agente só para a organização Turma Teste, daqui a 10 minutos." Turma Teste tem só dados fictícios. [VERIFICAR NA INTERFACE: ativação no agendador escolhido]
6. Saia. Deixe rodar no horário, sem você.
7. Volte e confira no registro de execuções: 1 execução concluída, agendada. Confira a fila.
8. Peça: "Rode o agente semanal agora na Turma Teste, para a mesma semana."
   Confira: "ignorada: duplicada" e nenhum alerta repetido na fila.
9. Desligue o interruptor e peça outro agendamento daqui a 10 minutos. Confira "bloqueada pelo interruptor".
10. Religue o interruptor. Produção fica para a lição D3 da T6, depois dos evals críticos a 100%.
11. Peça um commit (versão salva no git).

## Prática

1. Abra seu projeto no Claude Code.
2. Peça a proposta de agendamento (passo 1 da Demonstração). Escolha com o "Critério de escolha do agendador", na Referência.
3. Peça a chave da execução e a regra de "ignorada: duplicada".
4. Peça a regra de um item pendente por alvo por período na fila.
5. Peça o agendamento só para uma organização de teste, com dados fictícios. [VERIFICAR NA INTERFACE]
6. Faça os testes da tabela "Como verificar", na Referência.
7. Tire prints do registro e peça um commit.

## Checagem

Entrega: print do registro com 1 execução concluída e 1 "ignorada: duplicada" na mesma chave, e da fila sem repetição.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Pilha: conjunto de ferramentas do curso (Vercel, Supabase, n8n)
- Agendador: serviço que dispara uma tarefa em horários fixos
- Duplicação: a mesma ação executada duas vezes, como dois alertas iguais
- Idempotência: rodar a mesma tarefa duas vezes tem o mesmo efeito que rodar uma
- Chave da execução: identificador único do trabalho, como organização + semana
- Evals: testes que medem se a IA se comporta como esperado (lição D1 da T6)

**Critério de escolha do agendador**

- Já faz parte da pilha do projeto (Vercel, Supabase ou n8n)
- Registra cada disparo
- Permite disparo manual para teste
- Respeita o interruptor da lição B5 da T6

**Chave da execução: exemplos**

- Diário de Bordo: organização + semana
- Relatório mensal por cliente: cliente + mês
- Triagem diária: organização + dia

**Como verificar**

| Teste | Resultado esperado |
| --- | --- |
| Execução agendada, sem você | 1 concluída no registro |
| Disparo repetido na mesma chave | "Ignorada: duplicada" |
| Fila após disparo repetido | Sem itens repetidos |
| Interruptor desligado no horário | Bloqueada pelo interruptor |
| Execução com erro | Pode rodar de novo |

**Erros comuns**

- Chave com data e hora: cada disparo vira chave nova
- Bloquear também execuções com erro: a semana fica sem análise
- Agendar em produção antes dos evals da lição D1 da T6
