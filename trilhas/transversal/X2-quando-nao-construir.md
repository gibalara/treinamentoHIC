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

1. Ela abre, no Claude Code (o Claude trabalhando na pasta do projeto, lição 0.4 da T0), a pasta do projeto.
2. Pede a lista de funcionalidades da seção 4 do `SPEC.md`. Ele é a especificação do produto (lição 1.6 da T1).
3. Pede: "Monte a matriz comprar / configurar / construir da Referência para essas funcionalidades. Justifique cada linha em uma frase."
4. Confere cada linha com a pergunta "isto é o que me diferencia?".
5. Resultado:

   | Funcionalidade | Decisão | Motivo |
   | --- | --- | --- |
   | Comparar propostas e apontar a melhor | Construir | É o núcleo e o diferencial |
   | Login dos compradores | Configurar | Já vem no Supabase (banco e login, usado a partir da T2) |
   | Avisar o fornecedor vencedor por e-mail | Configurar | Fluxo entre sistemas; cabe no n8n (automações, T5) |
   | Assinatura do contrato | Comprar | Existe pronto; não diferencia |

6. Pede: "Registre essas decisões na seção 8 do SPEC.md, com data e motivo."
7. Pede um commit (versão salva do projeto, lição 0.5 da T0).

## Prática

1. Abra no Claude Code a pasta do seu projeto.
2. Peça a lista de funcionalidades da seção 4 do seu `SPEC.md`.
3. Peça a matriz comprar / configurar / construir, com motivo por linha.
4. Revise cada linha com as perguntas da Referência.
5. Se nada ficou em "construir", reveja o projeto com o checklist de elegibilidade da lição 1.9 da T1.
6. Peça o registro das decisões na seção 8 do `SPEC.md`.
7. Salve a matriz em `matriz-decisao.md` e peça um commit.

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

- "Monte a matriz comprar / configurar / construir para as funcionalidades da seção 4 do SPEC.md."
- "Registre estas decisões na seção 8 do SPEC.md, com data e motivo."
