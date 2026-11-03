# D4 · Cobrar assinatura por organização em modo de teste (pagamentos, opcional)

- **Trilha:** T5 · Escala
- **Tempo:** 2 h
- **Evidência:** assinatura de teste
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Lição opcional. Faça se o seu produto vai cobrar dentro do próprio app.

Assinatura é a cobrança recorrente de uma organização para usar o produto. Ela passa por um provedor de pagamento, serviço externo que processa cartão e cobrança.

Tudo aqui roda em modo de teste: ambiente do provedor com chaves e cartões fictícios, sem dinheiro real. Cobrança fica no código do produto, nunca no n8n. Webhook do provedor (aviso automático de pagamento) só vale com assinatura digital conferida.

## Demonstração

Exemplo: cada turma do Diário de Bordo tem uma assinatura mensal paga pela empresa contratante.

1. Crie a conta no provedor de pagamento e ative o modo de teste. [LACUNA: provedor de pagamento não definido na pilha da ementa] [VERIFICAR NA INTERFACE]
2. No provedor, crie o plano mensal de teste. [VERIFICAR NA INTERFACE]
3. Copie as chaves de teste e cadastre como variáveis de ambiente na Vercel (valores guardados fora do código). [VERIFICAR NA INTERFACE]
4. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
5. Peça: "Crie a assinatura por turma: só o gestor contrata, pela página de pagamento do provedor."
6. Peça: "Receba o webhook do provedor no servidor e confira a assinatura digital antes de qualquer ação." Servidor é a parte do app fora do navegador.
7. Peça: "Turma com assinatura ativa usa o tutor de IA; sem assinatura, o tutor fica bloqueado no servidor."
8. Peça: "Registre contratação e cancelamento na trilha de auditoria." Trilha de auditoria é o registro permanente de ações sensíveis.
9. Como gestor de uma turma de teste, contrate com um cartão de teste da documentação do provedor.
10. Confira no painel do provedor e no Diário: assinatura ativa e tutor liberado. [VERIFICAR NA INTERFACE]
11. Peça: "Envie ao webhook um aviso falso, sem assinatura digital válida." Confira: recusado e nada mudou.
12. Cancele a assinatura no modo de teste e confira o tutor bloqueado.
13. Peça um commit.

[LINK A CURAR: documentação oficial do provedor escolhido sobre modo de teste e cartões de teste]

## Prática

1. Decida se vai fazer esta lição (veja "Quando fazer", na Referência).
2. Crie a conta no provedor, ative o modo de teste e crie o plano.
3. Cadastre as chaves de teste como variáveis de ambiente.
4. Peça a assinatura por organização, o webhook com assinatura digital conferida e o bloqueio por falta de pagamento.
5. Contrate com cartão de teste e confira a liberação.
6. Teste o aviso falso e o cancelamento.
7. Peça um commit.

## Checagem

Entrega: print da assinatura de teste ativa no provedor e no produto + aviso falso recusado.

## Referência

**Termos**

- Assinatura: cobrança recorrente de uma organização
- Provedor de pagamento: serviço externo que processa cartão e cobrança
- Modo de teste: ambiente do provedor com chaves e cartões fictícios
- Chave de teste: credencial do modo de teste; nunca a de produção nesta lição
- Webhook: endereço que recebe aviso automático de outro sistema
- Assinatura digital do webhook: prova de que o aviso veio do provedor
- Variável de ambiente: valor guardado fora do código, no servidor

**Quando fazer**

- Faça: o produto vai cobrar organizações dentro do app
- Pule: venda por contrato e nota fiscal fora do app, ou produto interno de empresa
- Exemplos:
  - Consultoria com contrato anual: pular
  - Ferramenta vendida a pequenas empresas: fazer
  - Produto interno para áreas da empresa: pular

**Regras**

- Cobrança no código, nunca no n8n
- Só chaves e cartões de teste
- Nenhum dado de cartão passa pelo seu servidor; fica no provedor
- Liberação e bloqueio decididos no servidor, pelo estado da assinatura
- Webhook sem assinatura digital válida é recusado

**Pedidos ao Claude Code**

- "Crie a assinatura por organização com a página de pagamento do provedor, em modo de teste."
- "Receba o webhook do provedor e confira a assinatura digital antes de agir."
- "Envie ao webhook um aviso falso e mostre a resposta."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Liberação pelo retorno do navegador | Usuário libera o produto sem pagar |
| Webhook sem conferir a assinatura digital | Qualquer um ativa assinaturas |
| Chave no código | Chave exposta no GitHub |
