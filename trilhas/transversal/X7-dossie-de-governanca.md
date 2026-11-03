# X7 · Responder à TI e ao compliance com evidências (governança de IA)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 60 min
- **Evidência:** dossiê de governança
- **Liberada após:** T5
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Para entrar numa empresa, seu produto passa pela TI e pelo compliance (área que verifica regras internas e leis). Eles perguntam o que pode dar errado.

Resposta em promessa não passa. Resposta com evidência passa: teste, registro, relatório.

Você já produziu essas evidências nas trilhas. O dossiê de governança junta tudo num documento: cada pergunta aponta para a prova.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), com organizações, papéis e painel do gestor.

1. Abra a pasta do Diário no Claude Code, no modo de código do Claude Desktop. O Claude Code é o Claude trabalhando nos arquivos da pasta (lição 0.4 da T0).
2. Repositório é a pasta do projeto, com versões guardadas pelo git. Peça: "Liste os arquivos de evidência do repositório: relatórios, testes, checklists e rubricas."
3. Peça: "Monte o dossiê de governança com esta tabela: [cole o modelo do dossiê]. Para cada pergunta, aponte o arquivo de evidência." O modelo está no bloco Referência desta lição.
4. Confira a linha de isolamento: aponta para o relatório do teste de isolamento (lição A5 da T5).
5. Confira a linha de IA: aponta para o resultado dos evals (testes de qualidade da IA, T4).
6. Marque como "pendente até a T6" as linhas de autonomia, aprovação e interruptor de emergência.
7. Abra 2 evidências ao acaso e confirme que provam o que a linha diz.
8. Peça para salvar em `dossie-governanca.md` e faça um commit (versão salva do projeto, lição 0.5 da T0).

## Prática

1. Abra a pasta do seu projeto no modo de código do Claude Desktop, em **Manual**. Nele, o Claude Code pede aprovação antes de cada mudança.
2. Peça a lista dos arquivos de evidência do repositório.
3. Faça o pedido do passo 3 da Demonstração desta lição, colando o modelo do dossiê.
4. Abra cada evidência e confirme que ela prova a resposta.
5. Linha sem evidência: marque "falta" e anote a lição que a produz (coluna "Onde foi produzida").
6. Linhas da T6: marque "pendente até a T6" e atualize ao concluir a T6.
7. Peça para salvar em `dossie-governanca.md` e faça um commit.

## Checagem

Entrega: `dossie-governanca.md` com todas as linhas do modelo, cada uma com evidência, "falta" ou "pendente até a T6".

## Referência

**Modelo do dossiê**

| Pergunta da TI ou do compliance | Evidência | Onde foi produzida | Arquivo | Status |
| --- | --- | --- | --- | --- |
| Um cliente vê dados de outro? | Teste de isolamento | Lição A5 da T5 | | |
| Dá para saber quem fez o quê? | Trilha de auditoria | Lição B3 da T5 | | |
| A IA acerta o suficiente? | Resultado dos evals | Lições A2 e D1 da T4 | | |
| A IA resiste a pedidos maliciosos? | Casos maliciosos a 100% | Lição C1 da T4 e D1 da T6 | | |
| O que a IA pode fazer sozinha? | Matriz de autonomia e fila de aprovação | Lições A2 e B3 da T6 | | |
| Que dados pessoais o produto trata? | Mapa de dados | X3 desta trilha | | |
| Dá para desligar o agente numa emergência? | Teste do interruptor de emergência | Lição B5 da T6 | | |
| As skills de terceiros foram avaliadas? | Rubricas de skills | Lição A7 da T3 | | |

**Termos**

- Governança de IA: regras e evidências que mostram que a IA do produto está sob controle
- Compliance: área que verifica o cumprimento de regras internas e leis
- Isolamento: um cliente nunca vê dados de outro
- Trilha de auditoria: registro de quem fez o quê e quando
- Evals: testes de qualidade da IA, com casos e meta
- Casos maliciosos: tentativas de enganar a IA para quebrar regras
- Matriz de autonomia: o que o agente (IA que executa tarefas) pode fazer sozinho e o que exige aprovação
- Interruptor de emergência: desliga o agente na hora
- Skill: pacote de instruções que ensina o Claude a fazer uma tarefa

**Regras**

- Evidência é arquivo, teste ou registro; nunca afirmação
- 100% nos casos maliciosos é o mínimo para seguir, não garantia de segurança
- Atualize o dossiê a cada marco concluído

[LACUNA: a ementa não traz a lista de perguntas típicas da TI e do compliance; as perguntas do modelo derivam das evidências citadas na ementa]

**Pedidos ao Claude Code**

- "Liste os arquivos de evidência deste repositório: relatórios, testes, checklists e rubricas."
- "Monte o dossiê de governança, apontando o arquivo de evidência de cada pergunta."
