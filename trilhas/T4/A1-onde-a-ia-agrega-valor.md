# A1 · Onde a IA agrega valor

- **Trilha:** T4 · Produto com IA
- **Tempo:** 45 min
- **Evidência:** `SPEC.md` atualizado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

IA no produto custa a cada uso, erra e exige proteção. Só vale onde entrega o que uma regra fixa não entrega.

Nos primeiros 15 minutos, você vê a IA responder sobre os documentos do seu projeto, citando a fonte. Depois escolhe a tarefa de IA do seu produto.

A escolha errada custa a trilha inteira. Testes, proteções e custo da T4 partem dessa decisão.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada, construído na T2a) vai ganhar uma feature de IA.

1. Abra a pasta do Diário no modo de código do Claude Desktop (ícone **</>**), no modo **Manual**. [VERIFICAR NA INTERFACE]
2. Peça: "Usando só os arquivos desta pasta, responda: quais telas o app tem? Cite arquivo e seção de cada informação."
3. Abra dois arquivos citados e confira se o trecho está lá. Isso é RAG no degrau 1: a IA responde com base nos documentos entregues a ela.
4. Liste três candidatas a tarefa de IA no Diário:
   - Tutor que responde dúvidas com base nos registros e no conteúdo do curso, com citação
   - Classificação de cada trava registrada por tipo
   - Resumo semanal da jornada
5. Aplique a cada candidata os critérios de "Onde a IA agrega valor", na Referência desta lição.
6. Escolha o tutor: usa texto livre, depende dos documentos do produto e o erro é conferível pela citação.
7. Preencha a seção 6 do `SPEC.md`:
   - Tarefa de IA: tutor que responde dúvidas sobre a jornada e o curso, com citação
   - Base de conhecimento (RAG): registros do próprio usuário e lições do curso
   - Ação candidata a agente: análise semanal de travas com alerta ao gestor, com aprovação (T6)
8. Registre na seção 8: "[data] Tarefa de IA: tutor com citação. Motivo: atende os 5 critérios."
9. Peça: "Faça um commit com a mensagem 'Define tarefa de IA no SPEC.md'."

## Prática

1. Abra a pasta do seu projeto (o MVP da T2b) no modo de código, no modo **Manual**.
2. Faça a pergunta com citação sobre os documentos do projeto (veja "Pedidos ao Claude Code", na Referência).
3. Confira duas citações nos arquivos.
4. Liste três candidatas a tarefa de IA no seu produto.
5. Aplique os critérios e escolha uma.
6. Preencha a seção 6 do `SPEC.md` e registre a decisão na seção 8.
7. Peça o commit.

## Checagem

Entrega: `SPEC.md` com a seção 6 preenchida e a decisão registrada na seção 8, em commit no GitHub.

## Referência

**Termos**

- Feature: funcionalidade do produto
- RAG: a IA recebe trechos dos seus documentos e responde com base neles; tem três degraus (lições B2 a B4 da T4)
- `SPEC.md`: especificação do produto, criada na lição 1.6 da T1
- Commit: ponto salvo de versão do projeto (lição 0.5 da T0)
- Modo Manual: o Claude Code pede aprovação antes de cada alteração (lição 0.4 da T0)

**Onde a IA agrega valor (5 critérios)**

| Critério | Pergunta |
| --- | --- |
| Linguagem | A entrada ou a saída é texto livre que uma regra fixa não resolve? |
| Dados próprios | A resposta depende de documentos do seu produto? |
| Erro tolerável | O usuário percebe e corrige um erro sem dano grave? |
| Verificável | Dá para escrever 20 casos com a resposta certa (lição A2 da T4)? |
| Frequência | O usuário principal precisa disso com frequência? |

- Evitar: cálculo exato (regra no código faz melhor)
- Evitar: decisão irreversível sem revisão humana
- Evitar: tarefa que depende de dados sensíveis reais

**Exemplos de tarefa de IA por nicho**

- Consultoria: responder dúvidas com base nos manuais do cliente, citando a seção
- Jurídico: resumir contrato e citar a cláusula de cada ponto
- RH: classificar pedidos por tipo e redigir a primeira resposta

**Pedidos ao Claude Code**

- Vitória de abertura: "Usando só os arquivos desta pasta, responda: [pergunta]. Cite arquivo e seção de cada informação."
- Salvar: "Faça um commit com a mensagem '[o que mudou]'."

**Seção 6 do `SPEC.md`**

```markdown
## 6. IA no produto
- Tarefa de IA:
- Base de conhecimento (RAG):
- Ação candidata a agente (com aprovação humana):
```
