# A4 · O Claude seguindo os padrões do seu produto (skill do projeto)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 60 min
- **Evidência:** skill + funcionalidade gerada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Cada funcionalidade nova repete as mesmas exigências do seu produto: critério de aceite, isolamento entre usuários, teste e commit. Quando você esquece de pedir uma, o Claude Code também esquece.

Uma skill do projeto (pacote de instruções guardado no repositório) guarda esse padrão. O Claude o aplica toda vez que constrói algo. O `CLAUDE.md` guarda regras gerais; a skill guarda o passo a passo de um tipo de tarefa.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Leia o `SPEC.md`, o `CLAUDE.md` e o código. Liste os padrões que toda funcionalidade nova deste projeto segue."
3. Revise a lista e corte o que já está no `CLAUDE.md`.
4. Cole o "Roteiro da skill do projeto", na Referência. Peça: "Crie uma skill de projeto chamada 'nova-funcionalidade-diario' com estes passos."
5. Peça: "Mostre a skill e explique cada passo." Confira a descrição: deve citar "nova tela", "nova funcionalidade" e "novo campo".
6. Em sessão nova, peça: "Quero marcar um registro como favorito."
7. Pergunte quais skills foram usadas e confira se a 'nova-funcionalidade-diario' entrou.
8. Confira a entrega: critério de aceite escrito, isolamento entre usuários, teste e commit.
9. Teste com duas contas, como na lição 2a.5 da T2: a outra conta não vê os favoritos da primeira.

[LINK A CURAR: documentação oficial da Anthropic sobre skills de projeto no Claude Code]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Manual**.
2. Peça: "Leia o `SPEC.md`, o `CLAUDE.md` e o código. Liste os padrões que toda funcionalidade nova deste projeto segue."
3. Revise e corte o que já está no seu `CLAUDE.md`.
4. Adapte o "Roteiro da skill do projeto", na Referência. Tire o que não se aplica e acrescente os padrões do passo 3. Peça a skill do projeto com ele.
5. Escolha outra funcionalidade pequena do seu `BACKLOG.md` (lista do que ficou fora do MVP, criada na lição 1.7 da T1). Critério: cabe num ciclo e não usa IA.
6. Peça a funcionalidade em sessão nova, sem citar a skill.
7. Pergunte quais skills foram usadas. Confira se a sua entrou e se cada passo do roteiro foi cumprido.
8. Teste com duas contas, como no passo 9 da Demonstração.
9. Ajuste a skill onde houve desvio e peça o commit.

## Checagem

Entrega: a skill do projeto + a funcionalidade gerada com ela (commit e print da tela).

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Skill do projeto: skill guardada no repositório; vale só nele e vai junto no git
- `CLAUDE.md`: regras do projeto, lidas em toda sessão (criado na lição 2a.2 da T2)
- Isolamento entre usuários: um usuário não vê dados de outro (lição 2a.5 da T2)

**Roteiro da skill do projeto**

1. Ler a seção do `SPEC.md` ligada ao pedido
2. Escrever o critério de aceite antes de construir
3. Planejar e mostrar o plano antes de alterar arquivos
4. Garantir isolamento entre usuários em tabela e tela novas
5. Criar teste a partir do critério de aceite
6. Rodar os testes
7. Explicar o que mudou do ponto de vista de arquitetura e risco
8. Propor a mensagem de commit

**Skill do projeto × `CLAUDE.md`**

| Peça | Guarda | Entra |
| --- | --- | --- |
| `CLAUDE.md` | Regras gerais e proibições | Em toda sessão |
| Skill do projeto | Passo a passo de um tipo de tarefa | Quando o pedido combina |

**Pedidos ao Claude Code**

- "Liste os padrões que toda funcionalidade nova deste projeto segue."
- "Crie uma skill de projeto chamada [nome] com estes passos."
- "Quais skills você usou nesta tarefa?"

**Erro comum:** outra skill instalada entra no lugar da sua. Torne a descrição específica do projeto (estrutura na lição A2 da T3).
