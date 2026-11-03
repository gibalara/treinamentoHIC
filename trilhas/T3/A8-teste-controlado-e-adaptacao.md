# A8 · Provar que a skill ajuda e ajustá-la ao seu jeito (teste controlado e adaptação)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 75 min
- **Evidência:** antes/depois + skill adaptada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Uma skill de mercado (pacote de instruções publicado por terceiros) pode parecer boa e não mudar nada no seu resultado. Ou piorar.

O teste controlado responde com dados: mesma tarefa, mesmo ponto de partida, com e sem a skill. Os critérios são definidos antes de rodar.

Depois, você adapta a skill ao seu projeto: corta o que não serve e encaixa nas suas regras. O resultado preenche o "ganho medido" da rubrica da A7 da T3.

## Demonstração

Exemplo: o Diário de Bordo e uma skill de revisão de segurança aprovada para teste na A7 da T3.

1. Escolha a tarefa: "Revise a segurança do Diário de Bordo e liste os problemas."
2. Defina os critérios antes de rodar (veja "Critérios do teste", na Referência).
3. Abra a pasta do Diário no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
4. Peça: "Faça um commit de tudo e anote o identificador dele como ponto de partida."
5. Com a skill desligada, rode a tarefa numa sessão nova e salve o resultado. [VERIFICAR NA INTERFACE: como desligar uma skill]
6. Peça: "Volte o projeto ao commit de ponto de partida."
7. Com a skill ligada, rode a mesma tarefa numa sessão nova e salve o resultado.
8. Pontue os dois resultados nos mesmos critérios e preencha a tabela antes/depois.
9. Peça: "Adapte esta skill ao projeto: siga o `CLAUDE.md` e remova passos para tecnologias que não usamos."
10. Rode a tarefa de novo com a skill adaptada e pontue.
11. Atualize o "ganho medido" na avaliação da A7 da T3 e peça o commit.

[LINK A CURAR: guia oficial da Anthropic sobre testar e iterar skills]

## Prática

1. Escolha uma skill aprovada para teste nas suas avaliações da A7 da T3.
2. Escolha uma tarefa real do seu projeto em que ela deveria ajudar.
3. Escreva 3 a 5 critérios antes de rodar.
4. Faça o commit de ponto de partida.
5. Rode sem a skill, salve o resultado e volte ao ponto de partida.
6. Rode com a skill e salve o resultado.
7. Pontue os dois nos mesmos critérios.
8. Adapte a skill ao seu projeto e rode de novo.
9. Atualize o "ganho medido" na avaliação e peça o commit.

## Checagem

Entrega: tabela antes/depois (sem skill, com skill, skill adaptada) + a skill adaptada no repositório.

## Referência

**Termos**

- Skill de mercado: skill publicada por terceiros
- Teste controlado: mesma tarefa e mesmo ponto de partida; só a skill muda
- Ponto de partida: commit para o qual você volta antes de cada rodada
- Adaptação: ajuste da skill às regras e à pilha do seu projeto

**Critérios do teste (exemplo do Diário)**

| Critério | Sem skill | Com skill | Adaptada |
| --- | --- | --- | --- |
| Verificou se há segredos no código? | | | |
| Verificou isolamento entre usuários? | | | |
| Problemas falsos (não existem) | | | |
| Tempo até o resultado | | | |

**Regras do teste**

- Critérios escritos antes de rodar
- Sessão nova a cada rodada
- Mesma frase de pedido nas três rodadas
- Volta ao ponto de partida entre rodadas

**Adaptação**

- Cortar passos para tecnologias que você não usa
- Apontar para o `CLAUDE.md` em vez de repetir regras
- Ajustar a descrição de acionamento (estrutura na A2 da T3)
- Registrar no topo da skill: origem, data e o que mudou
- Respeitar a licença avaliada na A7 da T3

**Pedidos ao Claude Code**

- "Faça um commit de tudo e anote o identificador como ponto de partida."
- "Volte o projeto ao commit [identificador]."
- "Adapte esta skill ao projeto: [regras]."
