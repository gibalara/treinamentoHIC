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
2. Peça: "Conte as linhas de cada tabela do banco de produção e salve em docs/migracoes.md." Produção é o banco que os usuários usam.
3. Faça o backup do banco de produção (veja "Backup", na Referência). [VERIFICAR NA INTERFACE]
4. Confirme que o arquivo de backup está fora do repositório: ele contém dados reais.
5. Crie um segundo projeto no Supabase, só para teste, e restaure o backup nele. [VERIFICAR NA INTERFACE]
6. Peça: "Escreva a migração: tabelas organizacoes e membros; campo organizacao_id nos registros; registros atuais na turma 'Turma piloto'; RLS por organização."
7. Leia o plano e confira: nenhum passo apaga tabela ou campo com dados.
8. Peça: "Aplique a migração só no projeto de teste."
9. Peça: "Conte as linhas de novo no teste e compare com docs/migracoes.md."
10. Pare se qualquer contagem diferir. Peça a causa antes de seguir.
11. Rode o app apontando para o teste e entre com duas contas: cada uma vê só os próprios registros. [VERIFICAR NA INTERFACE]
12. Faça novo backup de produção e aplique a mesma migração lá.
13. Conte as linhas em produção, compare e registre o resultado em docs/migracoes.md.
14. Peça um commit com a migração e o registro.

[LINK A CURAR: documentação oficial do Supabase sobre migrações de banco]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça a contagem de linhas de produção e salve em `docs/migracoes.md`.
3. Faça o backup de produção e guarde fora do repositório.
4. Crie o projeto de teste no Supabase e restaure o backup nele.
5. Peça a migração do modelo decidido na lição A1 da T5.
6. Aplique só no teste, compare as contagens e teste com duas contas.
7. Se tudo bater, faça novo backup e aplique em produção.
8. Compare as contagens de produção e preencha o registro (veja "Registro da migração", na Referência).
9. Peça um commit.

## Checagem

Entrega: `docs/migracoes.md` com contagens antes e depois iguais + local e data do backup.

## Referência

**Termos**

- Migração: script que altera tabelas e campos, guardado no repositório
- Backup: cópia completa do banco, guardada fora dele
- Produção: banco e app que os usuários reais usam
- Projeto de teste: segundo projeto no Supabase, com cópia dos dados, para ensaiar
- RLS: regra no banco que limita quais linhas cada usuário vê
- `organizacao_id`: campo que diz a qual organização a linha pertence

**Backup**

- Método no Supabase depende do plano [VERIFICAR NA INTERFACE: backups disponíveis no seu plano]
- Alternativa: "Gere um backup completo do banco num arquivo, fora da pasta do repositório."
- A conexão com o banco usa senha: só em variável de ambiente, nunca no código
- Peça: "Confirme que arquivos de backup estão no .gitignore." `.gitignore` lista o que o git não guarda

**Ordem obrigatória**

1. Contagem de linhas de produção
2. Backup de produção
3. Migração no projeto de teste
4. Contagem e teste com duas contas no teste
5. Novo backup de produção
6. Migração em produção
7. Contagem em produção e registro

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
- Teste com duas contas: [ok/falhou]
- Como desfazer: [restaurar backup X]
```

**Pedidos ao Claude Code**

- "Conte as linhas de cada tabela e salve em docs/migracoes.md."
- "Escreva a migração para [mudança], sem apagar dados."
- "Aplique a migração só no projeto de teste."
- "Compare as contagens com docs/migracoes.md."

**Erros comuns (Tutor HIC)**

| Erro | Solução |
| --- | --- |
| Migração direto em produção | Restaurar o backup e recomeçar pelo teste |
| Backup dentro do repositório | Remover, incluir no `.gitignore`, trocar a senha do banco se foi enviado ao GitHub |
| Campo novo obrigatório em tabela com dados | Preencher as linhas atuais antes de tornar o campo obrigatório |
