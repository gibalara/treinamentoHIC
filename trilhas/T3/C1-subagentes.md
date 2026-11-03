# C1 · Revisores especializados trabalhando por você (subagentes)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 90 min
- **Evidência:** 2 subagentes em uso
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Quem constrói tende a aprovar o que construiu. Com o Claude Code é igual: a mesma conversa que gerou o código revisa com o mesmo viés.

Um subagente é um assistente com papel, instruções e contexto próprios, chamado pelo Claude Code. Faz uma parte do trabalho em separado e devolve só o resultado. Revisar é o uso mais direto: um olhar novo, com critério fixo e acesso só de leitura.

## Demonstração

Exemplo: o Diário de Bordo, que ganha dois subagentes de revisão.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Crie um subagente de projeto chamado 'revisor-de-seguranca'. Papel: revisar mudanças. Critérios: segredos fora do código, chave de API só no servidor, isolamento entre usuários. Só leitura: não altera arquivos." Chave de API é o código de acesso a um serviço, como a IA.
3. Peça: "Crie um subagente de projeto chamado 'revisor-de-aceite'. Papel: comparar a funcionalidade com os critérios de aceite do `SPEC.md`. Só leitura."
4. Peça: "Mostre os dois subagentes e as ferramentas que cada um pode usar." Confira que nenhum pode editar arquivos. [VERIFICAR NA INTERFACE: onde os subagentes aparecem]
5. Peça uma mudança pequena: "Mostre no painel o total de horas do mês."
6. Peça: "Use o revisor-de-seguranca e o revisor-de-aceite nesta mudança."
7. Leia os dois relatórios e confira um apontamento de cada no código ou no `SPEC.md`.
8. Peça as correções procedentes e o commit.

[LINK A CURAR: documentação oficial do Claude Code sobre subagentes]

## Prática

1. Escolha 2 revisões que você repete no seu projeto (veja "Escolha dos subagentes", na Referência).
2. Abra a pasta do seu projeto no modo de código, em **Manual**.
3. Preencha a "Ficha do subagente" (Referência) para cada um. Peça os 2 com o pedido de criação, também na Referência.
4. Peça: "Mostre os dois subagentes e as ferramentas que cada um pode usar." Confira que nenhum pode editar arquivos.
5. Peça uma mudança real: um item pequeno do seu `BACKLOG.md` (lista do que ficou para depois, lição 1.7 da T1).
6. Peça a revisão pelos 2 subagentes, citando o nome de cada um.
7. Confira um apontamento de cada um no código ou no `SPEC.md`.
8. Peça as correções procedentes e o commit, incluindo os arquivos dos subagentes.

## Checagem

Entrega: os arquivos dos 2 subagentes no repositório + os relatórios deles numa mudança real.

## Referência

**Termos**

- Subagente: assistente com papel, instruções e contexto próprios, chamado pelo Claude Code para uma parte do trabalho
- Contexto separado: o subagente não carrega a conversa principal; recebe só a tarefa
- Ferramentas: o que o subagente pode fazer (ler, editar, executar)
- Subagente de projeto: guardado no repositório; vai junto no git

**Ficha do subagente**

| Campo | Conteúdo |
| --- | --- |
| Nome | Papel em 2–3 palavras |
| Quando usar | Descrição que o Claude lê para decidir chamá-lo |
| Critérios | Lista fixa do que verificar |
| Ferramentas | Mínimas; revisor só lê |
| Saída | Lista de apontamentos com arquivo e motivo |

**Escolha dos subagentes**

- Boa escolha: revisão que precisa de critério fixo e olhar independente
- Exemplos:
  - Revisor de segurança: segredos, chave no servidor, isolamento
  - Revisor de aceite: funcionalidade × critérios do `SPEC.md`
  - Revisor de texto: telas na linguagem do usuário do nicho

**Pedidos ao Claude Code**

- "Crie um subagente de projeto chamado [nome]. Papel: [...]. Critérios: [...]. Só leitura."
- "Use o [nome] nesta mudança."
- "Mostre as ferramentas que o [nome] pode usar."
