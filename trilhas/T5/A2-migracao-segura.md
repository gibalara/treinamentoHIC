# A2 · Mudar o banco sem perder dados (migração segura: backup → teste → produção)

- **Trilha:** T5 · Escala
- **Tempo:** 2 h
- **Evidência:** migração sem perda
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O modelo multi-organização exige mudar o banco que já tem dados de usuários reais. Um erro aqui apaga ou mistura dados sem volta.

Migração é a alteração da estrutura do banco (tabelas e campos) feita por um script guardado no repositório. A ordem é fixa: backup, teste numa cópia, produção. Backup é a cópia completa do banco, guardada fora dele.

É a lição de maior risco técnico da formação. Migração sem perda é critério eliminatório do marco da T5.

## Demonstração

Exemplo: o Diário de Bordo ganha turmas; os registros existentes precisam de dono.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Gere em docs/contagem.sql o SQL que conta as linhas de cada tabela." Aprove o plano.
   SQL é a linguagem de comandos do banco.
3. No Supabase, abra o projeto de produção (o banco que os usuários usam). No SQL Editor, rode `docs/contagem.sql`. [VERIFICAR NA INTERFACE]
4. Peça: "Crie docs/migracoes.md com este resultado como contagem antes." Cole o resultado na conversa: contagens não são segredo.
5. Faça o backup de produção (veja "Backup", na Referência desta lição). Guarde o arquivo fora da pasta do repositório: ele contém dados reais.
6. Crie um segundo projeto no Supabase, `diario-teste`, e restaure o backup nele (veja "Projeto de teste", na Referência desta lição). [VERIFICAR NA INTERFACE]
7. Rode `docs/contagem.sql` no SQL Editor do teste. Os números devem ser iguais aos de produção.
8. Peça a migração em `docs/migracoes/001-organizacoes.sql`, com os itens de "Migração do Diário", na Referência desta lição.
9. Peça: "Liste cada comando da migração que apaga ou altera dados existentes."
   Esperado: nenhum DROP ou DELETE (comandos que apagam) em tabela com dados.
10. Confira o nome do projeto no topo do painel: precisa ser `diario-teste`. Rode a migração no SQL Editor do teste.
11. Rode `docs/contagem.sql` e `docs/sem-organizacao.sql` no teste. Esperado: contagens iguais às de antes e zero linhas sem `organizacao_id`.
12. Pare se qualquer número diferir. Cole o resultado na conversa e peça a causa antes de seguir.
13. No `.env.local`, troque a URL e a chave pelas do teste, pelo editor. Guarde os valores de produção para voltar.
14. Peça: "Rode o app no meu computador." Entre com duas contas.
   Cada uma vê todos os próprios registros antigos e nenhum da outra.
15. Volte os valores de produção no `.env.local`.
16. Faça novo backup de produção. Rode a mesma migração no SQL Editor de produção, conferindo o nome do projeto.
17. Rode os dois arquivos de contagem em produção. Peça para registrar o resultado em `docs/migracoes.md` (veja "Registro da migração", na Referência desta lição).
18. Peça um commit (ponto salvo de versão no git) com a migração e o registro.

[LINK A CURAR: documentação oficial do Supabase sobre backups e migrações de banco]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça o `docs/contagem.sql`: linhas por tabela.
3. Rode-o no SQL Editor de produção e registre a contagem antes em `docs/migracoes.md`.
4. Faça o backup de produção e guarde fora do repositório.
5. Crie o projeto de teste no Supabase, restaure o backup e confira que a contagem é igual.
6. Peça a migração do modelo decidido na lição A1 da T5, num arquivo em `docs/migracoes/`.
   Peça também o SQL que conta linhas sem o campo da organização.
7. Peça a lista de comandos que apagam ou alteram dados. Se houver algum em tabela com dados, peça outra versão.
8. Rode a migração só no teste, conferindo o nome do projeto. Rode as duas contagens: números iguais e zero linhas sem organização.
9. Aponte o app para o teste pelo `.env.local` e entre com duas contas. Depois, volte para produção.
10. Se tudo bater, faça novo backup e rode a migração em produção.
11. Rode as duas contagens em produção e preencha o registro.
12. Peça um commit.

