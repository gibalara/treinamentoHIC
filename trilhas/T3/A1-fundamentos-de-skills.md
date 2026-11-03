# A1 · Um fluxo de construção melhor em minutos (fundamentos de skills)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** quiz de acionamento
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Você repete ao Claude Code as mesmas orientações: planejar antes, testar, revisar. Uma skill guarda essas orientações num pacote que o Claude carrega sozinho quando o pedido combina.

Coleções de skills da comunidade já trazem fluxos de construção prontos. Instalar uma muda seu processo na hora.

Aqui você instala uma coleção pré-avaliada pelo curso e entende como o Claude decide qual skill usar. Avaliar, adaptar e criar as suas vem nas lições seguintes da T3.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Liste as skills disponíveis nesta sessão, com a descrição de cada uma." Guarde a lista.
3. Instale a coleção pré-avaliada pelo curso (ex.: Superpowers, com fluxos de planejamento, TDD e revisão). Ela vem como plugin (pacote instalável de skills e outras peças). [VERIFICAR NA INTERFACE] [LACUNA: coleção definida pelo curso e rubrica preenchida]
4. Repita o pedido do passo 2 e compare as duas listas.
5. Peça uma funcionalidade pequena: "Quero filtrar os registros do painel por trilha."
6. Observe o fluxo e anote: houve plano antes do código? Teste antes da funcionalidade (TDD)? Revisão no fim?
7. Pergunte: "Quais skills você usou nesta tarefa e por que cada uma foi acionada?"
8. Compare a resposta com as descrições do passo 4.
9. Teste o filtro no navegador e peça o commit.

[LINK A CURAR: documentação oficial da Anthropic sobre skills no Claude Code]

## Prática

1. Abra a pasta do seu projeto da T2b no modo de código, em **Manual**.
2. Peça a lista de skills disponíveis e guarde.
3. Instale a mesma coleção pré-avaliada. [VERIFICAR NA INTERFACE]
4. Escolha a próxima tarefa do seu `TASKS.md` (lista de tarefas criada na lição 1.7 da T1).
5. Peça a tarefa e anote as etapas que mudaram em relação ao seu fluxo da T2b.
6. Pergunte quais skills foram acionadas e por quê.
7. Teste o resultado e peça o commit.

## Checagem

1. O que faz o Claude carregar uma skill sem você citá-la pelo nome?
2. Você pede "corrija este erro" e a skill de depuração não é acionada. O que verificar primeiro?
3. Duas skills instaladas têm descrições parecidas. Que problema isso causa?
4. Qual é a diferença entre uma skill e o `CLAUDE.md` do projeto?
5. Por que o curso só aceita skills de terceiros já avaliadas?

## Referência

**Termos**

- Skill: pacote de instruções (e, às vezes, arquivos de apoio) que ensina o Claude a fazer um tipo de tarefa
- Descrição: texto curto com o que a skill faz e quando usar; o Claude decide por ela
- Acionamento: o momento em que o Claude decide carregar a skill
- Plugin: pacote instalável que reúne skills e outras peças (detalhes na D1 da T3)
- TDD: escrever o teste antes do código da funcionalidade
- `CLAUDE.md`: arquivo de regras do projeto, criado na 2a.2 da T2

**Como o acionamento funciona**

- O Claude conhece nome e descrição de todas as skills disponíveis
- Carrega o conteúdo completo só quando o pedido combina com a descrição
- Você também pode chamar a skill pelo nome: "Use a skill [nome] para..."
- Skill × `CLAUDE.md`: o `CLAUDE.md` vale para toda sessão; a skill entra só no tipo de tarefa dela

**Onde uma skill pode estar**

| Local | Vale para |
| --- | --- |
| Pessoal | Todos os seus projetos neste computador |
| Projeto | Só este repositório; vai junto no git |
| Plugin | Onde o plugin estiver instalado |

**Pedidos ao Claude Code**

- "Liste as skills disponíveis nesta sessão, com a descrição de cada uma."
- "Quais skills você usou nesta tarefa e por que cada uma foi acionada?"
- "Use a skill [nome] para [tarefa]."

**Regra do curso:** nenhuma skill de terceiro sem avaliação (rubrica na A7 da T3)
