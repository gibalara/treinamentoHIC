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

Exemplo: um aluno do Diário de Bordo registra uma trava; o gestor recebe aviso num canal de teste do Slack.

1. Abra a pasta do Diário no modo de código, no modo **Manual** (pede aprovação antes de cada mudança). [VERIFICAR NA INTERFACE]
2. Peça: "Crie no .env.local as variáveis N8N_WEBHOOK_URL, vazia, e N8N_WEBHOOK_SEGREDO, com 40 caracteres aleatórios. Não mostre o valor na conversa." Variável de ambiente é um valor guardado fora do código.
3. No n8n, crie um fluxo com gatilho de webhook (bloco que recebe a chamada do produto). [VERIFICAR NA INTERFACE: nome do nó de webhook]
4. No nó, ative a autenticação por cabeçalho. Cabeçalho é a parte da chamada com dados de controle. [VERIFICAR NA INTERFACE: opções de autenticação do nó]
5. Crie a credencial do cabeçalho: nome `X-Webhook-Segredo`; valor copiado do `.env.local`, pelo editor. Credencial é o segredo guardado no n8n, fora dos blocos. [VERIFICAR NA INTERFACE]
6. Copie o endereço de produção do webhook e cole em `N8N_WEBHOOK_URL`, no `.env.local`. [VERIFICAR NA INTERFACE: endereço de teste × de produção]
7. Acrescente o envio ao Slack, com o texto "Trava registrada na turma [turma], lição [lição]". Ative o fluxo. [VERIFICAR NA INTERFACE: nó e credencial do Slack]
8. Peça: "Ao criar um registro de trava, o servidor chama N8N_WEBHOOK_URL com o cabeçalho X-Webhook-Segredo."
   Servidor é a parte do app que roda fora do navegador.
9. Acrescente: "Envie só turma, lição e tipo do evento, sem o texto do registro. Se o n8n falhar, o registro é salvo e o erro é anotado."
10. Peça: "Rode o app no meu computador." Registre uma trava com conta de teste e confira o aviso no Slack.
11. Peça: "Chame o webhook sem o segredo e com um segredo errado e mostre as respostas."
   Confira: as duas são recusadas com erro de autorização.
12. Desative o fluxo no n8n e registre outra trava. Confira: o registro é salvo.
   Peça: "Mostre onde o erro do n8n foi anotado." Depois, reative o fluxo.
13. Cadastre as duas variáveis na Vercel, copiando os valores do `.env.local`. [VERIFICAR NA INTERFACE]
14. Peça um commit e o envio ao GitHub. A Vercel publica a nova versão; repita o passo 10 na URL pública.

[LINK A CURAR: documentação oficial do n8n sobre autenticação no nó de webhook]

## Prática

1. Escolha um evento do seu produto que mereça aviso externo (veja "Escolha do evento", na Referência desta lição).
2. Peça as duas variáveis no `.env.local`, com o segredo aleatório gerado sem aparecer na conversa.
3. No n8n, crie o fluxo com webhook, autenticação por cabeçalho e o segredo como credencial.
4. Monte a ação externa (Slack ou e-mail) e ative o fluxo.
5. Peça a chamada ao webhook pelo servidor, com dados mínimos. A ação do produto não espera o n8n.
6. Rode os quatro testes de "Testes obrigatórios", na Referência desta lição.
7. Cadastre as variáveis na Vercel, peça commit e envio, e repita o teste com o segredo certo na URL pública.

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
- `.env.local`: arquivo local com as variáveis de ambiente; fica fora do GitHub
- Endereço de produção do webhook: só responde com o fluxo ativo [VERIFICAR NA INTERFACE]

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
| Sem segredo | Recusada (erro de autorização) |
| Com segredo errado | Recusada (erro de autorização) |
| n8n desativado | Produto funciona; erro anotado |

**Pedidos ao Claude Code**

- "Quando [evento], o servidor chama o webhook do n8n com o segredo no cabeçalho."
- "Crie no .env.local o segredo do webhook com 40 caracteres aleatórios, sem mostrar o valor."
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
