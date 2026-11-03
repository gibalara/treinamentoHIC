# B1 · Respostas que o app consegue ler (geração e classificação com saída estruturada)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 75 min
- **Evidência:** validação de formato
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Texto livre serve para pessoas lerem, não para o app agir. Saída estruturada é a resposta em campos fixos, que o código lê sem adivinhar.

Numa só chamada, a IA gera (escreve a resposta) e classifica (escolhe uma categoria de uma lista). O app usa a categoria para decidir o que mostrar.

O servidor valida o formato antes de usar. Resposta fora do formato não quebra a tela.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Defina os campos da resposta do tutor:
   - `categoria`: `jornada` (sobre os registros), `curso` (sobre as lições) ou `fora_do_escopo`
   - `resposta`: texto para o usuário
   - `citacoes`: lista de fonte e trecho usado
2. Abra a pasta do Diário em **Manual**. Peça: "Na rota do tutor, use saída estruturada com os campos `categoria`, `resposta` e `citacoes`, conforme a documentação oficial." [VERIFICAR: nome do recurso e modelos que o suportam]
3. Peça: "Valide a resposta no servidor: campo faltando ou categoria fora da lista é erro. Em erro, tente uma vez de novo; se falhar, mostre 'Não consegui responder agora' e registre o erro."
4. Peça: "Atualize o prompt para descrever os campos e salve como nova versão em `prompts/`."
5. Peça: "Crie um script que envia cada caso-ouro ao tutor, na conta de teste, e conta as respostas válidas."
   - E-mail e senha da conta de teste ficam no `.env.local`, nunca no código.
6. Peça: "Rode o script e mostre o resultado." Esperado: 20 de 20 com formato válido.
7. Confira os 4 casos fora do escopo: todos com `categoria` = `fora_do_escopo`.
8. Peça: "Faça um commit com a mensagem 'Adiciona saída estruturada ao tutor' e envie ao GitHub."

[LINK A CURAR: documentação oficial da Anthropic sobre saída estruturada]

## Prática

1. Defina os campos da resposta da sua feature: um de classificação e um de texto, no mínimo. Veja "Template de campos", na Referência desta lição.
2. Liste de 2 a 5 categorias possíveis, incluindo `fora_do_escopo`.
3. Abra a pasta do projeto em **Manual** e peça a saída estruturada na rota da sua feature.
4. Peça a validação no servidor, com uma nova tentativa e mensagem de erro amigável.
5. Atualize o prompt e salve como nova versão.
6. Peça o script que roda os 20 casos-ouro com a conta de teste e conta respostas com formato válido.
7. Peça para rodar o script. Se houver falhas, peça hipóteses ao Claude Code e corrija até 20 de 20.
8. Confira a categoria dos casos fora do escopo. Peça o commit e o envio ao GitHub.

## Checagem

Entrega: resultado do script mostrando 20 de 20 respostas com formato válido.

## Referência

**Termos**

- Saída estruturada: resposta da IA em campos fixos, com nome e tipo definidos
- JSON: formato de texto com campos nomeados, o mais usado para saída estruturada
- Geração: a IA escreve um texto novo
- Classificação: a IA escolhe uma categoria de uma lista fechada
- Validação de formato: conferência, no servidor, de que todos os campos vieram certos
- Script: programa curto que executa uma sequência de passos sozinho
- Caso-ouro: pergunta com resposta esperada e critério de aprovação (lição A2 da T4)
- Rota do tutor: endereço do app que chama a API no servidor (lição A4 da T4)
- `.env.local`: arquivo de segredos que fica só no seu computador (lição A4 da T4)

**Template de campos**

```json
{
  "categoria": "jornada | curso | fora_do_escopo",
  "resposta": "texto",
  "citacoes": [{ "fonte": "id do documento", "trecho": "texto citado" }]
}
```

**Pedidos ao Claude Code**

- "Peça à API saída estruturada com os campos [lista], usando o recurso da documentação oficial."
- "Valide a resposta no servidor; em erro, tente uma vez e depois mostre uma mensagem amigável."
- "Crie um script que roda as entradas de `evals/casos-ouro.csv` e conta respostas com formato válido."

**Boas práticas**

- Lista de categorias fechada e curta
- Sempre uma categoria para "fora do escopo"
- Nunca mostrar ao usuário um campo que não passou na validação
