# B2 · Ver organizações, usuários e custo de IA num só lugar (painel administrativo)

- **Trilha:** T5 · Escala
- **Tempo:** 90 min
- **Evidência:** painel
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com várias organizações, você precisa saber quem usa, quanto usa e quanto cada uma custa. Sem isso, um cliente pode dar prejuízo sem você perceber.

Painel administrativo é a tela restrita ao admin do produto, com organizações, usuários, uso e custo de IA. Custo de IA é o valor pago à API (serviço externo de IA) por organização. É calculado pelos tokens, unidades de texto cobradas.

O painel mostra números agregados, não o conteúdo dos clientes. Ele alimenta o preço da lição X6 da trilha transversal.

## Demonstração

Exemplo: o Diário de Bordo com várias turmas usando o tutor de IA.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Mostre se cada chamada à API de IA é registrada com organização, usuário, tokens e custo."
3. Se não for, peça: "Registre cada chamada de IA com os campos de 'Registro de chamada de IA'.
   Gere o SQL num arquivo." Os campos estão na Referência desta lição.
4. Peça: "Crie o painel administrativo com os indicadores de 'Indicadores do painel', na Referência desta lição."
5. Acrescente: "Só o papel admin acessa o painel, conferido no servidor e no banco."
6. Confira no plano: o painel mostra contagens e somas, nunca o texto dos registros. Aprove.
7. Rode o SQL no SQL Editor do Supabase, na ordem da lição A2 da T5 (backup → teste → produção). [VERIFICAR NA INTERFACE]
8. Peça: "Escreva e rode um script que faça 5 perguntas ao tutor como aluno de cada turma de teste."
   Use as contas de teste da lição A5 da T5.
9. Entre como admin (papel dado por SQL, lição B1 da T5) e abra o painel. Copie o endereço da página.
10. Peça: "Gere o SQL que soma tokens e custo da TESTE Turma A no período."
   Rode no SQL Editor e compare com o painel.
11. Confira uma chamada à mão: tokens × preço do modelo na página oficial de preços.
12. Numa janela anônima, entre como gestor e cole o endereço do painel. Confira: acesso negado.
13. Peça um commit (ponto salvo de versão no git).

[LINK A CURAR: página oficial da Anthropic com preços por modelo da API]

## Prática

1. Abra a pasta do seu projeto no modo **Plano**.
2. Confira se as chamadas de IA são registradas com organização e custo; se não, peça o registro.
3. Escolha os indicadores do seu painel (veja "Indicadores do painel", na Referência desta lição).
4. Peça o painel restrito ao admin, no servidor e no banco. Rode o SQL na ordem da lição A2 da T5.
5. Gere uso fictício em duas organizações de teste com um script.
6. Compare o custo de uma organização no painel com a soma pelo SQL e com uma conta à mão.
7. Abra o endereço do painel com outro papel e confirme a recusa.
8. Peça um commit.

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
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code
- Janela anônima: janela do navegador que não compartilha login com as outras

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
