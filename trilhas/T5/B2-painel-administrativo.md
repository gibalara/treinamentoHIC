# B2 · Ver organizações, usuários e custo de IA num só lugar (painel administrativo)

- **Trilha:** T5 · Escala
- **Tempo:** 90 min
- **Evidência:** painel
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com várias organizações, você precisa saber quem usa, quanto usa e quanto cada uma custa. Sem isso, um cliente pode dar prejuízo sem você perceber.

Painel administrativo é a tela restrita ao admin do produto, com organizações, usuários, uso e custo de IA. Custo de IA é o valor pago à API (serviço externo de IA) por organização, calculado pelos tokens (unidades de texto cobradas).

O painel mostra números agregados, não o conteúdo dos clientes. Ele alimenta o preço da lição X6 da trilha transversal.

## Demonstração

Exemplo: o Diário de Bordo com várias turmas usando o tutor de IA.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Mostre se cada chamada à API de IA é registrada com organização, usuário, tokens e custo."
3. Se não for, peça: "Registre cada chamada de IA com data, organização, usuário, modelo, tokens e custo calculado."
4. Peça: "Crie o painel administrativo com os indicadores de 'Indicadores do painel', na Referência desta lição."
5. Peça: "Só o papel admin acessa o painel, conferido no servidor e no banco."
6. Confira no plano: o painel mostra contagens e somas, nunca o texto dos registros.
7. Gere uso fictício em duas turmas de teste e abra o painel como admin.
8. Confira o custo de uma turma à mão: some os custos das chamadas dela no banco. [VERIFICAR NA INTERFACE]
9. Entre como gestor e tente abrir o painel pelo endereço direto. Confira: acesso negado.
10. Peça um commit.

[LINK A CURAR: página oficial da Anthropic com preços por modelo da API]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Confira se as chamadas de IA são registradas com organização e custo; se não, peça o registro.
3. Escolha os indicadores do seu painel (veja "Indicadores do painel", na Referência).
4. Peça o painel restrito ao admin, no servidor e no banco.
5. Gere uso fictício em duas organizações e confira o custo de uma à mão.
6. Tente abrir o painel com outro papel e confirme a recusa.
7. Peça um commit.

## Checagem

Entrega: print do painel com uso e custo de IA por organização + conferência manual do custo de uma organização.

## Referência

**Termos**

- Organização: cliente, área ou departamento que agrupa usuários
- Painel administrativo: tela restrita ao admin do produto
- API: serviço externo chamado pelo servidor, aqui a IA da Anthropic
- Token: unidade de texto pela qual a API cobra
- Custo de IA: tokens × preço do modelo, somado por organização
- Agregado: contagem ou soma, sem o conteúdo de cada registro

**Indicadores do painel**

| Indicador | Por organização |
| --- | --- |
| Usuários ativos e convidados | Sim |
| Uso do produto (ex.: registros criados no período) | Sim |
| Chamadas de IA no período | Sim |
| Custo de IA no período | Sim |
| Custo de IA por usuário | Sim; base na lição D5 da T4 |

- Período padrão do painel [LACUNA: período de referência (dia, semana, mês) não definido na ementa]

**Registro de chamada de IA**

- Data e hora
- Organização e usuário
- Modelo
- Tokens de entrada e de saída
- Custo calculado
- Nunca o texto da pergunta ou da resposta

**Pedidos ao Claude Code**

- "Registre cada chamada de IA com organização, usuário, modelo, tokens e custo."
- "Crie o painel administrativo com [indicadores], restrito ao admin no servidor e no banco."
- "Some o custo de IA da organização [nome] no período e compare com o painel."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| Painel mostra texto dos registros | Admin acessa dado do cliente sem necessidade |
| Preço do modelo fixo no código e desatualizado | Custo errado; conferir a página de preços |
| Painel protegido só na tela | Qualquer usuário abre pelo endereço direto |
