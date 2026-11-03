# B1 · O agente só alcança o que precisa (ferramentas com permissões mínimas)

- **Trilha:** T6 · Autonomia
- **Tempo:** 90 min
- **Evidência:** lista de ferramentas
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O agente (programa em que a IA escolhe passos) só faz o que as ferramentas permitem. Ferramenta (tool) é uma função do produto que ele pode chamar.

Uma ferramenta ampla, como "rodar qualquer consulta no banco", entrega o produto inteiro a um texto mal-intencionado. Permissão mínima: cada ferramenta faz uma coisa, só na organização da execução, e só lê quando ler basta.

Ferramenta de ação com efeito externo nunca envia nada. Ela só prepara o item para aprovação, que entra na lição B3 da T6.

## Demonstração

Exemplo: as ferramentas do agente semanal do Diário de Bordo.

1. Peça ao Claude Code: "Leia a seção do agente no SPEC.md. Liste as ferramentas necessárias com o template abaixo." Cole o template (veja "Template da lista", na Referência).
2. Confira a lista proposta:
   - `ler_registros_da_semana`: só lê, só alunos da organização da execução
   - `ler_datas_alvo`: só lê, mesma restrição
   - `gravar_sugestao`: escreve só no campo de sugestão do aluno (nível 3)
   - `preparar_alerta_gestor`: cria um item pendente na fila; não envia (nível 2)
3. Confira o que não existe: nenhuma ferramenta envia e-mail, remove aluno ou lê outra organização.
4. Peça: "Implemente estas ferramentas no servidor. A organização vem da execução, nunca do texto gerado pelo modelo."
5. Peça a explicação reversa: "Explique as ferramentas do ponto de vista de arquitetura e risco."
6. Peça: "Crie um teste: ler_registros_da_semana com uma organização diferente da execução deve ser bloqueada."
7. Rode o teste e confira o bloqueio.
8. Salve a lista na seção do agente do `SPEC.md` e peça um commit (versão salva no git).

[LINK A CURAR: documentação oficial da Anthropic sobre uso de ferramentas (tool use) na API]

## Prática

1. Abra seu projeto no Claude Code.
2. Peça a lista de ferramentas a partir da seção do agente, criada na lição A3 da T6.
3. Confira cada ferramenta com os critérios de permissão mínima (veja "Critérios", na Referência).
4. Quebre ou corte toda ferramenta que falhar num critério.
5. Peça a implementação no servidor e a explicação reversa.
6. Peça e rode o teste de bloqueio de outra organização.
7. Salve a lista no `SPEC.md` e peça um commit.

## Checagem

Entrega: lista de ferramentas na seção do agente do `SPEC.md`, com nível, escopo e o teste de bloqueio passando.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Ferramenta (tool): função do produto que o agente pode chamar
- Uso de ferramentas (tool use): recurso da API Anthropic em que o modelo pede ao seu código para rodar uma função
- Servidor: parte do produto que roda fora do navegador do usuário
- Escopo: o conjunto de dados que a ferramenta alcança
- Execução: uma rodada completa do agente, do início à parada
- Explicação reversa: o Claude explica um arquivo do ponto de vista de arquitetura e risco (lição 0.5 da T0)

**Template da lista**

| Ferramenta | O que faz | Lê ou escreve | Escopo | Nível (matriz da A2 da T6) |
| --- | --- | --- | --- | --- |
| | | | | |

**Critérios de permissão mínima**

- Faz uma coisa só
- Lê, a menos que escrever seja o objetivo
- Escopo vem da execução (organização, usuário), nunca do modelo
- Ação de nível 2 só cria item pendente; quem envia é o produto, após aprovação
- Ação de nível 1 não vira ferramenta
- Sem ferramenta genérica ("rodar consulta", "enviar qualquer e-mail")

**Erros comuns**

- Ferramenta que aceita a organização como parâmetro livre
- Ferramenta que devolve campos que o agente não usa (ex.: e-mail do aluno)
