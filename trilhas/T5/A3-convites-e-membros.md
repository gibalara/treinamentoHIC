# A3 · Convidar e remover pessoas de uma organização (convites e membros)

- **Trilha:** T5 · Escala
- **Tempo:** 75 min
- **Evidência:** fluxo testado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com organizações no banco, alguém precisa colocar pessoas dentro delas. Sem convite, o admin cadastra todo mundo à mão.

Convite é um link pessoal, de uso único e com validade, que coloca a pessoa numa organização com um papel. Membro é o vínculo entre usuário, organização e papel.

Entrar e sair precisa ser exato. Convite reaproveitado ou membro removido com acesso são vazamentos de dados.

## Demonstração

Exemplo: o gestor de uma turma do Diário de Bordo convida alunos e remove um que saiu.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Crie o convite: o gestor informa o e-mail e copia um link de uso único, válido por 7 dias."
   O prazo é exemplo.
3. Acrescente: "Ao aceitar, a pessoa vira membro da turma com papel aluno. Valide tudo no servidor." Servidor é a parte do app que roda fora do navegador.
4. Acrescente: "Crie a remoção de membro: o acesso termina na hora, inclusive em sessões abertas."
   Sessão é o login ativo num navegador.
5. Acrescente: "Gere num arquivo o SQL das mudanças no banco e o que me torna gestor da Turma piloto."
   Aprove o plano.
6. Rode o SQL no SQL Editor do Supabase, na ordem da lição A2 da T5.
   A ordem é backup, teste e produção. [VERIFICAR NA INTERFACE]
7. Peça: "Escreva e rode testes automatizados para cada caso de 'Casos de teste', na Referência desta lição."
   Teste automatizado é um script que confere o comportamento sozinho.
8. Confira na resposta: 6 casos, todos passando.
9. Peça: "Rode o app no meu computador."
   Entre como gestor, convide o e-mail da conta B e copie o link.
10. Abra o link numa janela anônima (não compartilha login com a outra) e entre com a conta B. Confira a turma no painel.
11. Na janela do gestor, remova a conta B. Na janela anônima, recarregue a página: ela não pode ver nada da turma.
12. Abra o mesmo link de novo na janela anônima: o convite deve ser recusado.
13. Peça um commit (ponto salvo de versão no git).

[LINK A CURAR: documentação oficial do Supabase sobre convites e gestão de usuários]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Responda às decisões (veja "Decisões", na Referência desta lição).
3. Peça o fluxo de convite com link de uso único e validade, validado no servidor.
4. Peça a remoção de membro com fim imediato do acesso e o SQL das mudanças no banco. Aprove o plano.
5. Rode o SQL seguindo a ordem da lição A2 da T5.
6. Peça os testes automatizados dos 6 casos de teste e a execução deles.
7. Teste à mão com duas contas, uma em janela anônima: convite, aceite, remoção e link reaproveitado.
8. Peça um commit.

## Checagem

Entrega: resultado dos testes automatizados dos 6 casos de teste + print da conta removida sem acesso.

## Referência

**Termos**

- Organização: cliente, área ou departamento que agrupa usuários
- Convite: link pessoal, de uso único e com validade
- Membro: vínculo entre usuário, organização e papel
- Papel: o que a pessoa pode fazer (ex.: aluno, gestor)
- Servidor: parte do app que roda fora do navegador
- Sessão: login ativo num navegador
- Teste automatizado: script que confere o comportamento sozinho
- Janela anônima: janela do navegador que não compartilha login com as outras
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code

**Casos de teste**

| Caso | Resultado esperado |
| --- | --- |
| Convite aceito pela pessoa certa | Vira membro com o papel do convite |
| Convite usado pela segunda vez | Recusado |
| Convite vencido | Recusado |
| Convite aceito por outro e-mail | Recusado |
| Aluno tenta convidar | Recusado no servidor |
| Membro removido com sessão aberta | Perde acesso na próxima ação |

**Decisões**

- Quem convida: gestor, admin ou ambos
- Com qual papel a pessoa entra: fixo (ex.: aluno) ou escolhido por quem convida, gravado no convite
- Validade do convite [LACUNA: prazo de validade de referência não definido na ementa]
- Como o convite chega: e-mail enviado pelo app ou link copiado pelo gestor [LACUNA: serviço de envio de e-mail não definido na pilha]
- O que acontece com os dados de quem sai: ficam com a organização ou são apagados

**Pedidos ao Claude Code**

- "Crie o fluxo de convite com link de uso único e validade, validado no servidor."
- "Crie a remoção de membro com fim imediato do acesso."
- "Escreva testes automatizados para os casos de convite e remoção, e rode."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Convite sem validade ou reaproveitável | Link vazado dá acesso a qualquer um |
| Remoção só esconde a organização da tela | Removido ainda lê dados pela requisição |
| Papel escolhido pelo navegador no aceite | Aluno vira gestor alterando a requisição |
