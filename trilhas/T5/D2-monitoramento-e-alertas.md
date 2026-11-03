# D2 · Ser avisado quando o produto cai, erra ou gasta demais (monitoramento e alertas)

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** alerta disparado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Operando sozinho, você não fica olhando o produto o dia todo. Se ele cair à noite, o cliente descobre antes de você.

Monitoramento é a verificação automática e periódica da saúde do produto. Alerta é a mensagem enviada quando um indicador passa do limite que você definiu.

Quatro coisas precisam de alerta: produto fora do ar, erros em excesso, custo de IA acima do esperado e queda de qualidade da IA. Os limites são seus; a regra é ser avisado antes do cliente.

## Demonstração

Exemplo: o Diário de Bordo publicado, com um fluxo do n8n (ferramenta visual de fluxos entre sistemas) que confere a saúde a cada intervalo.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Crie uma rota de saúde com os indicadores de 'Os quatro alertas', na Referência desta lição." Rota é um endereço que o servidor atende.
3. Peça: "A rota de saúde devolve só números, protegida por segredo lido de variável de ambiente." Variável de ambiente é um valor guardado fora do código.
4. Defina os limites do Diário e registre em `docs/alertas.md` (veja "Limites", na Referência).
5. No n8n, crie um fluxo com gatilho agendado que chama a rota de saúde. [VERIFICAR NA INTERFACE]
6. Acrescente as condições: sem resposta, alerta "fora do ar"; indicador acima do limite, alerta com o nome do indicador. [VERIFICAR NA INTERFACE: nome do nó de condição]
7. Envie os alertas ao seu Slack ou e-mail. [VERIFICAR NA INTERFACE]
8. Baixe temporariamente o limite de erros para zero. Peça uma rota, só para admin, que gera um erro proposital, e chame-a.
9. Confira o alerta recebido e volte o limite ao valor original.
10. Repita para custo e qualidade. Para "fora do ar", troque o endereço chamado por um inexistente e confira o alerta.
11. Registre em `docs/alertas.md` a data de cada alerta disparado e peça um commit.

[LINK A CURAR: documentação oficial do n8n sobre gatilho agendado e condições]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça a rota de saúde com os quatro indicadores, protegida por segredo.
3. Defina seus limites e registre em `docs/alertas.md`.
4. Monte o fluxo agendado no n8n com as condições e o envio do alerta.
5. Dispare cada um dos quatro alertas de propósito e confira o recebimento.
6. Volte os limites aos valores reais.
7. Registre os disparos em `docs/alertas.md` e peça um commit.

## Checagem

Entrega: prints dos quatro alertas recebidos + `docs/alertas.md` com limites e datas dos disparos.

## Referência

**Termos**

- Monitoramento: verificação automática e periódica da saúde do produto
- Alerta: mensagem enviada quando um indicador passa do limite
- Rota de saúde: endereço que devolve os indicadores do produto
- Limite: valor a partir do qual o alerta dispara
- n8n: ferramenta visual de fluxos entre sistemas
- Variável de ambiente: valor guardado fora do código, no servidor

**Os quatro alertas**

| Alerta | Indicador | Fonte |
| --- | --- | --- |
| Fora do ar | Rota de saúde não responde | Chamada do n8n |
| Erros | Erros no período | Logs da lição D1 da T5 |
| Custo | Custo de IA no dia, total e por organização | Registro de chamadas da lição B2 da T5 |
| Qualidade | Respostas da IA reprovadas na validação de formato | Lição B1 da T4 |

- Sinal de qualidade alternativo: taxa de bloqueio dos guardrails de saída (lição C2 da T4)
- [LACUNA: sinal de qualidade da IA em produção não definido na ementa]

**Limites**

- Critério: o alerta dispara antes de o cliente notar ou de o custo pesar
- Custo: parta do custo por usuário da lição D5 da T4
- [LACUNA: valores de referência para limites e intervalo de verificação não definidos na ementa]

**Limitação**

- Se o n8n parar, os alertas param
- [LACUNA: ferramenta dedicada de verificação externa (fora do ar) não definida na pilha]

**Pedidos ao Claude Code**

- "Crie uma rota de saúde com [indicadores], só números, protegida por segredo."
- "Mostre como provocar cada alerta de propósito sem afetar usuários."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Alerta nunca testado | Você descobre que não funciona no dia do problema |
| Limite baixo demais | Alertas demais; você passa a ignorá-los |
| Rota de saúde com dados de clientes | Vazamento por um endereço esquecido |
