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
2. Peça: "Crie uma rota de relatório que devolve, por turma, o resumo da semana e o e-mail do gestor."
   Rota é um endereço que o servidor atende.
3. Acrescente: "O resumo traz só números: alunos ativos, lições concluídas, travas abertas. Sem texto dos registros."
4. Acrescente: "A rota só responde com o cabeçalho X-Relatorio-Segredo, lido da variável RELATORIO_SEGREDO."
   Variável de ambiente é um valor guardado fora do código.
5. Acrescente: "Grave em RELATORIO_SEGREDO, no .env.local, 40 caracteres aleatórios, sem mostrar o valor." Aprove o plano.
6. Cadastre a variável na Vercel. Peça um commit e o envio ao GitHub, para a Vercel publicar a rota. [VERIFICAR NA INTERFACE]
7. Peça: "Gere o SQL de TESTE Turma A e TESTE Turma B, com gestores de e-mails diferentes e registros fictícios."
   Rode no SQL Editor do Supabase.
8. No n8n, crie um fluxo com gatilho agendado para segunda-feira. [VERIFICAR NA INTERFACE: nome do gatilho agendado]
9. Adicione a chamada à rota publicada, com o segredo como credencial de cabeçalho (segredo guardado no n8n, fora dos blocos). [VERIFICAR NA INTERFACE: nome do nó de chamada externa]
10. Separe a resposta em um item por turma. [VERIFICAR NA INTERFACE: se o nó de chamada já devolve um item por turma]
11. Adicione o envio de e-mail, com o destinatário vindo do campo do gestor de cada item. [VERIFICAR NA INTERFACE]
12. Execute o fluxo manualmente e abra os dois e-mails.
13. Confira: o gestor da A recebe só a TESTE Turma A, sem nenhuma menção à B. Compare os números com o painel da turma.
14. Peça: "Chame a rota de relatório publicada sem o segredo e mostre a resposta." Confira: recusada.

[LINK A CURAR: documentação oficial do n8n sobre gatilho agendado]

## Prática

1. Defina o relatório do seu produto: destinatário, frequência e indicadores (veja "Escolha do relatório", na Referência desta lição).
2. Peça a rota de relatório por organização, só com números e protegida por segredo.
   Use um segredo novo, diferente do da lição C2 da T5.
3. Cadastre o segredo na Vercel, peça commit e envio.
4. Crie duas organizações de teste, com destinatários diferentes, por SQL.
5. Monte o fluxo agendado: chamada à rota, um item por organização e um e-mail por item.
6. Execute o fluxo e confira cada e-mail: só a própria organização, números corretos.
7. Teste a rota sem segredo.
8. Atualize o item "Relatório" do seu `docs/teste-isolamento.md`, da lição A5 da T5, e peça um commit.

## Checagem

Entrega: print dos dois relatórios recebidos, cada um só com os dados da própria organização.

## Referência

**Termos**

- n8n: ferramenta visual de fluxos entre sistemas
- Gatilho agendado: inicia o fluxo num dia e horário fixos
- Rota: endereço que o servidor atende
- Variável de ambiente: valor guardado fora do código, no servidor
- Credencial: segredo guardado no n8n, fora dos blocos
- `.env.local`: arquivo local com as variáveis de ambiente; fica fora do GitHub
- SQL Editor: tela do Supabase onde se roda o SQL gerado pelo Claude Code
- Item: no n8n, cada unidade de dado que passa pelos blocos; um item por organização gera um e-mail por organização

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
| Mesmo segredo do webhook da lição C2 da T5 | Um vazamento abre os dois caminhos |
