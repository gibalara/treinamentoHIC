# A5 · Provar que uma organização não vê dados de outra (teste de isolamento)

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** relatório do roteiro
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Dizer que os dados estão separados não convence um cliente nem a TI dele. Um relatório de teste convence.

Isolamento é a garantia de que nada da Org A aparece para a Org B. O teste de isolamento percorre cada saída do produto procurando vazamento: tela, requisição, resposta de IA, arquivo, exportação e relatório.

É critério eliminatório do marco da T5. O relatório também entra no dossiê de governança da lição X7 da trilha transversal.

## Demonstração

Exemplo: o Diário de Bordo publicado, com duas turmas de teste, a Turma A e a Turma B.

1. Abra a pasta do Diário no modo de código, no modo **Manual** (pede aprovação antes de cada mudança). [VERIFICAR NA INTERFACE]
2. Crie três contas de teste no app publicado: aluno da A, aluno da B e um segundo aluno da A.
   O segundo aluno da A será removido. Veja "Contas de teste", na Referência desta lição.
3. Peça: "Gere o SQL das turmas TESTE Turma A e TESTE Turma B, com as três contas e registros fictícios.
   Na B, use a palavra-marca ABACAXI-B."
4. Rode o SQL no SQL Editor do projeto de produção do Supabase. [VERIFICAR NA INTERFACE]
5. Peça: "Liste todas as telas, rotas, arquivos, exportações e relatórios do produto." Rota é um endereço que o servidor atende.
6. Logado como aluno da A, abra cada tela e procure "ABACAXI-B" (Ctrl+F no navegador). Anote no relatório.
7. Peça: "Crie no .env.local as variáveis de e-mail e senha das três contas de teste, sem valores."
   Cole os valores pelo editor.
8. Peça: "Rode um script que chame cada rota publicada como aluno da A, com a turma trocada pela B."
   Isso é a requisição alterada.
9. Confira na saída: toda chamada com a Turma B é recusada.
10. Pergunte ao tutor de IA, como aluno da A, sobre a Turma B. Confira: nenhuma resposta cita "ABACAXI-B". Junte o resultado dos evals da lição A4 da T5.
11. Como aluno da A, exporte os dados e gere os relatórios. Procure "ABACAXI-B" em cada arquivo.
12. Entre como o segundo aluno da A numa janela anônima (não compartilha login). Na janela do gestor, remova-o.
13. Na janela anônima, recarregue a página e peça ao script que tente cada rota com essa conta. Confira: acesso negado na hora.
14. Preencha `docs/teste-isolamento.md` (veja "Relatório do teste de isolamento", na Referência desta lição) e peça um commit.

[LINK A CURAR: guia oficial do OWASP sobre testes de controle de acesso]

## Prática

1. Crie as três contas de teste no seu app publicado.
2. Peça o SQL de duas organizações de teste, com dados fictícios e uma palavra-marca na segunda. Rode em produção.
3. Peça a lista de telas, rotas, arquivos, exportações e relatórios do seu produto.
4. Percorra os itens na ordem da tabela de "Relatório do teste de isolamento", na Referência desta lição.
5. Marque "não se aplica" só quando o produto não tiver aquela saída, com o motivo.
6. Corrija cada vazamento, faça um commit por correção e repita o item.
7. Salve o relatório em `docs/teste-isolamento.md` e peça um commit.

## Checagem

Entrega: `docs/teste-isolamento.md` com todos os itens do roteiro aprovados ou "não se aplica" justificado.

## Referência

**Termos**

- Organização: cliente, área ou departamento que agrupa usuários
- Isolamento: nada de uma organização aparece para outra
- Rota: endereço que o servidor atende
- Requisição alterada: pedido ao servidor com identificador trocado à mão
- Palavra-marca: termo único plantado numa organização para detectar vazamento
- Sessão: login ativo num navegador
- Arquivos: anexos enviados ao produto pelos usuários
- Script: programa curto que executa uma sequência de passos sozinho
- Janela anônima: janela do navegador que não compartilha login com as outras

**Contas de teste**

- Três e-mails que você controla; alguns provedores aceitam variações (ex.: nome+a@gmail.com) [VERIFICAR NA INTERFACE: se o seu provedor aceita]
- Organizações de teste com nome iniciado por "TESTE", para não confundir no painel administrativo
- Senhas das contas de teste só no `.env.local`, nunca na conversa

**Roteiro (da ementa)**

Nenhuma tela, requisição alterada, resposta de IA, arquivo, exportação ou relatório da Org A expõe dados da Org B. Usuário removido perde acesso imediatamente.

**Relatório do teste de isolamento**

```markdown
# Teste de isolamento — [data]
- Organizações: Org A, Org B (palavra-marca: [termo])
- Contas: aluno A, aluno B, aluno A removido

| Item | Como testei | Resultado | Evidência |
| --- | --- | --- | --- |
| Telas | [lista de telas] | aprovado / falhou | [print] |
| Requisição alterada | script trocando a organização | aprovado / falhou | [saída do script] |
| Resposta de IA | casos de acesso cruzado | aprovado / falhou | [resultado dos evals] |
| Arquivos | [arquivos abertos] | aprovado / falhou / não se aplica | [print] |
| Exportação | [exportações geradas] | aprovado / falhou / não se aplica | [arquivo] |
| Relatório | [relatórios gerados] | aprovado / falhou / não se aplica | [arquivo] |
| Usuário removido | sessão aberta + remoção | aprovado / falhou | [print] |

- Vazamentos encontrados e commits de correção:
```

**Pedidos ao Claude Code**

- "Liste todas as telas, rotas, arquivos, exportações e relatórios do produto."
- "Escreva e rode um script que chame cada rota como [conta], trocando a organização pela da [outra]."
- "Procure [palavra-marca] nos arquivos exportados."

**Erros comuns (Tutor HIC)**

| Erro | Solução |
| --- | --- |
| Testar só pelas telas | Rodar a requisição alterada em toda rota |
| Dados de teste parecidos entre organizações | Usar palavra-marca única |
| Removido ainda acessa até sair | Conferir a organização a cada requisição, no servidor |
| Esquecer o relatório agendado do n8n | Repetir o item "Relatório" depois da lição C3 da T5 |
