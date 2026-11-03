# C1 · Seu primeiro fluxo automático entre sistemas (n8n)

- **Trilha:** T5 · Escala
- **Tempo:** 45 min
- **Evidência:** fluxo de teste
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Avisos, relatórios e integrações com outros sistemas consomem tempo de construção. Muitos não precisam estar no código do produto.

O n8n é uma ferramenta visual para montar fluxos entre sistemas, como "quando X acontecer, faça Y". Você monta blocos na tela, sem programar.

A regra do curso: n8n para fluxos de negócio entre sistemas, agendados ou por evento. Código para o núcleo do produto, permissões, dados sensíveis e cobrança. Se o n8n parar, o produto continua funcionando.

## Demonstração

Exemplo: um fluxo de teste que avisa por e-mail quando um aluno do Diário de Bordo conclui uma lição.

1. Acesse o n8n e entre na sua conta. [LACUNA: forma de uso do n8n (nuvem ou instalação própria) não definida na ementa] [VERIFICAR NA INTERFACE]
2. Crie um fluxo novo (workflow: sequência de blocos que roda sozinha). [VERIFICAR NA INTERFACE]
3. Adicione um gatilho manual (gatilho é o bloco que inicia o fluxo). [VERIFICAR NA INTERFACE: nome do gatilho manual]
4. Adicione um bloco com dados de exemplo: aluno "Aluno Teste", lição "2a.3", turma "Turma A". [VERIFICAR NA INTERFACE]
5. Adicione um bloco de envio de e-mail (nó: cada bloco do fluxo). [VERIFICAR NA INTERFACE: nome do nó de e-mail]
6. Cadastre o acesso ao e-mail como credencial (segredo guardado no n8n, fora dos blocos). [VERIFICAR NA INTERFACE]
7. Monte o texto: "Aluno Teste concluiu a lição 2a.3." usando os campos do bloco anterior.
8. Envie o e-mail para você mesmo.
9. Execute o fluxo e confira o e-mail recebido.
10. Abra o histórico de execuções e confira o que cada bloco recebeu e enviou. [VERIFICAR NA INTERFACE]

[LINK A CURAR: documentação oficial do n8n, guia de primeiro fluxo]

## Prática

1. Acesse o n8n e crie um fluxo novo.
2. Escolha um aviso útil do seu produto (veja "Escolha do fluxo", na Referência).
3. Monte gatilho manual, dados de exemplo e envio por e-mail ou Slack.
4. Cadastre o acesso como credencial, nunca no texto do bloco.
5. Use dados fictícios.
6. Execute, confira a mensagem recebida e o histórico de execuções.

## Checagem

Entrega: print do fluxo de teste + mensagem recebida.

## Referência

**Termos**

- n8n: ferramenta visual de fluxos entre sistemas
- Fluxo (workflow): sequência de blocos que roda sozinha
- Gatilho (trigger): bloco que inicia o fluxo (manual, horário ou evento)
- Nó (node): cada bloco do fluxo
- Credencial: segredo de acesso guardado no n8n, fora dos blocos
- Execução: cada vez que o fluxo roda, com o histórico do que passou

**Regra n8n × código**

| Vai para o n8n | Fica no código |
| --- | --- |
| Avisos por e-mail ou Slack | Núcleo do produto |
| Relatórios agendados | Permissões |
| Integração com sistemas de terceiros | Dados sensíveis |
| — | Cobrança |

- Teste: se o n8n parar, o produto continua funcionando?

**Escolha do fluxo**

- Critério: aviso útil, acessório ao produto e sem dado sensível
- Exemplos:
  - Consultoria: aviso ao sócio quando um cliente envia documento
  - RH: aviso ao gestor quando uma etapa vence
  - Vendas: resumo para o time quando uma proposta é aprovada

**Hospedagem e custo**

- [LACUNA: n8n na nuvem ou instalação própria; plano e custo de referência não definidos na ementa nem na lição 0.3]

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Senha ou chave no texto do bloco | Segredo exposto a quem vê o fluxo |
| Dado real em fluxo de teste | Dado sensível no histórico de execuções |
| Regra de negócio crítica no n8n | Produto quebra quando o n8n para |
