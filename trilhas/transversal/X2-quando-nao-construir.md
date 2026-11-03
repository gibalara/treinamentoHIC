# X2 · Decidir o que comprar, configurar ou construir (quando não construir)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 45 min
- **Evidência:** matriz comprar / configurar / construir
- **Liberada após:** T1
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Com o Claude Code, construir ficou barato. Manter não: cada parte construída vira código que você opera sozinho.

Antes da T2, decida parte a parte. Comprar é assinar algo pronto. Configurar é montar com ferramentas existentes, sem código próprio (ex.: conectores, lição 0.1 da T0). Construir é código feito pelo Claude Code.

Regra do curso: código para o núcleo do produto, permissões, dados sensíveis e cobrança. O resto, compre ou configure.

## Demonstração

Exemplo: uma gerente de compras sênior especificou na T1 um app para comparar propostas de fornecedores.

1. Ela abre a pasta do projeto no Claude Code, no modo de código do Claude Desktop. O Claude Code é o Claude trabalhando nos arquivos da pasta (lição 0.4 da T0).
2. Pede a lista de funcionalidades da seção 4 (Escopo do MVP) do `SPEC.md`. Ele é a especificação do produto (lição 1.6 da T1).
3. Pede: "Monte uma tabela com as colunas Funcionalidade, Decisão (comprar, configurar ou construir) e Motivo. Justifique cada linha em uma frase."
4. Confere cada linha com a pergunta "isto é o que me diferencia?".
5. Resultado:

   | Funcionalidade | Decisão | Motivo |
   | --- | --- | --- |
   | Comparar propostas e apontar a melhor | Construir | É o núcleo e o diferencial |
   | Login dos compradores | Configurar | Já vem pronto no Supabase (banco e login, T2); as permissões são construídas |
   | Avisar o fornecedor vencedor por e-mail | Configurar | Fluxo entre sistemas; cabe no n8n (automações, T5) |
   | Assinatura do contrato | Comprar | Existe pronto; não diferencia |

6. Pede: "Registre essas decisões na seção 8 do SPEC.md, com data e motivo." A seção 8 é Decisões tomadas.
7. Pede um commit (versão salva do projeto, lição 0.5 da T0).

## Prática

1. Abra a pasta do seu projeto no modo de código do Claude Desktop, em **Manual**. Nele, o Claude Code pede aprovação antes de cada mudança.
2. Peça a lista de funcionalidades da seção 4 (Escopo do MVP) do seu `SPEC.md`.
3. Peça a matriz com o pedido do passo 3 da Demonstração desta lição.
4. Revise cada linha com as "Perguntas por linha", no bloco Referência desta lição.
5. Se nada ficou em "construir", reveja o projeto com o checklist de elegibilidade da lição 1.9 da T1.
6. Peça o registro das decisões na seção 8 (Decisões tomadas) do `SPEC.md`, com data e motivo.
7. Peça ao Claude Code para salvar a matriz em `matriz-decisao.md`, na pasta do projeto.
8. Peça um commit (versão salva do projeto, lição 0.5 da T0).

## Checagem

Entrega: `matriz-decisao.md` com todas as funcionalidades do `SPEC.md`, decisão e motivo por linha, e a seção 8 atualizada.

## Referência

**Matriz**

| Funcionalidade | Comprar | Configurar | Construir | Motivo |
| --- | --- | --- | --- | --- |
| [da seção 4] | | | | [uma frase] |

**Perguntas por linha**

- É o núcleo ou o diferencial do produto? Então construir.
- Envolve permissões, dados sensíveis ou cobrança? Então construir.
- É fluxo de negócio entre sistemas, agendado ou por evento? Então configurar no n8n.
- Existe pronto e não diferencia? Então comprar.
- Quem mantém isso daqui a 6 meses? Se a resposta é "eu, sozinho", pese o custo.

**Termos**

- Comprar: assinar um serviço pronto
- Configurar: montar com ferramentas existentes, sem código próprio
- Construir: código gerado pelo Claude Code no seu repositório (pasta com versões guardadas pelo git)
- n8n: ferramenta de automação entre sistemas, ensinada na T5

**Pedidos ao Claude Code**

- "Para as funcionalidades da seção 4 do SPEC.md, monte a tabela: Funcionalidade, Decisão e Motivo."
- "Salve a matriz em matriz-decisao.md e faça um commit com a mensagem 'Adiciona matriz de decisão'."
- "Registre estas decisões na seção 8 do SPEC.md, com data e motivo."
