# C1 · Dividir o trabalho do agente só quando compensa (multiagentes: orquestrador + especialista)

- **Trilha:** T6 · Autonomia
- **Tempo:** 90 min
- **Evidência:** decisão justificada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Um agente (programa em que a IA escolhe passos e usa ferramentas) com muitas ferramentas e muito contexto erra mais e é difícil de testar.

Dividir em orquestrador (agente que reparte a tarefa e decide) e especialista (agente com papel e ferramentas restritos) isola contexto e permissões. Mas aumenta custo, tempo e pontos de falha.

Divida só quando uma parte pede papel ou contexto separado. Manter um agente só também é decisão válida, desde que registrada.

## Demonstração

Exemplo: o agente semanal do Diário de Bordo numa turma de teste com 20 alunos fictícios.

1. Abra no painel a trajetória (sequência de passos e ferramentas) de uma execução do agente único.
2. Anote passos, custo e tempo da execução.
3. Procure os sinais para dividir (veja "Sinais para dividir", na Referência).
4. Sinal encontrado: o contexto cresce a cada aluno, e a análise de travas não precisa de ferramenta de escrita.
5. Peça ao Claude Code: "Proponha uma divisão orquestrador + especialista para o agente semanal. Compare custo, risco e testes com o agente único."
6. Proposta: o especialista "analista de travas" lê os registros de um aluno e devolve o diagnóstico. Só tem ferramentas de leitura.
7. O orquestrador recebe os diagnósticos e decide. Só ele grava sugestões e prepara alertas para a fila.
8. Peça: "Implemente a divisão. Limites, registro e interruptor valem para orquestrador e especialista."
9. Rode na Turma Teste e compare passos, custo e tempo com o agente único.
10. Decida pelos números. Se não houver ganho, mantenha o agente único.
11. Registre no `SPEC.md` (arquivo de especificação), seção 8: decisão, motivo e números. Peça um commit.

[LINK A CURAR: documentação oficial da Anthropic sobre padrões de múltiplos agentes (orquestrador e especialistas)]

## Prática

1. Abra no painel a trajetória de uma execução do seu agente.
2. Anote passos, custo e tempo.
3. Procure os sinais para dividir.
4. Peça ao Claude Code a proposta e a comparação.
5. Se dividir: peça a implementação e refaça os testes das lições B2, B3 e B5 da T6.
6. Compare os números com o agente único.
7. Registre a decisão na seção 8 do `SPEC.md`, com motivo e números.
8. Peça um commit.

## Checagem

Entrega: decisão sobre multiagentes na seção 8 do `SPEC.md`, com motivo e a comparação de passos, custo e tempo.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Multiagentes: mais de um agente dividindo a mesma tarefa
- Orquestrador: agente que reparte a tarefa, chama especialistas e decide as ações
- Especialista: agente com um papel e poucas ferramentas, chamado pelo orquestrador
- Trajetória: sequência de passos e ferramentas usadas numa execução
- Diferença da T3: os subagentes da lição C1 da T3 ajudam você a construir; estes rodam dentro do produto

**Sinais para dividir**

- Uma parte precisa de contexto grande que o resto não usa
- Uma parte só lê e pode ficar sem ferramentas de escrita
- Uma parte pede papel distinto (ex.: analisar vs. decidir)
- Árvore de decisão da lição D2 da T3: subagente quando uma parte pede papel ou contexto separado

**Template da decisão (seção 8)**

- [data] Multiagentes: [divide / não divide]. Motivo: [sinal]. Números: passos [x → y], custo [x → y], tempo [x → y]

**Regras**

- Ações de nível 2 ficam só com o orquestrador
- Limites, registro e interruptor valem para todos os agentes

**Erros comuns**

- Dividir porque "parece mais profissional"
- Dar ao especialista as mesmas ferramentas do orquestrador
