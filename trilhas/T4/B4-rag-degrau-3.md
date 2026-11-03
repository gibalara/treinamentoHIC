# B4 · Busca por significado (RAG, degrau 3, só se necessário)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 2–3 h
- **Evidência:** decisão de degrau justificada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Busca por palavra-chave falha quando o usuário usa outras palavras: "desfazer" não acha "voltar versão".

Embedding é uma lista de números que representa o significado de um trecho. Trechos de sentido parecido ficam com números próximos. O pgvector guarda esses números no Supabase e acha os mais próximos da pergunta.

É o degrau mais caro de construir e manter. Só entra se o degrau 2 não atingir a meta nos casos-ouro.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra `evals/casos-ouro.csv` e confirme na coluna `degrau2` que o resultado ficou abaixo da meta.
2. Confirme que as falhas são de seleção por palavras diferentes. Ex.: pergunta com "desfazer", lição com "voltar versão".
3. Escolha o provedor de embeddings. [LACUNA: provedor de embeddings não definido na ementa; a pilha padrão não inclui um]
4. Gere a chave do provedor e guarde só em variável de ambiente, como a chave da API Anthropic.
5. Peça ao Claude Code: "Ative o pgvector no Supabase e crie a tabela de trechos: texto, documento de origem, usuário dono e embedding. Aplique RLS por usuário." [VERIFICAR NA INTERFACE: ativação da extensão no Supabase]
6. Peça: "Divida as lições em trechos, um por seção, e cada registro em um trecho. Gere e salve os embeddings. Gere de novo quando um registro mudar."
7. Peça: "Na rota do tutor, busque os trechos mais próximos da pergunta, só entre as lições e os registros do usuário logado."
8. Rode os 20 casos-ouro com a conta de teste e marque a coluna nova `degrau3`.
9. Peça: "Compare os degraus 2 e 3: acerto, tokens médios, latência média e custo dos embeddings."
10. Decida: o degrau 3 só fica se atingir a meta. Registre a decisão e os números na seção 8 do `SPEC.md`.
11. Peça: "Faça um commit com a mensagem 'Adiciona busca por significado ao tutor (RAG degrau 3)'."

[LINK A CURAR: documentação oficial do Supabase sobre pgvector e busca por similaridade]

## Prática

1. Confira na planilha em que degrau sua feature atingiu a meta.
2. Se atingiu no degrau 1 ou 2, não construa o degrau 3. Registre no `SPEC.md` a decisão com os percentuais de cada degrau testado.
3. Se não atingiu, confirme que as falhas são de seleção por palavras diferentes.
4. Escolha o provedor de embeddings e guarde a chave só em variável de ambiente.
5. Peça o pgvector, a tabela de trechos com RLS e a divisão dos documentos em trechos.
6. Peça a busca por significado na rota da sua feature, restrita aos dados do usuário logado.
7. Rode os 20 casos-ouro e marque a coluna `degrau3`.
8. Peça a comparação entre os degraus, registre a decisão no `SPEC.md` e peça o commit.

## Checagem

Entrega: decisão de degrau registrada na seção 8 do `SPEC.md`, com o percentual de cada degrau testado e o motivo da escolha.

## Referência

**Termos**

- RAG: a IA recebe trechos dos seus documentos e responde com base neles
- Embedding: lista de números que representa o significado de um texto
- Busca por significado: acha trechos de sentido parecido, mesmo com palavras diferentes
- pgvector: extensão do Supabase que guarda embeddings e busca os mais próximos
- Trecho (chunk): pedaço de um documento guardado e buscado separadamente
- Provedor de embeddings: serviço que transforma texto em embedding, cobrado por uso
- RLS: regra no banco que limita quais linhas cada usuário vê (lição 2a.5 da T2a)
- Latência: tempo entre o envio da pergunta e a chegada da resposta

**Quando subir para o degrau 3**

- Degrau 2 abaixo da meta nos casos-ouro
- Falhas de seleção por sinônimos ou outras palavras
- Ajustes de filtro e palavra-chave já tentados

**Custos novos do degrau 3**

- Geração de embeddings de todos os documentos e a cada mudança
- Segunda chave e segundo fornecedor para proteger e monitorar
- Tabela de trechos que precisa respeitar o isolamento entre usuários

**Template de decisão (seção 8 do `SPEC.md`)**

```markdown
- [data] Degrau do RAG: [1, 2 ou 3]. Resultados: degrau 1 [X]%, degrau 2 [Y]%, degrau 3 [Z]%. Meta [M]%. Motivo: [por que este degrau].
```

**Pedidos ao Claude Code**

- "Ative o pgvector e crie a tabela de trechos com RLS por usuário."
- "Divida [documentos] em trechos por [seção ou registro] e gere os embeddings."
- "Busque os trechos mais próximos da pergunta, só entre os dados do usuário logado."

**Lacuna**

- [LACUNA: provedor de embeddings de referência e custo, não definidos na ementa]
