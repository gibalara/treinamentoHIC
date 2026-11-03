# X3 · Saber quais dados seu produto trata e publicar a política de privacidade (LGPD em produtos com IA)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 75 min
- **Evidência:** mapa de dados + política de privacidade v1
- **Liberada após:** T2b
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Seu MVP já guarda dados de pessoas reais. A LGPD (lei brasileira que regula o uso de dados pessoais) vale desde o primeiro usuário.

Dado pessoal é qualquer informação que identifica uma pessoa, como nome ou e-mail. Com IA, há um risco a mais: dados enviados a um serviço externo de IA.

O mapa de dados mostra o que entra, onde fica e para onde vai. A política de privacidade diz isso ao usuário.

Esta lição não é aconselhamento jurídico. Em produto comercial ou empresa regulada, a política exige revisão por profissional de direito.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), com login, registros, painel e deploy.

1. Abra a pasta do Diário no Claude Code (o Claude trabalhando na pasta do projeto, lição 0.4 da T0).
2. Tabela é onde o banco guarda um tipo de registro. Peça: "Liste os dados que o app guarda ou recebe, com origem, tabela e quem acessa."
3. Confira a lista com a seção 5 (Dados) do `SPEC.md` (especificação do produto, criada na lição 1.6 da T1).
4. Peça: "Monte o mapa de dados no modelo da Referência e salve em `mapa-de-dados.md`."
5. Confira o resultado:

   | Dado | Origem | Onde fica | Quem acessa | Para quê | Pessoal? | Vai para IA? |
   | --- | --- | --- | --- | --- | --- | --- |
   | E-mail | Cadastro | Supabase (banco e login) | Só o próprio usuário | Login | Sim | Não |
   | Registros da jornada (lição, tempo, onde travou, aprendizado) | Usuário digita | Supabase | Só o próprio usuário | Painel | Sim, ligados ao e-mail | Sim, a partir da T4 (Tutor) |

6. Marque a coluna "Base legal" como pendente. Base legal é o motivo previsto na LGPD que autoriza tratar um dado. [LACUNA: lista de bases legais e critério de escolha não constam na ementa]
7. Peça: "Escreva a política de privacidade v1 a partir do mapa de dados, em linguagem simples, nos tópicos da Referência. Marque como rascunho para revisão jurídica."
8. Confira se cada linha do mapa aparece na política.
9. Peça um commit (versão salva do projeto, lição 0.5 da T0).

## Prática

1. Abra no Claude Code a pasta do seu MVP.
2. Peça a lista de dados que o app guarda ou recebe, com origem, tabela e quem acessa.
3. Confira com a seção 5 do seu `SPEC.md`. Atualize a seção se faltar algo.
4. Peça o mapa de dados no modelo da Referência, em `mapa-de-dados.md`.
5. Inclua as linhas da feature de IA planejada na seção 6 do `SPEC.md`, marcadas "a partir da T4".
6. Para cada dado, pergunte: "o produto funciona sem ele?". Se sim, peça para removê-lo.
7. Peça a política de privacidade v1 em `politica-de-privacidade.md`, marcada como rascunho.
8. Peça um commit com os dois arquivos.

## Checagem

Entrega: `mapa-de-dados.md` e `politica-de-privacidade.md` v1 no repositório (pasta do projeto com versões guardadas pelo git).

## Referência

**Termos**

- LGPD: lei brasileira que regula o uso de dados pessoais
- Dado pessoal: informação que identifica uma pessoa (nome, e-mail, CPF)
- Dado sensível: [LACUNA: definição e lista da LGPD não constam na ementa; validar com profissional de direito]
- Base legal: motivo previsto na LGPD que autoriza tratar um dado [LACUNA: lista e critério]
- Mapa de dados: tabela do que o produto trata, de onde vem e para onde vai
- Política de privacidade: texto que informa ao usuário como os dados dele são usados

**Modelo do mapa de dados**

| Dado | Origem | Onde fica | Quem acessa | Para quê | Pessoal? | Vai para IA? | Base legal |
| --- | --- | --- | --- | --- | --- | --- | --- |

**Tópicos da política v1**

- Quais dados coletamos
- Para que usamos cada um
- Onde ficam guardados e quais serviços externos os recebem (banco, hospedagem, API de IA)
- Quem tem acesso
- Por quanto tempo guardamos [LACUNA: regra de retenção não consta na ementa]
- Como o usuário pede acesso, correção ou exclusão [LACUNA: direitos previstos na LGPD e prazos não constam na ementa]
- Contato do responsável

**Regras do curso**

- Dados enviados à API de IA devem ser fictícios ou anonimizados (sem nada que identifique a pessoa) durante a formação
- O projeto não pode depender de dados sensíveis reais para funcionar (checklist de elegibilidade, lição 1.9 da T1)
- Atualize o mapa a cada dado novo, inclusive eventos de uso (X4 desta trilha)
- Produto comercial ou empresa regulada: revisão por profissional de direito antes de publicar

**Pedidos ao Claude Code**

- "Liste todos os dados que este app guarda ou recebe, com origem, tabela e quem acessa."
- "Monte o mapa de dados e salve em `mapa-de-dados.md`."
- "Escreva a política de privacidade v1 a partir do mapa, marcada como rascunho para revisão jurídica."

**Onde o mapa volta:** dossiê de governança (X7 desta trilha).
