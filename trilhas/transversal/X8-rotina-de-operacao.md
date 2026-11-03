# X8 · Saber quanto custa operar sozinho (rotina de operação)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 45 min
- **Evidência:** rotina de operação
- **Liberada após:** T6
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Construir acaba; operar não. Alertas, aprovações do agente, backup e custo de IA pedem tempo toda semana.

Sem rotina, a operação come o tempo de construir ou fica esquecida até quebrar. Com rotina, você sabe quantas horas o produto exige e quanto isso custa.

A conta mostra também quando o solo deixa de caber. Operar sozinho é o começo, não necessariamente o fim.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), com organizações e agente semanal com aprovação. Tempos fictícios, só para a conta.

1. Abra a pasta do Diário no Claude Code, no modo de código do Claude Desktop. O Claude Code é o Claude trabalhando nos arquivos da pasta (lição 0.4 da T0).
2. Evals são testes de qualidade da IA (T4). Peça: "Liste o que o produto exige de operação humana: alertas, aprovações, backups, custos, evals."
3. Confira a lista com a tabela "Tarefas de operação", na Referência desta lição. Peça para acrescentar o que faltar.
4. Peça: "Organize em rotina diária, semanal e mensal, com tempo estimado por tarefa."
5. Ajuste os tempos com a sua experiência na T5 e na T6. Exemplo fictício: 10 min/dia, 1 h/semana, 2 h/mês.
6. Some as horas do mês e multiplique pelo valor-hora. Some o custo das ferramentas.
7. Defina o gatilho para buscar ajuda. Exemplo fictício: operação acima de 25% das horas da semana.
8. Peça para salvar em `rotina-operacao.md` e faça um commit (versão salva do projeto, lição 0.5 da T0).

**Case.** Fitfolio, app de treino e nutrição. [VERIFICAR: autorização do fundador antes de publicar]

9. Segundo o fundador, ele começou sozinho e sem investimento.
10. Nas publicações mais recentes, ele fala em apps, no plural, e com sócio. O solo foi o começo, não necessariamente o fim.

## Prática

1. Abra a pasta do seu projeto no modo de código do Claude Desktop.
2. Faça o pedido do passo 2 da Demonstração desta lição.
3. Complete com a tabela "Tarefas de operação", na Referência desta lição.
4. Faça o pedido do passo 4 da Demonstração desta lição.
5. Cumpra a rotina por uma semana e anote os tempos reais.
6. Calcule o custo mensal de operar: horas × valor-hora + ferramentas.
7. Defina seu gatilho para buscar sócio, ajuda ou automação (veja "Gatilhos para buscar ajuda", na Referência desta lição).
8. Peça para salvar em `rotina-operacao.md` e faça um commit.

## Checagem

Entrega: `rotina-operacao.md` com tarefas, frequência, tempo real de uma semana, custo mensal e gatilho.

## Referência

**Tarefas de operação (das trilhas)**

| Tarefa | Origem | Frequência sugerida |
| --- | --- | --- |
| Ver alertas: fora do ar, erros, custo, qualidade | Lição D2 da T5 | Diária |
| Aprovar ou rejeitar ações do agente | Lição B3 da T6 | Diária |
| Revisar execuções do agente | Lição B4 da T6 | Semanal |
| Ver uso e custo de IA por organização | Lição B2 da T5 | Semanal |
| Rodar evals antes de mudanças, inclusive troca de modelo | Lição D4 da T4 | A cada mudança |
| Transformar falha encontrada em uso em novo caso de eval | Lição D2 da T4 | Semanal |
| Conferir backup e testar restauração | Lição D3 da T5 | Mensal |
| Revisar a trilha de auditoria (registro de quem fez o quê) | Lição B3 da T5 | Mensal |

[LACUNA: a ementa não define frequências de operação; as da tabela são sugestão]

**Modelo da rotina**

| Frequência | Tarefa | Tempo estimado | Tempo real |
| --- | --- | --- | --- |

**Custo mensal de operar**

- Horas por mês × valor-hora
- \+ ferramentas (tabela de custos da lição 0.3 da T0, com preços atualizados)
- \+ uso de IA (planilha de custo da lição D5 da T4)

**Gatilhos para buscar ajuda**

- Operação passa da fatia de horas que você definiu
- Alerta sem resposta por mais de um dia
- Fila de aprovação acumulando

**Termos**

- Rotina de operação: tarefas recorrentes que mantêm o produto no ar e confiável
- Agente: IA que executa tarefas do produto, com aprovação nas ações de risco
- Backup: cópia dos dados para recuperar em caso de perda
