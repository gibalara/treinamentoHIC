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
3. Copie a tabela "Pedidos de teste", na Referência: 3 pedidos que devem acionar e 2 que não devem.
4. Rode cada pedido numa sessão nova (barra lateral, **Criar**) e pergunte: "Você usou alguma skill? Qual?"
5. Anote na coluna "Antes" da tabela: acionou certo ou errado.
6. Peça: "Reescreva a descrição da skill 'registro-de-trava' com: o que faz, quando usar, palavras do usuário e quando não usar."
7. Leia a descrição nova e corte o que não ajuda o Claude a decidir se usa a skill.
8. Rode os mesmos 5 pedidos em sessões novas e preencha a coluna "Depois".
9. Peça o commit.

[LINK A CURAR: guia oficial da Anthropic sobre boas práticas para escrever skills]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Manual**.
2. Escolha uma tarefa semanal, de formato fixo (veja "Escolha da tarefa", na Referência).
3. Peça uma skill de projeto mínima para essa tarefa. Use uma descrição genérica, como no passo 2 da Demonstração.
4. Monte 5 pedidos de teste no modelo de "Pedidos de teste", na Referência. Três devem acionar; dois, de tarefas vizinhas, não.
5. Rode cada pedido numa sessão nova e registre a coluna "Antes".
6. Reescreva a descrição com a "Estrutura da descrição", na Referência.
7. Rode os mesmos pedidos em sessões novas e registre a coluna "Depois". Ajuste a descrição até acertar os 5.
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

**Escolha da tarefa**

- Boa escolha: pedido semanal, com resultado de formato fixo
- Exemplos: registro de decisão na seção 8 do `SPEC.md`; resumo de conversa com usuário; nota de versão de uma mudança
- Evitar: tarefa que muda a cada vez ou que já tem skill instalada

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
