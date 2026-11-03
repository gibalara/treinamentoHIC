# D2 · Escolher a peça certa para cada necessidade (orquestração)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** 5 decisões justificadas
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com skills, conectores, subagentes, comandos, hooks, n8n e código disponíveis, o erro comum é usar a peça errada. Hook onde bastava skill trava o trabalho; skill onde precisava de hook deixa a regra falhar.

Orquestração aqui é decidir qual peça resolve cada necessidade. A árvore de decisão do curso responde com uma pergunta por peça.

## Demonstração

Exemplo: o Diário de Bordo e cinco necessidades reais dele.

1. Liste as necessidades:
   - Toda tela nova segue o padrão do Diário.
   - O Claude responde "em que lições travei mais?".
   - A revisão de segurança precisa de olhar independente.
   - Nunca gravar chave de API no código.
   - Avisar por e-mail quando alguém fica 7 dias sem registrar.
2. Para cada uma, percorra a árvore de decisão (veja "Árvore de decisão", na Referência).
3. Registre a peça escolhida e a pergunta da árvore que decidiu:
   - Padrão de tela → skill: o Claude precisa saber *como*.
   - Pergunta sobre registros → MCP: precisa *acessar* dados.
   - Revisão independente → subagente: papel e contexto separados.
   - Chave fora do código → hook: verificação que deve acontecer sempre.
   - Aviso por e-mail → n8n: fluxo de negócio entre sistemas.
4. Para cada decisão, anote a alternativa descartada e por quê.
5. Salve a tabela no repositório do Diário e peça o commit no Claude Code.

[LINK A CURAR: visão geral oficial das formas de estender o Claude Code]

## Prática

1. Liste 5 necessidades reais do seu projeto ou do seu trabalho.
2. Percorra a árvore de decisão para cada uma.
3. Registre a peça, a pergunta que decidiu e a alternativa descartada.
4. Marque o que já existe no seu projeto e o que falta criar.
5. Salve a tabela no repositório e peça o commit.

## Checagem

Entrega: tabela com 5 decisões, cada uma com peça, justificativa e alternativa descartada.

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Conector / MCP: ligação que dá ao Claude acesso a dados e ações de outro sistema
- Subagente: assistente com papel e contexto próprios, chamado pelo Claude Code
- Comando: atalho iniciado por barra com passos fixos
- Hook: verificação automática em momentos fixos
- n8n: ferramenta de automação de fluxos entre sistemas (T5)

**Árvore de decisão**

| Se a necessidade é… | Use |
| --- | --- |
| O Claude saber *como* fazer | Skill |
| O Claude *acessar* dados ou sistemas | Conector / MCP |
| Uma parte pedir papel ou contexto separado | Subagente |
| Uma sequência repetida | Comando |
| Uma verificação que deve acontecer sempre | Hook |
| Fluxo de negócio entre sistemas | n8n |
| Núcleo do produto, permissões, dados sensíveis e cobrança | Código |

**Tabela de decisões**

| Necessidade | Peça | Pergunta que decidiu | Alternativa descartada e motivo | Existe? |
| --- | --- | --- | --- | --- |
| | | | | Sim / Falta |

**Sinais de peça errada**

- Regra que "às vezes" é seguida: era hook, não skill
- Hook que bloqueia trabalho legítimo: era skill ou comando
- Lógica de permissão em n8n ou em skill: era código
