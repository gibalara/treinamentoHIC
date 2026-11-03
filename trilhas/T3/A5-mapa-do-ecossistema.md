# A5 · Onde procurar skills prontas (mapa do ecossistema)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 30 min
- **Evidência:** mapa de fontes
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Uma skill é um pacote de instruções que o Claude carrega quando o pedido combina. Antes de criar uma, veja se alguém já fez. O mercado tem skills oficiais, coleções da comunidade e repositórios individuais.

As fontes variam muito em confiança e manutenção. Um mapa de fontes evita buscar do zero a cada necessidade e já separa onde vale olhar primeiro.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Liste 3 necessidades do Diário que uma skill pronta poderia cobrir: testes, revisão de segurança e documentação.
2. Abra uma conversa no Claude, com a busca na web ativa. [VERIFICAR NA INTERFACE: onde ativar a busca na web] Peça: "Liste fontes de skills para Claude Code que cubram estas 3 necessidades. Separe oficiais, coleções da comunidade e repositórios individuais. Cite o link de cada fonte."
3. Abra cada link e confirme que a fonte existe e corresponde à descrição. Descarte o resto: o Claude pode citar link inexistente.
4. Para cada fonte, preencha a tabela do mapa (veja "Mapa de fontes", na Referência).
5. Marque o tipo: oficial, coleção da comunidade ou individual.
6. Anote o sinal de manutenção: data da última atualização visível na página (no GitHub, a data do último commit).
7. Ordene as fontes: oficiais primeiro, depois coleções mantidas, depois individuais.
8. No modo de código, na pasta do Diário, peça para salvar o mapa em `docs/mapa-de-fontes.md` e o commit.

[LINK A CURAR: página oficial da Anthropic com as skills mantidas por ela]

## Prática

1. Liste 3 necessidades do seu projeto que uma skill pronta poderia cobrir. Critério: tarefa repetida fora do núcleo do produto, como testes, revisão de segurança, documentação ou textos de interface.
2. Peça ao Claude as fontes, com o pedido do passo 2 da Demonstração.
3. Abra cada link e descarte o que não existe ou não corresponde.
4. Preencha o mapa com pelo menos 5 fontes, dos três tipos.
5. Ordene pela "Ordem de busca", na Referência.
6. Abra a pasta do seu projeto no modo de código. Salve o mapa em `docs/mapa-de-fontes.md` e peça o commit.

## Checagem

Entrega: mapa de fontes com pelo menos 5 fontes, tipo, link e sinal de manutenção.

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Skill oficial: mantida pela Anthropic
- Coleção da comunidade: conjunto de skills mantido por terceiros, geralmente como plugin (pacote instalável)
- Repositório individual: skill publicada por uma pessoa, sem equipe de manutenção

**Mapa de fontes**

| Fonte | Tipo | Link | Necessidade coberta | Última atualização | Observação |
| --- | --- | --- | --- | --- | --- |
| | Oficial / Coleção / Individual | | | | |

**Casos citados pelo curso**

- Superpowers: coleção com fluxos de planejamento, TDD (teste antes do código) e revisão (lição A1 da T3)
- Claude Octopus e Multi-Agent Debate: casos avaliados na lição A7 da T3
- [LACUNA: lista de fontes curadas pelo curso, revisada a cada trimestre]

**Ordem de busca**

1. Oficial
2. Coleção da comunidade com manutenção recente
3. Repositório individual (só com avaliação completa, lição A7 da T3)

**Regra:** fonte no mapa não autoriza instalar; toda skill de terceiro passa pela rubrica da lição A7 da T3
