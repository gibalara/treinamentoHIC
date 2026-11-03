# C3 · Relatório agendado por organização

- **Trilha:** T5 · Escala
- **Tempo:** 60 min
- **Evidência:** relatório recebido
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O gestor de cada cliente quer saber como a equipe usa o produto sem precisar entrar nele. Um relatório semanal na caixa de e-mail resolve.

O n8n (ferramenta visual de fluxos entre sistemas) dispara o envio no horário. O produto monta o conteúdo de cada organização, porque só ele conhece as permissões.

O risco é o relatório da Org A chegar com dados da Org B. Por isso, cada relatório é montado e conferido por organização.

## Demonstração

Exemplo: toda segunda-feira, o gestor de cada turma do Diário de Bordo recebe o resumo da semana.

1. Abra a pasta do Diário no modo de código, no modo **Plano** (cria um plano antes de alterar arquivos). [VERIFICAR NA INTERFACE]
2. Peça: "Crie uma rota de relatório que devolve, por turma, o resumo da semana e o e-mail do gestor." Rota é um endereço que o servidor atende.
3. Peça: "O resumo traz só números: alunos ativos, lições concluídas, travas abertas. Sem texto dos registros."
4. Peça: "A rota só responde com o segredo do n8n no cabeçalho, lido de variável de ambiente." Variável de ambiente é um valor guardado fora do código.
5. Cadastre a variável na Vercel e o mesmo segredo como credencial no n8n (segredo guardado fora dos blocos). [VERIFICAR NA INTERFACE]
6. No n8n, crie um fluxo com gatilho agendado para segunda-feira. [VERIFICAR NA INTERFACE: nome do gatilho agendado]
7. Adicione a chamada à rota de relatório, com a credencial no cabeçalho. [VERIFICAR NA INTERFACE: nome do nó de chamada externa]
8. Adicione o envio de um e-mail por turma, para o gestor daquela turma. [VERIFICAR NA INTERFACE]
9. Crie duas turmas de teste, com gestores de e-mails diferentes e a palavra-marca "ABACAXI-B" na Turma B.
10. Execute o fluxo manualmente e abra os dois e-mails.
11. Confira: o gestor da A recebe só a Turma A; nenhum e-mail da A contém "ABACAXI-B".
12. Peça: "Chame a rota de relatório sem o segredo." Confira: recusada.
13. Peça um commit.

[LINK A CURAR: documentação oficial do n8n sobre gatilho agendado]

## Prática

1. Defina o relatório do seu produto: destinatário, frequência e indicadores (veja "Escolha do relatório", na Referência).
2. Peça a rota de relatório por organização, só com números e protegida por segredo.
3. Cadastre o segredo na Vercel e como credencial no n8n.
4. Monte o fluxo agendado: chamada à rota e um e-mail por organização.
5. Crie duas organizações de teste com destinatários diferentes e uma palavra-marca.
6. Execute o fluxo e confira cada e-mail.
7. Teste a rota sem segredo e peça um commit.
8. Atualize o item "Relatório" do seu teste de isolamento, da lição A5 da T5.

## Checagem

Entrega: print dos dois relatórios recebidos, cada um só com os dados da própria organização.

## Referência

**Termos**

- n8n: ferramenta visual de fluxos entre sistemas
- Gatilho agendado: inicia o fluxo num dia e horário fixos
- Rota: endereço que o servidor atende
- Variável de ambiente: valor guardado fora do código, no servidor
- Credencial: segredo guardado no n8n, fora dos blocos
- Palavra-marca: termo único plantado numa organização para detectar vazamento

**Divisão de responsabilidades**

| n8n | Produto |
| --- | --- |
| Horário do disparo | Quais organizações existem |
| Envio do e-mail | Conteúdo de cada relatório |
| — | Quem é o gestor de cada organização |
| — | Conferência do segredo |

**Escolha do relatório**

- Critério: o destinatário decide algo com ele; só números, sem conteúdo sensível
- Exemplos:
  - Consultoria: entregas da semana por cliente
  - RH: vagas abertas e etapas vencidas por área
  - Formação: alunos ativos, lições concluídas e travas por turma

**Pedidos ao Claude Code**

- "Crie uma rota de relatório que devolve, por organização, [indicadores] e o e-mail do responsável."
- "A rota só responde com o segredo no cabeçalho, lido de variável de ambiente."
- "Chame a rota de relatório sem o segredo e mostre a resposta."

**Erros comuns (Tutor HIC)**

| Erro | Consequência |
| --- | --- |
| n8n consulta o banco direto | Permissões do produto ignoradas |
| Um e-mail com todas as organizações | Vazamento entre clientes |
| Rota de relatório sem segredo | Qualquer um baixa os números de todos |
