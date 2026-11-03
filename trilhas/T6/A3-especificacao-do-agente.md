# A3 · O agente descrito antes de existir (especificação do agente)

- **Trilha:** T6 · Autonomia
- **Tempo:** 60 min
- **Evidência:** seção do agente
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Agente (programa em que a IA escolhe passos e usa ferramentas) sem especificação vira caixa-preta. Ninguém sabe o que ele pode fazer nem quando para.

A seção do agente no `SPEC.md` fixa objetivo, gatilho, ferramentas, limites, aprovação e registro antes do código. O Claude Code constrói a partir dela nas lições B1 a B5 da T6. Os cenários de avaliação da lição D1 da T6 também saem daqui.

## Demonstração

Exemplo: a seção do agente semanal do Diário de Bordo.

1. Peça ao Claude Code: "Leia o SPEC.md e a matriz de autonomia da seção 6. Proponha a seção do agente com o template abaixo." Cole o template (veja "Template da seção do agente", na Referência).
2. Confira o objetivo: "Uma vez por semana, analisar as travas de cada aluno e sugerir o próximo passo."
3. Confira o gatilho: agendado, semanal, uma execução por organização (turma ou empresa isolada no produto).
4. Confira as entradas: registros da semana e datas-alvo, só da organização da execução.
5. Confira as ferramentas (funções do produto que o agente pode chamar): cada uma com o nível da matriz.
6. Confira os limites: passos, custo e tempo máximos. Os valores são definidos na lição B2 da T6.
7. Confira a aprovação: o alerta ao gestor fica na fila do painel até o admin da organização decidir.
8. Confira as paradas: objetivo cumprido, limite atingido, interruptor desligado ou informação insuficiente.
9. Confira o "nunca faz": remover aluno, enviar sem aprovação, ler outra organização.
10. Corrija o que discordar e peça um commit (versão salva no git).

## Prática

1. Abra o `SPEC.md` do seu projeto no Claude Code.
2. Peça a proposta da seção do agente com o template, a partir da decisão da lição A1 e da matriz da lição A2 da T6.
3. Confira cada campo contra a matriz. Nenhuma ação de nível 2 pode virar ação direta.
4. Preencha o "nunca faz" com as ações de nível 1 e os riscos do seu nicho.
5. Deixe os valores de limite como "a definir na B2 da T6".
6. Salve a seção dentro da seção 6 do `SPEC.md` e peça um commit.

## Checagem

Entrega: seção do agente no `SPEC.md`, com os 10 campos do template preenchidos.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Ferramenta (tool): função do produto que o agente pode chamar, como "ler registros"
- Gatilho: o que inicia uma execução (horário agendado, evento ou pedido)
- Execução: uma rodada completa do agente, do início à parada
- Organização: cliente, área ou turma isolada no produto (T5)
- Commit: versão salva no git

**Template da seção do agente**

```markdown
### Agente: [nome]
1. Objetivo: [o que entrega, em uma frase]
2. Gatilho: [agendado / evento / pedido] + frequência
3. Entradas: [dados lidos] + escopo (só a organização da execução)
4. Ferramentas: [nome, o que faz, nível da matriz]
5. Limites: passos [a definir], custo [a definir], tempo [a definir]
6. Aprovação: [ações de nível 2] + aprovador [papel]
7. Paradas: objetivo cumprido / limite / interruptor / informação insuficiente
8. Registro: toda execução no painel, com trajetória e custo
9. Nunca faz: [ações proibidas]
10. Cenários de avaliação: ver lição D1 da T6
```

**Pedidos ao Claude Code**

- Proposta: "Proponha a seção do agente com este template, a partir do SPEC.md e da matriz."
- Auditoria: "Compare a seção do agente com a matriz. Liste divergências."

**Erros comuns**

- Objetivo vago ("ajudar os alunos"): não dá para testar
- Entradas sem escopo de organização
- "Nunca faz" vazio
