# X9 · Publicar um case que prova o que você construiu (portfólio e build documentado)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 60 min
- **Evidência:** case publicado
- **Liberada após:** contínua
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Currículo diz o que você sabe. Case mostra o que você entregou, com provas.

Build documentado é registrar a construção enquanto ela acontece: decisões, erros e resultados. No fim, o case sai pronto desse registro, não da memória.

O case publicado é eliminatório no marco final. Ele também alimenta a distribuição (X5) e o pitch (X10), ambas desta trilha.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), publicado e com login.

1. Abra a pasta do Diário no Claude Code, no modo de código do Claude Desktop. O Claude Code é o Claude trabalhando nos arquivos da pasta (lição 0.4 da T0).
2. Peça: "Leia o SPEC.md, a seção 8 de decisões e o histórico de commits. Liste os 5 momentos mais importantes da construção." Commit é uma versão salva do projeto.
3. Escolha os momentos que mostram decisão, não só tarefa.
4. Peça: "Escreva o case nestas seções: [cole o modelo do case]. Cada afirmação aponta para uma evidência: URL, arquivo ou print. Salve em `case.md`." O modelo está no bloco Referência desta lição.
5. Confira cada evidência: o link abre? O print mostra o que a frase diz?
6. Retire dados pessoais de usuários reais. Use só dados fictícios ou anonimizados (sem nada que identifique a pessoa).
7. Publique o case. [LACUNA: canal de publicação padrão do curso não definido na ementa]
8. Peça: "Crie o arquivo `build-log.md` com uma linha por sessão: data, o que fiz, decisão, evidência."

## Prática

1. Abra a pasta do seu projeto no modo de código do Claude Desktop, em **Manual**. Nele, o Claude Code pede aprovação antes de cada mudança.
2. Faça o pedido do passo 8 da Demonstração desta lição. Peça também para registrar as sessões já feitas, a partir dos commits.
3. Ao final de cada sessão de trabalho, peça: "Acrescente a sessão de hoje ao build-log.md."
4. Ao fim de cada marco, faça o pedido do passo 4 da Demonstração desta lição para atualizar o `case.md`.
5. Confira cada evidência e retire dados pessoais.
6. Publique o case no canal escolhido (veja "Onde publicar", na Referência).
7. Peça um commit com o `case.md` e o `build-log.md` (versão salva do projeto, lição 0.5 da T0).

## Checagem

Entrega: link do case publicado, com pelo menos uma evidência verificável por seção.

## Referência

**Modelo do case**

- Problema: dor, quem sofre, como foi validada (T1)
- Posicionamento: o parágrafo da X1 desta trilha
- Solução: o que o produto faz + URL ou print
- Confiabilidade: testes, evals (testes de qualidade da IA) e isolamento entre clientes, com links
- Resultado: métrica de uso (X4 desta trilha) e primeiros usuários (X5)
- Decisões: 3 decisões e o motivo (seção 8 do `SPEC.md`)
- Próximo passo

**Modelo do build-log**

| Data | O que fiz | Decisão | Evidência |
| --- | --- | --- | --- |

**Onde publicar**

- Critério: abre sem login, você controla o conteúdo, aceita link e imagem
- Exemplos: página de README (apresentação) de um repositório público no GitHub; artigo no LinkedIn; página própria
- Nunca publique o repositório do produto com segredos (senhas e chaves de acesso); confira antes

**Cuidados**

- Nada de dados pessoais de usuários reais sem autorização
- Número sem fonte não entra
- Atualize o case a cada marco: ele cresce com as trilhas

**Pedidos ao Claude Code**

- "Liste os 5 momentos mais importantes da construção, a partir dos commits e da seção 8 do SPEC.md."
- "Escreva o case no modelo, com uma evidência por afirmação."
- "Acrescente a sessão de hoje ao build-log.md."
