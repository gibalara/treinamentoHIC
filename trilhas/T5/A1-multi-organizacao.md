# A1 · Atender vários clientes no mesmo produto (multi-organização)

- **Trilha:** T5 · Escala
- **Tempo:** 45 min
- **Evidência:** diagrama + decisão
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Hoje seu produto atende usuários soltos. Para vender a uma empresa, ele precisa atender várias organizações sem misturar dados.

Organização é o grupo que contrata ou usa o produto: cliente, área ou departamento. Multi-organização é um produto só, com várias organizações e dados separados entre elas.

É decisão de arquitetura, não de tela. Errar aqui custa caro, porque corrigir depois exige mudar dados já gravados. Por isso você decide e desenha antes de alterar qualquer coisa.

## Demonstração

Exemplo: o Diário de Bordo, com login, registros, painel e tutor de IA, vai passar a atender turmas.

1. Abra a pasta do Diário no modo de código do Claude Desktop, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Liste as tabelas do banco e diga se cada dado é do usuário, da organização ou de todos."
3. Confira a resposta: registros são do aluno e da turma; o conteúdo do curso é de todos.
4. Defina a organização do Diário: a turma (ou a empresa que contrata a formação).
5. Peça: "Proponha o modelo multi-organização: banco compartilhado, identificador da organização em cada tabela e RLS."
6. Confira na proposta o papel da RLS (regra no banco que limita quais linhas cada usuário vê).
7. Peça: "Desenhe o diagrama das tabelas em Mermaid." Mermaid é um texto que o GitHub desenha como diagrama.
8. Confira no diagrama: toda tabela com dado de turma tem o campo da organização.
9. Responda às decisões abertas (veja "Decisões do modelo", na Referência). No Diário: o aluno pertence a uma turma; o gestor pode ter várias.
10. Peça: "Registre o modelo e as decisões na seção 8 do SPEC.md, com data e motivo." O `SPEC.md` é a especificação do produto.
11. Peça um commit (ponto salvo de versão no git).

[LINK A CURAR: documentação oficial do Supabase sobre RLS (Row Level Security)]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Defina o que é organização no seu produto (veja "Escolha da organização", na Referência).
3. Peça a classificação das tabelas: usuário, organização ou todos.
4. Peça a proposta do modelo multi-organização e o diagrama em Mermaid.
5. Responda às decisões do modelo, uma por uma.
6. Registre modelo e decisões na seção 8 do seu `SPEC.md`.
7. Peça um commit com o diagrama e o `SPEC.md`. Não altere o banco ainda: isso é a lição A2 da T5.

## Checagem

Entrega: diagrama das tabelas + decisão registrada na seção 8 do `SPEC.md`.

## Referência

**Termos**

- Organização: cliente, área ou departamento que agrupa usuários
- Multi-organização: um produto atendendo várias organizações com dados separados
- RLS (Row Level Security): regra no banco que limita quais linhas cada usuário vê
- Mermaid: texto que vira diagrama no GitHub
- `SPEC.md`: especificação do projeto, criada na lição 1.6 da T1

**Escolha da organização**

- Critério: quem paga ou quem não pode ver os dados do vizinho
- Exemplos:
  - Consultoria: cada cliente atendido
  - Empresa: cada área (RH, Financeiro, Comercial)
  - Formação: cada turma ou empresa contratante

**Modelos**

| Modelo | Quando usar |
| --- | --- |
| Banco compartilhado + identificador da organização + RLS | Caminho padrão do curso |
| Um banco separado por organização | Só se o cliente exigir separação física; custo e manutenção multiplicam |

**Decisões do modelo**

- O que é organização no produto?
- Um usuário pode estar em mais de uma organização?
- Quais dados são do usuário, quais são da organização, quais são de todos?
- Quem cria uma organização: o próprio cliente ou só o admin?
- O que acontece com os dados quando a organização sai?

**Pedidos ao Claude Code**

- "Liste as tabelas e classifique cada dado: usuário, organização ou todos."
- "Proponha o modelo multi-organização com identificador da organização e RLS."
- "Desenhe o diagrama das tabelas em Mermaid."
- "Registre a decisão na seção 8 do SPEC.md, com data e motivo."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Tabela de dado da organização sem o campo da organização | Dado sem dono; vaza ou some |
| Separação feita só na tela | Quem altera a requisição vê outra organização |
| Decidir o modelo depois de construir | Migração grande e arriscada |
