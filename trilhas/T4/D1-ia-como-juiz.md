# D1 · Corrigir os evals automaticamente (IA como juiz, calibrada contra você)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 90 min
- **Evidência:** taxa de concordância
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Conferir 20 casos à mão a cada mudança não escala. LLM como juiz é uma segunda chamada de IA que lê a resposta, compara com o critério e dá a nota.

O juiz também erra. Antes de confiar nele, você o calibra: vocês dois julgam os mesmos 20 casos e você mede quanto concordam.

Sua nota é a referência; o juiz é que se ajusta a você. Calibrado, ele corrige todas as mudanças seguintes em minutos.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Peça ao Claude Code: "Crie o script de evals: lê `evals/casos-ouro.csv`, envia cada entrada à rota do tutor com a conta de teste e grava a resposta na coluna `resposta`."
2. Rode o script.
3. Antes de ver qualquer nota da IA, julgue cada resposta pelo critério de aprovação. Preencha `nota_aluno` (passou ou falhou) e o motivo em uma linha.
4. Peça: "Crie `prompts/juiz-v1.md`. O juiz recebe entrada, critério de aprovação e resposta. Devolve `nota` (passou ou falhou) e `justificativa` curta, em saída estruturada."
5. Revise o prompt do juiz com o template da Referência.
6. Peça: "Acrescente o juiz ao script: para cada caso, grave `nota_juiz` e `justificativa`."
7. Rode e conte os casos em que `nota_aluno` e `nota_juiz` são iguais. Divida por 20. Ex.: 18 iguais = 90% de concordância.
8. Leia cada discordância e ache a causa:
   - Critério vago: reescreva o critério do caso
   - Juiz tolerante ou rígido demais: ajuste o prompt do juiz e salve como `juiz-v2.md`
9. Rode de novo e recalcule a concordância. [LACUNA: taxa mínima de concordância não definida na ementa]
10. Peça: "Para casos fora do escopo e maliciosos, use também verificação por regra: categoria `fora_do_escopo` e nenhum dado de outro usuário."
11. Peça: "No fim do script, mostre o acerto geral, o acerto em fora do escopo e maliciosos e a lista de falhas."
12. Peça: "Faça um commit com a mensagem 'Adiciona juiz calibrado ao script de evals'."

[LINK A CURAR: documentação oficial da Anthropic sobre avaliação com modelo como juiz]

## Prática

1. Peça o script de evals da sua feature, gravando a resposta de cada caso-ouro.
2. Rode e julgue você mesmo as respostas, com motivo, antes de ver o juiz.
3. Peça o prompt do juiz com saída estruturada e revise com o template.
4. Acrescente o juiz ao script e rode.
5. Calcule a taxa de concordância.
6. Corrija critérios vagos e ajuste o juiz, uma versão por vez.
7. Recalcule até a concordância parar de subir.
8. Peça a verificação por regra nos casos fora do escopo e maliciosos.
9. Peça o resumo no fim do script e o commit.

## Checagem

Entrega: planilha com `nota_aluno`, `nota_juiz` e a taxa de concordância final + prompt do juiz em `prompts/`.

## Referência

**Termos**

- Eval: prova que mede se a IA acerta, com respostas certas definidas antes (lição A2 da T4)
- LLM como juiz: chamada de IA que avalia a resposta de outra chamada contra um critério
- LLM: modelo de linguagem, como o Claude
- Calibrar: ajustar o juiz até ele dar as mesmas notas que você
- Taxa de concordância: casos com a mesma nota sua e do juiz, divididos pelo total
- Verificação por regra: conferência feita pelo código, sem IA, quando a regra é objetiva
- Script de evals: programa que roda os casos-ouro, chama o juiz e resume o resultado
- Saída estruturada: resposta em campos fixos (lição B1 da T4)

**Como calcular a concordância**

| Caso | Sua nota | Nota do juiz | Concorda? |
| --- | --- | --- | --- |
| T01 | passou | passou | sim |
| T02 | falhou | passou | não |

- Concordância = casos "sim" ÷ total de casos
- Discordância em que o juiz aprova e você reprova é a mais perigosa: esconde falhas

**Template do prompt do juiz**

```markdown
Você avalia respostas de [feature].
Receberá: a entrada do usuário, o critério de aprovação e a resposta.
Dê "passou" só se a resposta cumpre todo o critério.
Na dúvida, dê "falhou".
Devolva: nota (passou ou falhou) e justificativa em uma frase.
```

**Pedidos ao Claude Code**

- "Crie o script de evals: lê `evals/casos-ouro.csv`, chama [feature] e grava as respostas."
- "Acrescente o juiz com `prompts/juiz-v1.md` e grave nota e justificativa."
- "No fim, mostre acerto geral, acerto em fora do escopo e maliciosos e a lista de falhas."

**Regras**

- Você julga antes de ver o juiz
- Chave da API do script em variável de ambiente, como na feature (lição A4 da T4)
- Casos com dados fictícios ou anonimizados

**Aprofundamento**

- Evals são o conceito mais difícil da formação; [LINK A CURAR: curso especializado de evals do benchmark, recomendado pela ementa]
