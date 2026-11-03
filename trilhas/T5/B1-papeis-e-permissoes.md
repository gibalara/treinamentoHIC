# B1 · Cada papel só faz o que pode (permissões no servidor e no banco)

- **Trilha:** T5 · Escala
- **Tempo:** 75 min
- **Evidência:** teste de bloqueio
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com organizações, surgem pessoas com poderes diferentes: quem usa, quem gerencia, quem administra o produto. Esconder um botão não impede ninguém de chamar a ação direto.

Papel é o conjunto de ações que uma pessoa pode fazer. A permissão precisa ser conferida em duas camadas: no servidor (parte do app fora do navegador) e no banco, pela RLS (regra que limita linhas por usuário).

Se uma camada falhar, a outra segura. Permissões no servidor e no banco são critério eliminatório do marco da T5.

## Demonstração

Exemplo: o Diário de Bordo com três papéis: aluno, gestor da turma e admin do produto.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Escreva a matriz de papéis (veja "Matriz de papéis", na Referência). No Diário: aluno vê os próprios registros; gestor vê o painel da turma; admin vê o painel administrativo.
3. Peça: "Implemente esta matriz de papéis no servidor e na RLS. O papel vem do banco, nunca do navegador."
4. Leia o plano e confira: cada ação da matriz aparece nas duas camadas.
5. Peça: "Escreva testes de bloqueio: cada papel tenta cada ação proibida pela tela e por requisição direta." Requisição direta é chamar o servidor sem passar pela tela.
6. Peça: "Escreva também testes direto no banco, com a RLS, sem passar pelo servidor."
7. Rode os testes e confira: toda ação proibida é recusada nas duas camadas.
8. Faça a prova da segunda camada: peça para desligar temporariamente a checagem do servidor numa ação, num ramo de teste. Ramo é uma cópia paralela do código no git.
9. Rode o teste dessa ação: o banco ainda recusa. Descarte o ramo.
10. Peça um commit com a matriz, as regras e os testes.

[LINK A CURAR: documentação oficial do Supabase sobre autorização com RLS]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Escreva a matriz de papéis do seu produto, a partir da seção 2 do seu `SPEC.md` (especificação do projeto).
3. Peça a implementação no servidor e na RLS.
4. Peça os testes de bloqueio pela tela, por requisição direta e no banco.
5. Rode os testes e corrija até todas as ações proibidas serem recusadas.
6. Faça a prova da segunda camada num ramo de teste e descarte o ramo.
7. Peça um commit.

## Checagem

Entrega: resultado do teste de bloqueio com cada ação proibida recusada no servidor e no banco.

## Referência

**Termos**

- Papel: conjunto de ações que uma pessoa pode fazer
- Servidor: parte do app que roda fora do navegador
- RLS (Row Level Security): regra no banco que limita quais linhas cada usuário vê ou altera
- Requisição direta: chamar o servidor sem passar pela tela
- Teste de bloqueio: teste que confirma a recusa de uma ação proibida
- Ramo (branch): cópia paralela do código no git, descartável

**Matriz de papéis**

| Ação | Aluno | Gestor | Admin |
| --- | --- | --- | --- |
| Criar e ver os próprios registros | Sim | Sim | Não |
| Ver o painel da própria turma | Não | Sim | Não |
| Convidar e remover membros da turma | Não | Sim | Sim |
| Ver o painel administrativo | Não | Não | Sim |

- Exemplo do Diário; adapte linhas e colunas ao seu produto
- Toda célula "Não" vira um teste de bloqueio

**Onde conferir**

| Camada | Confere |
| --- | --- |
| Tela | Nada de segurança; só esconde o que não se aplica |
| Servidor | Papel e organização de quem pede, a cada requisição |
| Banco (RLS) | Papel e organização de novo, linha a linha |

**Pedidos ao Claude Code**

- "Implemente esta matriz de papéis no servidor e na RLS; o papel vem do banco."
- "Escreva testes de bloqueio para cada célula 'Não' da matriz, pela tela, por requisição direta e no banco."
- "Num ramo de teste, desligue a checagem do servidor em [ação] e rode o teste."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Papel guardado no navegador | Usuário se promove alterando a requisição |
| Checagem só no servidor | Um erro no código expõe o banco inteiro |
| Admin do produto lendo conteúdo das organizações | Quebra o isolamento; admin vê uso, não conteúdo |
