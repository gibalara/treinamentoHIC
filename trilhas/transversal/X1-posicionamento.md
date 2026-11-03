# X1 · Dizer em um parágrafo o que você entrega e para quem (posicionamento)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 45 min
- **Evidência:** posicionamento em 1 parágrafo
- **Liberada após:** T1
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Quem constrói sozinho precisa ser lembrado por um problema, não por uma ferramenta. "Sei usar IA" não diferencia ninguém.

Posicionamento é a frase que diz para quem você resolve qual problema, e por que você. Ele orienta o case, o preço e o pitch das próximas lições.

Você já tem a matéria-prima da T1: problema validado, alternativas e proposta de valor. Aqui ela vira um parágrafo.

## Demonstração

**Abertura: um case real.** Case Fitfolio. [VERIFICAR: autorização do fundador antes de publicar]

1. Leia os fatos, todos segundo o fundador, Matheus Gobbi:
   - App de treino e nutrição, construído sozinho, com IA e sem investimento.
   - Começou como registrador de treinos e virou um ecossistema.
   - Chegou a 100 mil usuários de forma orgânica, sem anúncios.
   - Por causa do app, foi para o Vale do Silício.
2. Note o ponto de partida: um problema estreito (registrar treinos) antes do produto amplo.
3. [LACUNA: receita do Fitfolio não consta no insumo do case; a abertura da ementa cita "do posicionamento à receita"]

**Exemplo resolvido.** Uma gerente de compras sênior especificou na T1 um app para comparar propostas de fornecedores.

4. Ela abre, no Claude Code (o Claude trabalhando na pasta do projeto, lição 0.4 da T0), a pasta do projeto.
5. Pede o resumo do `SPEC.md`: quem sofre, dor, alternativa atual e proposta de valor. O `SPEC.md` é a especificação do produto (lição 1.6 da T1).
6. Pede: "Escreva 3 versões de posicionamento em um parágrafo, no modelo da Referência. Sem jargão de tecnologia."
7. Escolhe a versão mais específica e corta o que não tem prova.
8. Resultado: "Para gerentes de compras de indústrias médias, que perdem dias comparando propostas, entrego a comparação em minutos. Já validei com 3 compradores. Diferente do ERP, funciona com a proposta em PDF como ela chega."
9. Lê em voz alta para alguém do nicho e anota a primeira pergunta que a pessoa faz.

## Prática

1. Abra no Claude Code a pasta do seu projeto.
2. Peça o resumo do seu `SPEC.md` em tópicos: quem sofre, dor, alternativa atual, proposta de valor.
3. Peça 3 versões de posicionamento no modelo da Referência.
4. Escolha uma e corte o que não tem prova. Provas: conversas da lição 1.2b e tabela da 1.3, ambas da T1.
5. Teste com 1 pessoa do nicho. Anote a primeira pergunta dela.
6. Ajuste o parágrafo para responder a essa pergunta.
7. Salve em `posicionamento.md` na pasta do projeto e peça um commit (versão salva do projeto, lição 0.5 da T0).

## Checagem

Entrega: o parágrafo de posicionamento em `posicionamento.md`, com a pergunta da pessoa do nicho e o ajuste feito.

## Referência

**Modelo**

- Para [quem, específico], que [dor validada], entrego [resultado, não ferramenta].
- Prova: [conversas, teste, número].
- Diferente de [alternativa atual], [o que só você faz].

**Critérios de um bom posicionamento**

- Cabe em um parágrafo de até 3 frases
- Nomeia um público que você consegue encontrar
- Fala do resultado, não de IA nem de tecnologia
- Tem uma prova que você pode mostrar

**Erros comuns**

| Erro | Correção |
| --- | --- |
| "Uso IA para…" | Troque pela dor que você resolve |
| Público "empresas" | Cargo, setor e porte |
| Diferencial sem prova | Cite a conversa ou o teste da T1 |

**Pedidos ao Claude Code**

- "Leia o SPEC.md e resuma quem sofre, a dor, a alternativa atual e a proposta de valor."
- "Escreva 3 versões de posicionamento em um parágrafo, sem jargão de tecnologia."
- "Faça um commit com a mensagem 'Adiciona posicionamento'."

**Onde o posicionamento volta:** case (X9) e pitch (X10), ambas desta trilha.
