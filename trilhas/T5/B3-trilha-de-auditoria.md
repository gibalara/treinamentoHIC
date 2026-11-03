# B3 · Saber quem fez o quê e quando (trilha de auditoria)

- **Trilha:** T5 · Escala
- **Tempo:** 45 min
- **Evidência:** registros consultáveis
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Quando um cliente pergunta quem removeu um membro ou exportou dados, você precisa responder com prova. Lembrança não serve.

Trilha de auditoria é o registro permanente das ações sensíveis: quem fez, o quê, quando e em qual organização. Ninguém altera nem apaga esse registro, nem o admin.

Ela entra no dossiê de governança da lição X7 da trilha transversal. Também ajuda a investigar incidentes.

## Demonstração

Exemplo: o Diário de Bordo registra as ações sensíveis de gestores e admins.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Liste as ações sensíveis do Diário: convite, remoção de membro, troca de papel, exportação e exclusão de dados.
3. Peça: "Crie a tabela de auditoria com os campos de 'Campos do registro', na Referência desta lição. Gere o SQL num arquivo."
4. Peça: "Grave um registro, pelo servidor, a cada ação desta lista." Servidor é a parte do app fora do navegador.
5. Peça: "Pela RLS, ninguém altera nem apaga registros de auditoria, nem o admin."
   RLS é a regra no banco que limita o que cada usuário vê ou altera.
6. Peça: "Crie a tela de auditoria: o gestor vê só a própria turma; o admin vê todas."
   Aprove o plano.
7. Rode o SQL no SQL Editor do Supabase, na ordem da lição A2 da T5 (backup → teste → produção). [VERIFICAR NA INTERFACE]
8. Peça: "Rode o app no meu computador." Como gestor, convide e remova uma conta de teste.
9. Abra a tela de auditoria e confira os dois registros: quem, o quê, quando, qual turma.
10. Peça: "Escreva e rode um teste que tente alterar e apagar um registro de auditoria."
   Peça que rode como gestor e como admin. Confira: recusado.
11. Peça um commit (ponto salvo de versão no git).

[LINK A CURAR: guia oficial do OWASP sobre registro de eventos de segurança]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Liste as ações sensíveis do seu produto (veja "Ações sensíveis", na Referência desta lição).
3. Peça a tabela de auditoria e o registro de cada ação pelo servidor. Rode o SQL na ordem da lição A2 da T5.
4. Peça o bloqueio de alteração e exclusão pela RLS.
5. Peça a tela de auditoria por organização, respeitando a matriz de papéis da lição B1 da T5.
6. Execute duas ações sensíveis e confira os registros.
7. Peça o teste de exclusão recusada, rode e peça um commit.

## Checagem

Entrega: print da consulta de auditoria com duas ações registradas + resultado do teste de exclusão recusada.

## Referência

**Termos**

- Trilha de auditoria: registro permanente de ações sensíveis
- Ação sensível: ação que muda acesso, papel ou dados de uma organização
- Servidor: parte do app que roda fora do navegador
- RLS (Row Level Security): regra no banco que limita o que cada usuário vê ou altera
- Organização: cliente, área ou departamento que agrupa usuários
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code

**Campos do registro**

| Campo | Exemplo |
| --- | --- |
| Data e hora | 2026-11-03 14:05 |
| Quem | Usuário que fez a ação |
| Papel | Gestor |
| Organização | Turma A |
| Ação | Removeu membro |
| Alvo | Usuário removido |

- Nunca gravar senha, chave ou conteúdo do cliente no registro
- A RLS barra o app; o dono do projeto ainda consegue apagar pelo SQL Editor do Supabase. Restrinja quem tem acesso ao painel do Supabase

**Ações sensíveis**

- Convite, entrada e remoção de membro
- Troca de papel
- Exportação de dados
- Exclusão de dados
- Mudança de configuração da organização
- Exemplos fora do Diário: aprovação de proposta, alteração de preço, acesso a documento confidencial

**Pedidos ao Claude Code**

- "Crie a tabela de auditoria e grave um registro a cada ação sensível, pelo servidor."
- "Bloqueie pela RLS a alteração e a exclusão de registros de auditoria."
- "Crie a consulta de auditoria filtrada por organização e papel."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Registro gravado pelo navegador | Pode ser forjado ou omitido |
| Admin consegue apagar registros | A auditoria perde valor de prova |
| Conteúdo do cliente no registro | Dado sensível espalhado |
