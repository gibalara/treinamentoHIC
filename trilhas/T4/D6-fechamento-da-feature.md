# D6 · A feature de IA comprovada em 1 página (fechamento da feature)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 30 min
- **Evidência:** relatório de 1 página
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O marco pede evidência, não afirmação. O relatório de 1 página reúne os números da feature: evals, segurança, modelo e custo.

Serve ao Avaliador HIC, à TI de um cliente e ao seu pitch.

Cada número aponta para o arquivo que o comprova.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Abra a pasta do Diário em **Manual**. Peça: "Rode o script de evals completo e guarde o resultado em `evals/resultados/`."
2. Peça: "Crie `docs/relatorio-feature-ia.md` com o template da Referência. Preencha com os dados do repositório e indique o arquivo de origem de cada número."
3. Abra cada arquivo de origem e confira cada número. Número sem origem sai do relatório.
4. Preencha "Riscos conhecidos": 100% nos casos críticos é o mínimo para seguir, não garantia de segurança.
5. Confira os eliminatórios do marco, item a item (tabela "Eliminatórios do marco T4", na Referência desta lição).
6. Rode o Avaliador HIC, a skill que confere as evidências contra a rubrica (lição 0.3 da T0). [LACUNA: Avaliador HIC ainda não construído; forma de rodar não definida]
7. Peça: "Faça um commit com a mensagem 'Adiciona relatório da feature de IA' e envie ao GitHub."

## Prática

1. Em **Manual**, peça para rodar os evals completos da sua feature e guardar o resultado em `evals/resultados/`.
2. Peça o relatório com o "Template do relatório" (Referência desta lição), indicando a origem de cada número.
3. Confira cada número no arquivo de origem. Número sem origem sai.
4. Preencha os riscos conhecidos e os próximos casos a acrescentar.
5. Confira os eliminatórios do marco.
6. Rode o Avaliador HIC e corrija o que ele apontar.
7. Peça o commit e o envio ao GitHub.

## Checagem

Entrega: `docs/relatorio-feature-ia.md` com até 1 página, cada número ligado ao arquivo de origem.

## Referência

**Termos**

- Eval: prova que mede se a IA acerta, com respostas certas definidas antes (lição A2 da T4)
- Casos críticos: fora do escopo e maliciosos, que exigem 100%
- Avaliador HIC: skill que aplica a rubrica do marco às evidências do repositório (lição 0.3 da T0)
- Rubrica: lista de critérios do marco, com evidência e se é eliminatório
- Juiz: chamada de IA que dá a nota das respostas (lição D1 da T4)

**Template do relatório**

```markdown
# [Feature] — relatório da feature de IA

- Tarefa de IA e usuário: (SPEC.md, seção 6)
- Degrau do RAG e motivo: (SPEC.md, seção 8)
- Evals: meta [M]%, resultado [X]%; críticos [Y]% (evals/resultados/)
- Juiz: concordância [C]% (lição D1 da T4)
- Principais categorias de falha e casos novos: (evals/analise-de-erros.md)
- Modelo e motivo: (tabela comparativa, lição D3 da T4)
- Latência média:
- Custo por usuário: típico [A], pior caso [B] (docs/custo-por-usuario.csv)
- Limite de uso por usuário:
- Proteções: guardrails de entrada e de saída, citação verificada, chave só no servidor
- Riscos conhecidos:
- Próximos passos:
```

**Eliminatórios do marco T4**

| Critério | Evidência |
| --- | --- |
| Chave da API apenas no servidor | Repositório + revisão (lição A4 da T4) |
| Evals atingindo a meta | Resultado do script (lição D1 da T4) |
| Maliciosos e fora do escopo: 100% | Resultado dos evals (lições C1 e C2 da T4) |
| Respostas com citação da fonte | Casos verificados (lição B5 da T4) |
| Limite de uso por usuário | Teste (lição C3 da T4) |

- Rubrica completa: `rubricas/T4.md`
