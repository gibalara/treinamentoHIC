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
2. Peça: "Crie o fluxo de convite: o gestor informa o e-mail, o sistema gera um link de uso único com validade."
3. Peça: "Ao aceitar, a pessoa vira membro da turma com papel aluno. Valide tudo no servidor." Servidor é a parte do app que roda fora do navegador.
4. Peça: "Crie a remoção de membro: o acesso termina na hora, inclusive em sessões abertas." Sessão é o login ativo num navegador.
5. Peça: "Escreva testes automatizados para cada caso de 'Casos de teste', na Referência desta lição." Teste automatizado é um script que confere o comportamento sozinho.
6. Rode os testes e confira que todos passam.
7. Teste à mão com duas contas: convide a segunda, aceite e confira a turma no painel.
8. Remova a segunda conta e, na janela onde ela está logada, recarregue a página. Ela não pode ver nada da turma.
9. Peça um commit.

[LINK A CURAR: documentação oficial do Supabase sobre convites e gestão de usuários]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça o fluxo de convite com link de uso único e validade.
3. Defina quem pode convidar e com qual papel a pessoa entra.
4. Peça a remoção de membro com fim imediato do acesso.
5. Peça os testes automatizados dos casos de teste e rode.
6. Teste à mão com duas contas: convite, aceite e remoção.
7. Peça um commit.

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
- Validade do convite [LACUNA: prazo de validade de referência não definido na ementa]
- Como o convite chega: e-mail enviado pelo app ou link copiado pelo gestor [LACUNA: serviço de envio de e-mail não definido na pilha]
- O que acontece com os dados de quem sai: ficam com a organização ou são apagados

**Pedidos ao Claude Code**

- "Crie o fluxo de convite com link de uso único e validade, validado no servidor."
- "Crie a remoção de membro com fim imediato do acesso."
- "Escreva testes automatizados para os casos de convite e remoção."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Convite sem validade ou reaproveitável | Link vazado dá acesso a qualquer um |
| Remoção só esconde a organização da tela | Removido ainda lê dados pela requisição |
| Papel escolhido pelo navegador no aceite | Aluno vira gestor alterando a requisição |