## Checagem

Entrega: `docs/migracoes.md` com contagens antes e depois iguais + local e data do backup.

## Referência

**Termos**

- Migração: script que altera tabelas e campos, guardado no repositório
- Modo **Plano**: o Claude Code propõe um plano e só grava arquivos depois da sua aprovação
- Backup: cópia completa do banco, guardada fora dele
- Produção: banco e app que os usuários reais usam
- Projeto de teste: segundo projeto no Supabase, com cópia dos dados, para ensaiar
- SQL: linguagem de comandos do banco; o Claude Code gera, você roda no SQL Editor do Supabase
- SQL Editor: tela do Supabase onde se roda SQL
- `.env.local`: arquivo local com URL e chaves do Supabase; fica fora do GitHub
- RLS: regra no banco que limita quais linhas cada usuário vê
- `organizacao_id`: campo que diz a qual organização a linha pertence

**Backup**

- Painel do Supabase, área de backups: disponibilidade e download dependem do plano [VERIFICAR NA INTERFACE: se o seu plano permite baixar o backup]
- Alternativa: o Claude Code gera o arquivo com a ferramenta de exportação do Postgres [LACUNA: método de backup sem terminal no plano gratuito; a ferramenta exige instalação não prevista no checklist de setup da T0]
- A conexão direta com o banco usa senha: só no `.env.local`, colada pelo editor, nunca na conversa
- Peça: "Confirme que arquivos de backup estão no .gitignore." `.gitignore` lista o que o git não guarda

**Projeto de teste**

- Segundo projeto no Supabase, com nome que deixe claro que é teste
- Restaurar o backup nele [LACUNA: método de restauração sem terminal; confirmar se as contas de login vêm junto]
- Antes de rodar qualquer SQL, confira o nome do projeto no topo do painel

**Migração do Diário (exemplo)**

- Tabelas `organizacoes` e `membros`
- Campo `organizacao_id` nos registros
- Registros atuais na turma "Turma piloto"
- RLS por organização, mantendo a regra por usuário
- Em `docs/sem-organizacao.sql`: SQL que conta linhas sem `organizacao_id`

**Ordem obrigatória**

1. Contagem de linhas de produção
2. Backup de produção
3. Restauração no teste e contagem igual à de produção
4. Migração no projeto de teste
5. Contagem e teste com duas contas no teste
6. Novo backup de produção
7. Migração em produção
8. Contagem em produção e registro

**Pare se**

- Alguma contagem mudou sem explicação
- A migração apaga tabela ou campo com dados
- Alguma linha ficou sem `organizacao_id`
- Uma conta viu dado de outra no teste

**Registro da migração (`docs/migracoes.md`)**

```markdown
## [data] [nome da migração]
- Backup: [local] [data e hora]
- Contagem antes (produção): [tabela: linhas]
- Contagem depois (teste): [tabela: linhas]
- Contagem depois (produção): [tabela: linhas]
- Linhas sem `organizacao_id`: [0]
- Teste com duas contas: [ok/falhou]
- Como desfazer: [restaurar backup X]
```

**Pedidos ao Claude Code**

- "Gere em docs/contagem.sql o SQL que conta as linhas de cada tabela."
- "Gere em docs/sem-organizacao.sql o SQL que conta linhas sem organizacao_id."
- "Escreva a migração para [mudança] em docs/migracoes/, sem apagar dados."
- "Liste cada comando da migração que apaga ou altera dados existentes."
- "Compare esta contagem com a registrada em docs/migracoes.md." (cole o resultado)

**Erros comuns (Tutor HIC)**

| Erro | Solução |
| --- | --- |
| Migração direto em produção | Restaurar o backup e recomeçar pelo teste |
| SQL rodado no projeto errado | Conferir o nome do projeto no topo do painel antes de cada execução |
| App de produção apontando para o teste | Voltar os valores de produção no `.env.local` |
| Backup dentro do repositório | Remover, incluir no `.gitignore`, trocar a senha do banco se foi enviado ao GitHub |
| Campo novo obrigatório em tabela com dados | Preencher as linhas atuais antes de tornar o campo obrigatório |
