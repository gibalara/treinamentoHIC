# X6 · Um preço que cobre o custo e cabe no valor entregue (precificação)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 60 min
- **Evidência:** planilha de precificação
- **Liberada após:** T4
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com IA no produto, cada uso tem custo. Preço chutado pode dar prejuízo a cada novo usuário.

O preço tem um piso e um teto. O piso é o custo por usuário, calculado na lição D5 da T4. O teto é o valor que o produto gera para o usuário, em tempo ou dinheiro.

Aqui você monta a planilha que justifica o preço entre os dois.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), com Tutor de IA. Números fictícios, só para a conta.

1. Abra a planilha de custo por usuário do Diário, feita na lição D5 da T4. [LACUNA: custo real por usuário do Diário de Bordo ainda não medido]
2. Copie o custo variável por usuário/mês: uso da API de IA (serviço de IA pago por uso). Exemplo fictício: R$ 4.
3. Some os custos fixos mensais da tabela de custos da lição 0.3 da T0 (banco, hospedagem). Exemplo fictício: R$ 250.
4. Divida o fixo pelo número esperado de usuários. Com 50 usuários: R$ 5. Piso: R$ 4 + R$ 5 = R$ 9.
5. Calcule o valor: horas que o aluno economiza por mês × valor-hora dele. Exemplo fictício: 2 h × R$ 100 = R$ 200. Teto: R$ 200.
6. Numa conversa no Claude Desktop, peça: "Piso R$ 9, teto R$ 200. Proponha 3 preços, com justificativa."
7. Escolha um preço e registre o motivo na planilha.
8. Confira a margem: preço menos piso, dividido pelo preço.
9. Refaça a conta com metade dos usuários esperados. O preço ainda cobre o custo?

## Prática

1. Abra a planilha de custo por usuário da lição D5 da T4.
2. Na mesma ferramenta de planilha, crie a planilha de precificação com as linhas do "Modelo da planilha" (Referência desta lição).
3. Preencha o piso: custo variável + custo fixo dividido por usuários esperados.
4. Preencha o teto: valor por usuário, com a conta explícita (tempo ou dinheiro economizado).
5. Use dados das conversas da T1 ou do teste da lição 2b.9 da T2 para o valor. Não invente.
6. Numa conversa no Claude Desktop, faça o pedido do passo 6 da Demonstração desta lição. Use o seu piso e o seu teto.
7. Escolha um e registre o motivo.
8. Faça o teste de estresse: metade dos usuários e o dobro do uso de IA.
9. Salve o arquivo da planilha na pasta do projeto.
10. Abra a pasta no modo de código do Claude Desktop. Peça um commit (versão salva do projeto, lição 0.5 da T0).

## Checagem

Entrega: planilha de precificação com piso, teto, preço escolhido, motivo e teste de estresse.

## Referência

**Modelo da planilha**

| Linha | Fórmula | Valor |
| --- | --- | --- |
| Custo variável por usuário/mês | Da lição D5 da T4 | |
| Custo fixo mensal | Soma das ferramentas pagas | |
| Usuários esperados | Seu plano (X5 desta trilha) | |
| Piso (custo por usuário) | Variável + fixo ÷ usuários | |
| Valor por usuário/mês | Horas economizadas × valor-hora, ou ganho direto | |
| Teto | = valor | |
| Preço escolhido | Entre piso e teto | |
| Margem | (preço − piso) ÷ preço | |
| Estresse | Metade dos usuários, dobro do uso de IA | |

**Termos**

- Custo variável: cresce com o uso (ex.: chamadas à API de IA)
- Custo fixo: existe mesmo sem usuário (ex.: plano do banco de dados)
- Piso: preço mínimo que cobre o custo por usuário
- Teto: valor que o produto gera para o usuário
- Margem: parte do preço que sobra depois do custo
- Churn: percentual de clientes que cancelam por mês
- LTV (valor do cliente no tempo): receita total de um cliente enquanto ele fica
- CAC (custo de aquisição de cliente): quanto custa trazer um cliente (X5 desta trilha)

**Checagens**

- O preço cobre o custo no teste de estresse?
- O CAC é menor que o LTV? Se não, cada cliente novo dá prejuízo.
- Há limite de uso por usuário (lição C3 da T4)? Sem ele, um usuário pode passar do piso.

[LACUNA: a ementa não define modelo de cobrança (por usuário, por organização, por uso) nem faixa de margem de referência]

**Pedidos ao Claude**

- "Com piso de [R$] e teto de [R$], proponha 3 preços e a justificativa de cada um."
- "Refaça a planilha com metade dos usuários e o dobro do uso de IA."
