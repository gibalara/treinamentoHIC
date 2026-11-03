# D1 · Ver o que acontece em produção (observabilidade)

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** erros e chamadas consultáveis
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Quando um cliente diz "deu erro ontem", você precisa achar o erro em minutos. Sem registro, só resta tentar reproduzir.

Observabilidade é a capacidade de ver o que o produto fez em produção, pelos registros que ele deixa. Produção é o app que os usuários reais usam. Log é cada linha de registro: o que aconteceu, quando, para quem e com qual resultado.

Com organizações, todo log precisa dizer de qual organização é. Sem isso, você não separa o problema de um cliente do problema de todos.

## Demonstração

Exemplo: o Diário de Bordo publicado na Vercel, com várias turmas.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Mostre o que o servidor registra hoje quando ocorre um erro ou uma chamada de IA." Servidor é a parte do app fora do navegador.
3. Peça: "Padronize os logs com os campos de 'Campos do log', na Referência desta lição."
4. Peça: "Nunca registre senha, chave, texto de registro ou resposta da IA."
5. Peça: "Crie uma rota de teste, só para admin, que gera um erro proposital." Rota é um endereço que o servidor atende.
6. Publique a mudança e chame a rota de teste como admin.
7. Abra os registros do projeto na Vercel e filtre pelo erro. [VERIFICAR NA INTERFACE]
8. Confira: data, rota, turma, código de rastreio e mensagem do erro aparecem. Código de rastreio é o identificador único de cada requisição.
9. Faça uma pergunta ao tutor de IA e encontre a chamada nos logs, com tokens e tempo de resposta.
10. Peça um commit.

[LINK A CURAR: documentação oficial da Vercel sobre registros (logs) em produção]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça o diagnóstico do que o servidor registra hoje.
3. Peça os logs padronizados, com organização e sem dados sensíveis.
4. Peça a rota de teste de erro, só para admin.
5. Publique, provoque o erro e encontre-o nos registros.
6. Use a feature de IA e encontre a chamada nos registros.
7. Peça um commit.

## Checagem

Entrega: print de um erro e de uma chamada de IA encontrados nos registros, com organização e código de rastreio.

## Referência

**Termos**

- Observabilidade: ver o que o produto fez em produção, pelos registros
- Produção: app que os usuários reais usam
- Log: linha de registro de um acontecimento
- Código de rastreio: identificador único de cada requisição
- Servidor: parte do app que roda fora do navegador
- Rota: endereço que o servidor atende
- Token: unidade de texto pela qual a API de IA cobra

**Campos do log**

| Campo | Exemplo |
| --- | --- |
| Data e hora | 2026-11-03 14:05:12 |
| Nível | erro, aviso, informação |
| Rota | /registros |
| Organização | Turma A |
| Usuário | identificador, nunca o e-mail |
| Código de rastreio | identificador da requisição |
| Resultado | sucesso ou mensagem de erro |
| Chamada de IA | modelo, tokens, tempo de resposta |

**Nunca registrar**

- Senhas, chaves e segredos
- Texto do cliente e respostas da IA
- Dados pessoais além do identificador

**Ferramenta**

- Registros da Vercel como ponto de partida [VERIFICAR NA INTERFACE: retenção dos registros no seu plano]
- [LACUNA: ferramenta de observabilidade dedicada não definida na pilha da ementa]

**Pedidos ao Claude Code**

- "Mostre o que o servidor registra quando ocorre um erro ou uma chamada de IA."
- "Padronize os logs com [campos], sem dados sensíveis."
- "Crie uma rota de teste, só para admin, que gera um erro proposital."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Log sem organização | Não dá para saber qual cliente foi afetado |
| Log com texto do cliente | Dado sensível espalhado nos registros |
| Erro só aparece no navegador | Você não vê o que o cliente viu |
