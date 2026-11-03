# D3 · Recuperar os dados depois de um desastre (backup e recuperação)

- **Trilha:** T5 · Escala
- **Tempo:** 45 min
- **Evidência:** restauração testada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Um comando errado, uma migração ruim ou um ataque podem apagar os dados dos clientes. Ter backup não basta: backup nunca restaurado é aposta.

Backup é a cópia completa do banco, guardada fora dele. Recuperação (restauração) é colocar essa cópia de volta para funcionar.

Saiba três coisas antes do problema: a data do último backup, o tempo para restaurar e quem sabe restaurar.

## Demonstração

Exemplo: o banco de produção do Diário de Bordo no Supabase. Produção é o banco que os usuários reais usam.

1. No painel do Supabase, confira quais backups automáticos o plano oferece e de quando é o último. [VERIFICAR NA INTERFACE]
2. Abra a pasta do Diário no modo de código, em **Manual** (pede aprovação antes de cada mudança). Peça: "Crie docs/backup.md com o modelo de 'Registro de restauração', na Referência desta lição."
3. Preencha a seção "Backup automático" com o que viu no passo 1.
4. Peça: "Gere em docs/contagem.sql o SQL que conta as linhas de cada tabela."
   SQL é a linguagem de comandos do banco.
5. Rode `docs/contagem.sql` no SQL Editor de produção (tela do Supabase que roda SQL). Cole o resultado na conversa e peça para registrá-lo em `docs/backup.md`. [VERIFICAR NA INTERFACE]
6. Gere um backup completo de produção, fora da pasta do repositório (veja "Backup", na Referência desta lição).
7. Anote a hora de início. Restaure o backup num projeto de teste do Supabase, segundo projeto só para ensaio (veja "Restauração", na Referência desta lição).
8. Rode `docs/contagem.sql` no SQL Editor do projeto de teste, conferindo o nome do projeto no topo. Contagens iguais, sem exceção.
9. No `.env.local`, troque URL e chave pelas do teste, pelo editor. Peça: "Rode o app no meu computador."
10. Entre com duas contas de turmas diferentes. Cada uma vê só a própria turma e todos os próprios registros.
11. Volte os valores de produção no `.env.local`. Anote a hora de fim e o tempo total.
12. Preencha a seção "Restauração testada" de `docs/backup.md` e peça um commit.

[LINK A CURAR: documentação oficial do Supabase sobre backups e restauração]

## Prática

1. Confira os backups automáticos do seu plano no Supabase e peça o `docs/backup.md` com o modelo da Referência desta lição.
2. Rode a contagem de linhas em produção e registre.
3. Gere um backup completo, fora do repositório.
4. Restaure no projeto de teste, cronometrando.
5. Compare as contagens e teste com duas contas de organizações diferentes, com o `.env.local` apontando para o teste.
6. Volte o `.env.local` para produção.
7. Preencha o registro e defina a rotina (veja "Rotina de backup", na Referência desta lição).
8. Peça um commit.

## Checagem

Entrega: `docs/backup.md` com contagens iguais, tempo de restauração e rotina definida.

## Referência

**Termos**

- Backup: cópia completa do banco, guardada fora dele
- Restauração: colocar o backup de volta para funcionar
- Produção: banco e app que os usuários reais usam
- Projeto de teste: segundo projeto no Supabase, para ensaiar sem risco
- `.gitignore`: lista do que o git não guarda
- `.env.local`: arquivo local com URL e chaves do Supabase; fica fora do GitHub
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code

**Backup**

- Automático: depende do plano do Supabase [VERIFICAR NA INTERFACE: se o seu plano permite baixar o backup]
- Manual: o Claude Code gera o arquivo com a ferramenta de exportação do Postgres [LACUNA: método de backup sem terminal no plano gratuito; a ferramenta exige instalação não prevista no checklist de setup da T0]
- O arquivo contém dados reais: nunca no GitHub; peça para conferir o `.gitignore`
- A senha do banco fica só no `.env.local`, colada pelo editor, nunca na conversa

**Restauração**

- No projeto de teste, nunca em produção, salvo desastre real
- [LACUNA: método de restauração sem terminal; confirmar se as contas de login vêm junto]
- Antes de rodar qualquer SQL, confira o nome do projeto no topo do painel

**Registro de restauração (`docs/backup.md`)**

```markdown
## Backup automático
- Plano: [plano]
- Frequência: [frequência]
- Último backup: [data e hora]

## Restauração testada — [data]
- Backup usado: [local] [data]
- Início: [hora] · Fim: [hora] · Tempo total: [minutos]
- Contagens iguais: [sim/não]
- Teste com duas contas: [ok/falhou]
- Quem sabe restaurar: [nome]

## Rotina
- Backup manual: [frequência]
- Teste de restauração: [frequência]
- Onde ficam os backups: [local]
```

**Rotina de backup**

- Backup manual antes de toda migração (lição A2 da T5)
- Teste de restauração periódico [LACUNA: frequência de referência não definida na ementa]
- Backups guardados em local diferente do banco, com acesso restrito

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Backup nunca restaurado | Descobre que está incompleto na hora do desastre |
| Backup no mesmo lugar que o banco | Perde os dois juntos |
| Só você sabe restaurar, sem registro | Recuperação depende da sua memória |
