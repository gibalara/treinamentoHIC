# A7 · Decidir se uma skill de terceiro entra (rubrica de avaliação; casos: Claude Octopus e Multi-Agent Debate)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 60 min
- **Evidência:** 5 avaliações
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Ler uma skill de terceiro (pacote de instruções escrito por outra pessoa) mostra o que ela faz. Não diz se ela deve entrar no seu projeto.

A rubrica do curso decide com seis critérios: procedência, segurança, manutenção, licença, aderência e ganho medido. Segurança é eliminatória: reprovou, não entra.

No marco da T3, nenhuma skill de terceiro pode estar em uso sem avaliação. Isso inclui a coleção instalada na lição A1 da T3.

## Demonstração

Exemplo: o Diário de Bordo e os dois casos do curso, Claude Octopus e Multi-Agent Debate.

1. Abra o link oficial de cada caso. [LINK A CURAR: página oficial de Claude Octopus e de Multi-Agent Debate]
2. Leia cada caso como na Demonstração da lição A6 da T3. Preencha a "Ficha de leitura" daquela lição.
3. Abra uma conversa no Claude, com a busca na web ativa. Peça: "Para [caso], levante autor, organização, última atualização, licença e contribuidores. Cite a fonte de cada dado."
4. Confira cada dado na página do projeto.
5. Aplique a rubrica, critério por critério (veja "Rubrica de skills de terceiros", na Referência).
6. Avalie segurança primeiro; se "Não atende", pare e registre a reprovação.
7. Em aderência, responda: o Diário precisa disso? Que problema do Diário resolve?
8. Em ganho medido, registre "pendente": ele vem do teste controlado da lição A8 da T3.
9. Registre a decisão na "Ficha de avaliação", na Referência: instalar para teste, descartar ou aguardar.

- [LACUNA: avaliação de referência dos dois casos preenchida pelo curso e o ponto que cada caso ilustra]

## Prática

1. Liste as 5 skills ou coleções a avaliar. Use a coleção da lição A1, as 3 skills da lição A6 (ambas da T3) e um caso desta lição.
2. Para cada uma, levante os dados de procedência com o "Pedido ao Claude", na Referência, e confira na fonte.
3. Aplique a "Rubrica de skills de terceiros", na Referência, começando por segurança.
4. Deixe "ganho medido" como pendente.
5. Preencha uma "Ficha de avaliação" (Referência) por skill, com a decisão.
6. Desinstale qualquer skill em uso que tenha reprovado em segurança. [VERIFICAR NA INTERFACE]
7. No modo de código, na pasta do seu projeto, salve as avaliações em `docs/avaliacoes-de-skills.md` e peça o commit.

## Checagem

Entrega: 5 avaliações preenchidas com a rubrica, com decisão registrada.

## Referência

**Termos**

- Skill de terceiro: skill escrita por outra pessoa ou empresa
- Rubrica: tabela de critérios com níveis, usada para decidir
- Eliminatório: critério que, se reprovado, decide sozinho
- Licença: regra de uso definida pelo autor (o que se pode usar, alterar e distribuir)

**Rubrica de skills de terceiros**

| Critério | Pergunta | Eliminatório |
| --- | --- | --- |
| Procedência | Quem fez, e dá para verificar? | Não |
| Segurança | Scripts, acessos e instruções são seguros (ficha da lição A6 da T3)? | Sim |
| Manutenção | É atualizada e alguém responde a problemas? | Não |
| Licença | Permite usar e adaptar no seu contexto? | Não |
| Aderência | Resolve um problema real do seu projeto? | Não |
| Ganho medido | Melhora o resultado num teste controlado (lição A8 da T3)? | Não |

- Níveis: Não atende / Atende parcialmente / Atende

**Ficha de avaliação**

| Campo | Resposta |
| --- | --- |
| Skill e link | |
| Data da avaliação | |
| Nível por critério | |
| Decisão | Instalar para teste / Descartar / Aguardar |
| Próxima revisão | Trimestral |

**Pedido ao Claude**

- "Para [skill], levante autor, organização, última atualização, licença e contribuidores. Cite a fonte de cada dado."
