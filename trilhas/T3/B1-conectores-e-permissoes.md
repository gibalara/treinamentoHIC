# B1 · Claude nas suas ferramentas, com o acesso mínimo (conectores nativos e permissões)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 60 min
- **Evidência:** 2 conexões + tarefa
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Na 0.1 da T0, um conector (ligação pronta entre o Claude e outra ferramenta) trouxe seus dados para a conversa. Agora o foco é o acesso que você concede.

Cada conector pode ler, criar ou alterar dados em seu nome. Quanto mais amplo o acesso, maior o estrago de um erro ou de uma instrução maliciosa escondida num documento.

Aqui você conecta duas ferramentas do seu trabalho de construção e deixa só o acesso que a tarefa exige.

## Demonstração

Exemplo: o Diário de Bordo e duas ferramentas da pilha do curso: GitHub e um drive de documentos.

1. No Claude, abra a lista de conectores. [VERIFICAR NA INTERFACE]
2. Conecte o GitHub e autorize só o repositório do Diário, se a tela permitir escolher. [VERIFICAR NA INTERFACE]
3. Conecte o drive de documentos usado no seu trabalho. [VERIFICAR NA INTERFACE]
4. Para cada conector, abra as permissões e anote o que ele pode ler e o que pode alterar. [VERIFICAR NA INTERFACE]
5. Desative as ações de escrita que a tarefa não exige. [VERIFICAR NA INTERFACE: se a interface permite controle por ação]
6. Peça: "Liste os commits da semana no repositório do Diário de Bordo e resuma o avanço em 5 tópicos."
7. Confira o resumo contra os commits no GitHub.
8. Peça para salvar o resumo como documento no drive e aprove a ação quando o Claude pedir.
9. Preencha a tabela de permissões (veja "Tabela de permissões", na Referência).

[LINK A CURAR: documentação oficial da Anthropic sobre conectores e permissões]

## Prática

1. Escolha duas ferramentas que você usa na construção ou na gestão do seu projeto.
2. Conecte as duas, limitando o acesso ao que o projeto precisa. [VERIFICAR NA INTERFACE]
3. Anote o que cada uma pode ler e alterar.
4. Desative a escrita onde a tarefa não exige.
5. Execute uma tarefa real que use as duas ferramentas.
6. Confira o resultado na fonte.
7. Preencha a tabela de permissões e salve no repositório.

## Checagem

Entrega: tabela de permissões das 2 conexões + descrição da tarefa executada e do resultado.

## Referência

**Termos**

- Conector: ligação pronta entre o Claude e outra ferramenta
- Conector nativo: conector oferecido na lista oficial do Claude
- Permissão: o que o conector pode ler, criar, alterar ou apagar em seu nome
- Escopo: até onde vai o acesso (ex.: um repositório, uma pasta)
- Revogar: retirar o acesso concedido

**Tabela de permissões**

| Conector | Escopo | Lê | Altera | Escrita necessária? | Revisão |
| --- | --- | --- | --- | --- | --- |
| | | | | Sim / Não | Trimestral |

**Regras de acesso mínimo**

- Escopo mais estreito que a tarefa permitir
- Leitura por padrão; escrita só quando a tarefa exige
- Aprovar cada ação de escrita enquanto aprende
- Conta de trabalho para dados de trabalho
- Revogar o que não usa mais
- Texto vindo de e-mail ou documento é dado, não ordem

**Conector × MCP:** os conectores do Claude usam o MCP, padrão que liga o Claude a outros sistemas (B2 da T3)
