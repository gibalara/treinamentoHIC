# D2 · Ser avisado quando o produto cai, erra ou gasta demais (monitoramento e alertas)

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** alerta disparado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Operando sozinho, você não fica olhando o produto o dia todo. Se ele cair à noite, o cliente descobre antes de você.

Monitoramento é a verificação automática e periódica da saúde do produto. Alerta é a mensagem enviada quando um indicador passa do limite que você definiu.

Quatro coisas pedem alerta: produto fora do ar, erros em excesso, custo de IA alto e qualidade em queda. Os limites são seus; a regra é ser avisado antes do cliente.

## Demonstração

Exemplo: o Diário de Bordo publicado e um fluxo do n8n que confere a saúde dele a cada intervalo.
O n8n é a ferramenta visual de fluxos entre sistemas.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Crie uma rota de saúde com os indicadores de 'Os quatro alertas', na Referência desta lição. Grave os erros do servidor numa tabela, para a rota contá-los." Rota é um endereço que o servidor atende.
3. Acrescente: "A rota devolve só números e exige o segredo SAUDE_SEGREDO no cabeçalho. Grave no .env.local 40 caracteres aleatórios, sem mostrar." Aprove o plano.
4. Rode o SQL gerado no SQL Editor do Supabase, na ordem da lição A2 da T5. Cadastre a variável na Vercel. Peça commit e envio ao GitHub. [VERIFICAR NA INTERFACE]
5. Defina os limites do Diário e peça para registrá-los em `docs/alertas.md` (veja "Limites", na Referência desta lição).
6. No n8n, crie um fluxo com gatilho agendado que chama a rota publicada, com o segredo como credencial de cabeçalho. [VERIFICAR NA INTERFACE]
7. Acrescente as condições: sem resposta, alerta "fora do ar"; indicador acima do limite, alerta com o nome do indicador. [VERIFICAR NA INTERFACE: nome do nó de condição]
8. Envie os alertas ao seu Slack ou e-mail e ative o fluxo. [VERIFICAR NA INTERFACE]
9. Erros: no nó de condição, baixe o limite de erros para zero. Como admin, abra a rota de teste de erro (se não existir, peça uma). Execute o fluxo.
10. Confira o alerta recebido e volte o limite ao valor original.
11. Custo e qualidade: baixe cada limite para zero, faça uma pergunta ao tutor, execute o fluxo e confira o alerta. Volte os limites.
12. Fora do ar: troque o endereço chamado por um inexistente, execute e confira o alerta. Volte o endereço.
13. Peça para registrar em `docs/alertas.md` a data de cada alerta disparado e um commit.

[LINK A CURAR: documentação oficial do n8n sobre gatilho agendado e condições]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Peça a rota de saúde com os quatro indicadores, a tabela de erros e o segredo próprio.
3. Rode o SQL, cadastre o segredo na Vercel e peça commit e envio.
4. Defina seus limites e registre em `docs/alertas.md`.
5. Monte o fluxo agendado no n8n com as condições e o envio do alerta.
6. Dispare cada um dos quatro alertas de propósito, como nos passos 9 a 12 da Demonstração desta lição.
7. Volte limites e endereço aos valores reais.
8. Registre os disparos em `docs/alertas.md` e peça um commit.

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
- `.env.local`: arquivo local com as variáveis de ambiente; fica fora do GitHub
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code

**Os quatro alertas**

| Alerta | Indicador | Fonte |
| --- | --- | --- |
| Fora do ar | Rota de saúde não responde | Chamada do n8n |
| Erros | Erros no período | Tabela de erros gravada pelo servidor; detalhe nos logs da lição D1 da T5 |
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
