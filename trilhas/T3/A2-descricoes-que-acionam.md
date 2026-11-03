# A2 · Skills que entram em ação na hora certa (descrições de acionamento)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** antes/depois
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Uma skill (pacote de instruções que o Claude carrega quando o pedido combina) só ajuda se for acionada. O Claude decide pela descrição, o texto curto que diz o que a skill faz e quando usar.

Descrição vaga gera dois erros: a skill não entra quando deveria, ou entra quando não deveria. Os dois custam retrabalho.

Aqui você reescreve uma descrição e prova, com pedidos de teste, que ela passou a acionar certo.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Crie uma skill de projeto chamada 'registro-de-trava' com a descrição 'Ajuda com registros'. Instrução: transformar o relato de uma trava em causa, tentativa e aprendizado."
3. Escreva 5 pedidos de teste: 3 que devem acionar e 2 que não devem (veja "Pedidos de teste", na Referência).
4. Rode cada pedido numa sessão nova e pergunte: "Você usou alguma skill? Qual?"
5. Anote o resultado na tabela antes/depois: acionou certo ou errado.
6. Peça: "Reescreva a descrição da skill 'registro-de-trava' com: o que faz, quando usar, palavras do usuário e quando não usar."
7. Leia a descrição nova e corte o que não ajuda a decidir.
8. Rode os mesmos 5 pedidos em sessões novas e preencha a coluna "depois".
9. Peça o commit.

[LINK A CURAR: guia oficial da Anthropic sobre boas práticas para escrever skills]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Manual**.
2. Escolha uma tarefa recorrente do seu projeto que tenha regra clara.
3. Peça uma skill de projeto mínima para essa tarefa, com descrição de uma linha genérica.
4. Escreva 5 pedidos de teste: 3 que devem acionar, 2 que não devem.
5. Rode os pedidos em sessões novas e registre o "antes".
6. Reescreva a descrição com a estrutura da Referência.
7. Rode os mesmos pedidos e registre o "depois".
8. Peça o commit.

## Checagem

Entrega: tabela antes/depois com os 5 pedidos de teste e as duas versões da descrição.

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Descrição: texto que o Claude lê para decidir se usa a skill
- Acionamento: o Claude decidir carregar a skill
- Skill de projeto: skill guardada no repositório; vale só nele e vai junto no git
- Falso positivo: a skill entra num pedido que não é dela
- Falso negativo: a skill não entra num pedido que é dela

**Estrutura da descrição**

- O que faz, em uma frase
- Quando usar: situações e palavras que o usuário diria
- Quando não usar: o vizinho mais parecido que não é dela

**Pedidos de teste (exemplo do Diário)**

| Pedido | Deve acionar? | Antes | Depois |
| --- | --- | --- | --- |
| "Travei no deploy, o build falhou duas vezes" | Sim | | |
| "Registre que perdi 1 hora com a variável de ambiente" | Sim | | |
| "O que aprendi com a trava de ontem?" | Sim | | |
| "Crie a tela de cadastro" | Não | | |
| "Resuma meus registros da semana" | Não | | |

**Pedidos ao Claude Code**

- "Você usou alguma skill nesta resposta? Qual e por quê?"
- "Reescreva a descrição da skill [nome] com: o que faz, quando usar, palavras do usuário e quando não usar."

**Erros comuns**

- Testar na mesma sessão: o histórico influencia; use sessão nova
- Descrição com o nome da tecnologia, não com a situação do usuário
- Descrição longa demais: o critério de decisão se perde
