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

Exemplo: o Diário de Bordo com duas turmas, a Turma A e a Turma B.

1. No app publicado, crie a Turma A e a Turma B com dados fictícios. Na Turma B, use a palavra-marca "ABACAXI-B".
2. Crie três contas de teste: aluno da A, aluno da B e um segundo aluno da A, que será removido.
3. Abra a pasta do Diário no modo de código, no modo **Manual** (pede aprovação antes de cada mudança). [VERIFICAR NA INTERFACE]
4. Peça: "Liste todas as telas, rotas, arquivos, exportações e relatórios do produto." Rota é um endereço que o servidor atende.
5. Logado como aluno da A, abra cada tela e procure "ABACAXI-B". Anote no relatório.
6. Peça: "Escreva um script que chame cada rota como aluno da A, trocando o identificador da turma pelo da B." Isso é a requisição alterada: um pedido ao servidor com dado trocado à mão.
7. Rode o script e confira: toda chamada com a turma B é recusada.
8. Pergunte ao tutor de IA, como aluno da A, sobre a Turma B. Confira: nenhuma resposta cita "ABACAXI-B".
9. Exporte os dados e gere os relatórios como aluno da A. Procure "ABACAXI-B" em cada arquivo.
10. Logado como o segundo aluno da A, mantenha a sessão aberta. Em outro navegador, o gestor o remove.
11. Na sessão do removido, recarregue a página e tente cada rota. Confira: acesso negado na hora.
12. Preencha o relatório (veja "Relatório do teste de isolamento", na Referência) e peça um commit.

[LINK A CURAR: guia oficial do OWASP sobre testes de controle de acesso]

## Prática

1. Crie duas organizações de teste com dados fictícios e uma palavra-marca na segunda.
2. Crie as três contas de teste.
3. Peça a lista de telas, rotas, arquivos, exportações e relatórios do seu produto.
4. Percorra cada item do roteiro, na ordem da Referência.
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
- "Escreva um script que chame cada rota como [conta], trocando a organização pela da [outra]."
- "Procure [palavra-marca] nos arquivos exportados."

**Erros comuns (Tutor HIC)**

| Erro | Solução |
| --- | --- |
| Testar só pelas telas | Rodar a requisição alterada em toda rota |
| Dados de teste parecidos entre organizações | Usar palavra-marca única |
| Removido ainda acessa até sair | Conferir a organização a cada requisição, no servidor |
| Esquecer o relatório agendado do n8n | Repetir o item "Relatório" depois da lição C3 da T5 |
