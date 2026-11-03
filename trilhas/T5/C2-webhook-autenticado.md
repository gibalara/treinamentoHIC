# C2 · Evento do produto → ação externa (webhook autenticado)

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** fluxo + segredo
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Um aviso só tem valor se sair na hora em que o fato acontece no produto. Para isso, o produto precisa chamar o n8n (ferramenta visual de fluxos entre sistemas).

Webhook é um endereço que recebe um aviso automático de outro sistema. Sem autenticação, qualquer pessoa que descubra o endereço dispara o fluxo com dados falsos.

Webhook autenticado exige um segredo compartilhado em cada chamada. Sem o segredo, a chamada é recusada. Webhooks do n8n autenticados são critério eliminatório do marco da T5.

## Demonstração

Exemplo: quando um aluno do Diário de Bordo registra uma trava, o gestor da turma recebe aviso no Slack.

1. No n8n, crie um fluxo com gatilho de webhook (bloco que recebe a chamada do produto). [VERIFICAR NA INTERFACE: nome do nó de webhook]
2. Ative a autenticação do webhook por segredo no cabeçalho. Cabeçalho é a parte da chamada com dados de controle. [VERIFICAR NA INTERFACE: opções de autenticação do nó]
3. Gere um segredo longo e aleatório e cadastre como credencial no n8n (segredo guardado fora dos blocos). [VERIFICAR NA INTERFACE]
4. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
5. Peça: "Quando um registro de trava for criado, o servidor chama o webhook do n8n com o segredo no cabeçalho."
6. Peça: "Endereço e segredo do webhook vêm de variáveis de ambiente." Variável de ambiente é um valor guardado fora do código, no servidor.
7. Peça: "Envie só o mínimo: turma, lição e tipo do evento. Sem o texto do registro."
8. Peça: "Se o n8n falhar, o registro é salvo mesmo assim e o erro é anotado."
9. Cadastre as duas variáveis na Vercel (onde o app está publicado). [VERIFICAR NA INTERFACE]
10. No n8n, acrescente o envio ao Slack do gestor e ative o fluxo. [VERIFICAR NA INTERFACE]
11. Registre uma trava com conta de teste e confira o aviso no Slack.
12. Peça: "Chame o webhook sem o segredo e com um segredo errado." Confira: as duas chamadas são recusadas.
13. Desative o fluxo no n8n e registre outra trava. Confira: o Diário continua funcionando.
14. Peça um commit.

[LINK A CURAR: documentação oficial do n8n sobre autenticação no nó de webhook]

## Prática

1. Escolha um evento do seu produto que mereça aviso externo (veja "Escolha do evento", na Referência).
2. No n8n, crie o fluxo com webhook autenticado e o segredo como credencial.
3. Peça a chamada ao webhook pelo servidor, com dados mínimos e segredo em variável de ambiente.
4. Cadastre as variáveis na Vercel.
5. Monte a ação externa (Slack ou e-mail) e ative o fluxo.
6. Dispare o evento e confira o aviso.
7. Teste sem segredo, com segredo errado e com o n8n desativado.
8. Peça um commit.

## Checagem

Entrega: print do fluxo com autenticação ativa + resultado das chamadas sem segredo e com segredo errado recusadas.

## Referência

**Termos**

- n8n: ferramenta visual de fluxos entre sistemas
- Webhook: endereço que recebe aviso automático de outro sistema
- Webhook autenticado: só aceita chamada com o segredo certo
- Cabeçalho: parte da chamada com dados de controle, como o segredo
- Credencial: segredo guardado no n8n, fora dos blocos
- Variável de ambiente: valor guardado fora do código, no servidor
- Servidor: parte do app que roda fora do navegador

**Escolha do evento**

- Critério: alguém precisa agir rápido e o aviso é acessório ao produto
- Exemplos:
  - Consultoria: cliente envia documento → aviso ao responsável
  - RH: candidato conclui etapa → aviso ao recrutador
  - Atendimento: chamado urgente aberto → aviso no canal do time

**Testes obrigatórios**

| Chamada | Resultado esperado |
| --- | --- |
| Com o segredo certo | Fluxo roda |
| Sem segredo | Recusada |
| Com segredo errado | Recusada |
| n8n desativado | Produto funciona; erro anotado |

**Pedidos ao Claude Code**

- "Quando [evento], o servidor chama o webhook do n8n com o segredo no cabeçalho."
- "Endereço e segredo do webhook vêm de variáveis de ambiente."
- "Se o n8n falhar, a ação do produto conclui e o erro é anotado."
- "Chame o webhook sem o segredo e com um segredo errado e mostre as respostas."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Webhook sem autenticação | Qualquer um dispara o fluxo |
| Segredo no código ou no texto do bloco | Segredo exposto no GitHub ou no n8n |
| Texto do cliente no aviso | Dado sensível no Slack e no histórico do n8n |
| Produto espera o n8n responder | Produto trava quando o n8n cai |
