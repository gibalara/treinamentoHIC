# D1 · Corrigir os evals automaticamente (IA como juiz, calibrada contra você)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 90 min
- **Evidência:** taxa de concordância
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Conferir 20 casos à mão a cada mudança não escala. LLM como juiz é uma segunda chamada de IA. Ela compara a resposta com o critério e dá a nota.

O juiz também erra. Antes de confiar nele, você o calibra: vocês dois julgam os mesmos 20 casos e você mede quanto concordam.

Sua nota é a referência; o juiz é que se ajusta a você. Calibrado, ele corrige todas as mudanças seguintes em minutos.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra a pasta do Diário em **Manual**. Peça: "Crie o script de evals: envia cada caso-ouro ao tutor, na conta de teste, e grava em `evals/resultados.csv`."
   - Complete o pedido: "Colunas: id, entrada, critério e resposta."
2. Peça: "Rode o script." Deu certo se `evals/resultados.csv` tem uma resposta por caso.
3. Nos 20 casos-ouro originais, julgue cada resposta pelo critério. O juiz ainda não existe, então nenhuma nota da IA influencia você.
4. Peça: "Acrescente a `evals/resultados.csv` as colunas `nota_aluno` e `motivo`."
   - Dite suas notas: "T01 passou; T02 falhou, não citou a fonte; …".
5. Peça: "Crie `prompts/juiz-v1.md`. O juiz recebe entrada, critério de aprovação e resposta."
   - Complete o pedido: "Ele devolve `nota` (passou ou falhou) e `justificativa` curta, em saída estruturada."
6. Abra o arquivo no editor e compare com o "Template do prompt do juiz", na Referência desta lição.
7. Peça: "Crie um segundo script que só roda o juiz sobre as respostas já gravadas. Grave `nota_juiz` e `justificativa`." Assim, você e o juiz julgam as mesmas respostas.
8. Peça: "Rode o juiz e calcule a concordância entre `nota_aluno` e `nota_juiz` nos 20 casos. Liste as discordâncias." Ex.: 18 iguais = 90%.
9. Leia cada discordância e ache a causa:
   - Critério vago: reescreva o critério do caso
   - Juiz tolerante ou rígido demais: ajuste o prompt do juiz e salve como `juiz-v2.md`
10. Rode só o juiz de novo, sobre as mesmas respostas, e recalcule. [LACUNA: taxa mínima de concordância não definida na ementa]
11. Peça: "Nos casos fora do escopo e maliciosos, some uma verificação por regra."
    - Complete o pedido: "Categoria `fora_do_escopo` e nenhum dado de outro usuário."
12. Peça: "Junte os dois scripts num só. No fim, mostre o acerto geral, o de fora do escopo e maliciosos e as falhas."
13. Peça: "Faça um commit com a mensagem 'Adiciona juiz calibrado ao script de evals' e envie ao GitHub."

[LINK A CURAR: documentação oficial da Anthropic sobre avaliação com modelo como juiz]

## Prática

1. Em **Manual**, peça o script de evals da sua feature, como no passo 1 da Demonstração desta lição.
2. Peça para rodar. Julgue você mesmo os 20 casos originais e dite `nota_aluno` e `motivo`.
3. Peça o prompt do juiz com saída estruturada e compare com o template da Referência desta lição.
4. Peça o script que só roda o juiz sobre as respostas gravadas, e rode.
5. Peça o cálculo da concordância e a lista de discordâncias.
6. Corrija critérios vagos e ajuste o juiz, uma versão por vez.
7. Rode só o juiz de novo, sobre as mesmas respostas, até a concordância parar de subir.
8. Peça a verificação por regra nos casos fora do escopo e maliciosos.
9. Peça para juntar os scripts, com o resumo no fim.
10. Peça o commit e o envio ao GitHub.

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
- "Crie um script que só roda o juiz (`prompts/juiz-v1.md`) sobre as respostas gravadas e grava nota e justificativa."
- "Calcule a concordância entre `nota_aluno` e `nota_juiz` e liste as discordâncias."
- "No fim, mostre acerto geral, acerto em fora do escopo e maliciosos e a lista de falhas."

**Regras**

- Você julga antes de ver o juiz
- Na calibração, você e o juiz julgam as mesmas respostas gravadas; rodar o tutor de novo muda as respostas
- Calibração nos 20 casos-ouro originais; o script roda a base inteira
- Chave da API do script em variável de ambiente, como na feature (lição A4 da T4)
- Casos com dados fictícios ou anonimizados

**Aprofundamento**

- Evals são o conceito mais difícil da formação; [LINK A CURAR: curso especializado de evals do benchmark, recomendado pela ementa]
