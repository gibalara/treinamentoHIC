# D3 · Recuperar os dados depois de um desastre (backup e recuperação)

- **Trilha:** T5 · Escala
- **Tempo:** 45 min
- **Evidência:** restauração testada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Um comando errado, uma migração ruim ou um ataque podem apagar os dados dos clientes. Ter backup não basta: backup nunca restaurado é aposta.

Backup é a cópia completa do banco, guardada fora dele. Recuperação (restauração) é colocar essa cópia de volta para funcionar.

Você precisa saber três coisas antes do problema: de quando é o último backup, quanto tempo leva restaurar e quem consegue fazer isso.

## Demonstração

Exemplo: o banco de produção do Diário de Bordo no Supabase. Produção é o banco que os usuários reais usam.

1. No painel do Supabase, confira quais backups automáticos o plano oferece e de quando é o último. [VERIFICAR NA INTERFACE]
2. Registre em `docs/backup.md`: frequência, data do último backup e onde ele fica.
3. Abra a pasta do Diário no modo de código e peça: "Conte as linhas de cada tabela de produção e salve em docs/backup.md."
4. Gere um backup completo de produção, fora da pasta do repositório (veja "Backup", na Referência). [VERIFICAR NA INTERFACE]
5. Anote a hora de início e restaure o backup num projeto de teste do Supabase (segundo projeto, só para ensaio). [VERIFICAR NA INTERFACE]
6. Peça: "Conte as linhas de cada tabela do projeto de teste e compare com docs/backup.md."
7. Confira: contagens iguais, sem exceção.
8. Rode o app apontando para o projeto de teste e entre com duas contas de turmas diferentes. Cada uma vê só a própria turma. [VERIFICAR NA INTERFACE]
9. Anote a hora de fim e calcule o tempo total da restauração.
10. Registre o resultado em `docs/backup.md` e peça um commit.

[LINK A CURAR: documentação oficial do Supabase sobre backups e restauração]

## Prática

1. Confira os backups automáticos do seu plano no Supabase e registre em `docs/backup.md`.
2. Peça a contagem de linhas de produção.
3. Gere um backup completo, fora do repositório.
4. Restaure no projeto de teste, cronometrando.
5. Compare as contagens e teste com duas contas de organizações diferentes.
6. Preencha o registro de restauração e defina a rotina (veja "Rotina de backup", na Referência).
7. Peça um commit.

## Checagem

Entrega: `docs/backup.md` com contagens iguais, tempo de restauração e rotina definida.

## Referência

**Termos**

- Backup: cópia completa do banco, guardada fora dele
- Restauração: colocar o backup de volta para funcionar
- Produção: banco e app que os usuários reais usam
- Projeto de teste: segundo projeto no Supabase, para ensaiar sem risco
- `.gitignore`: lista do que o git não guarda

**Backup**

- Automático: depende do plano do Supabase [VERIFICAR NA INTERFACE]
- Manual: "Gere um backup completo do banco num arquivo, fora da pasta do repositório."
- O arquivo contém dados reais: nunca no GitHub; confira o `.gitignore`
- A senha do banco fica só em variável de ambiente (valor guardado fora do código)

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
