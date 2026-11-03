# D3 · Agente em produção, com relatório de 1 página (fechamento do agente)

- **Trilha:** T6 · Autonomia
- **Tempo:** 30 min
- **Evidência:** relatório de 1 página
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Agente é um programa em que a IA escolhe passos e usa ferramentas. Ele só entra em produção com os cinco eliminatórios provados. Prova é evidência, não afirmação.

O relatório de 1 página reúne matriz, limites, aprovação, interruptor, evals e registros. Ele também alimenta o dossiê de governança (documento de riscos e controles do produto), na lição X7 da trilha Transversal.

Aqui o agendamento sai da organização de teste e passa a rodar em produção (versão usada por usuários reais).

## Demonstração

Exemplo: o fechamento do agente semanal do Diário de Bordo.

1. Confira os cinco eliminatórios com a tabela "Como verificar os eliminatórios", na Referência.
2. Para cada um, abra a evidência: fila, prints de parada, teste do interruptor, resultado dos evals, painel de execuções.
3. Só com os cinco atendidos, peça: "Ative o agendamento do agente semanal para as organizações reais." [VERIFICAR NA INTERFACE: agendador escolhido na lição C2 da T6]
4. Acompanhe a primeira execução de produção no registro de execuções e na fila.
5. Peça ao Claude Code: "Gere o relatório de 1 página do agente com o template abaixo. Use só evidências do repositório e do painel." Cole o template (veja "Template do relatório", na Referência).
6. Confira cada número do relatório contra a fonte.
7. Peça um commit (versão salva no git) do relatório.
8. Rode o Avaliador HIC (skill do curso que aplica a rubrica; lição 0.3 da T0) no repositório. [LACUNA: forma de entrega e execução do Avaliador HIC]

## Prática

1. Confira os cinco eliminatórios do seu agente (veja "Como verificar os eliminatórios", na Referência).
2. Corrija o que faltar na lição da coluna "Lição" dessa tabela antes de seguir.
3. Peça a ativação do agendamento em produção. Acompanhe a primeira execução no registro de execuções e na fila. [VERIFICAR NA INTERFACE]
4. Peça o relatório de 1 página com o pedido do passo 5 da Demonstração.
5. Confira cada número contra a fonte.
6. Peça um commit do relatório.
7. Rode o Avaliador HIC e corrija o que ele apontar.

## Checagem

Entrega: relatório de 1 página no repositório, com evidência para cada critério da rubrica do marco da T6.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Eliminatório: critério que reprova o marco se não for atendido
- Evals: testes que medem se a IA se comporta como esperado
- Avaliador HIC: skill do curso que lê as evidências e aplica a rubrica do marco (lição 0.3 da T0)
- Produção: versão do produto usada por usuários reais
- Rubrica do marco T6: arquivo `rubricas/T6.md` do curso
- Commit: versão salva no git

**Como verificar os eliminatórios**

| Eliminatório | Evidência | Como verificar | Lição |
| --- | --- | --- | --- |
| Efeito externo passa por aprovação humana | Fila + registros | 1 aprovação com envio, 1 rejeição sem envio | B3 da T6 |
| Limites ativos | Parada por limite | Paradas por passos, custo e tempo registradas | B2 da T6 |
| Interruptor de emergência | Teste | 4 testes de desligamento | B5 da T6 |
| Evals críticos a 100% | Script | Nível 2, maliciosos e acesso cruzado a 100% | D1 da T6 |
| Toda execução registrada | Painel | Execuções disparadas = execuções no painel | B4 da T6 |

**Não eliminatórios**

| Critério | Evidência | Lição |
| --- | --- | --- |
| Matriz de autonomia e checklist de segurança | Documentos | A2 e D2 da T6 |
| Agendamento sem duplicação | Registro | C2 da T6 |
| Decisão sobre multiagentes | `SPEC.md` | C1 da T6 |
| Canal conectado (opcional) e relatório | Registro + documento | C3 e D3 da T6 |

**Template do relatório**

```markdown
# Agente [nome] · Relatório de fechamento
- Objetivo e gatilho:
- Ações por nível (matriz):
- Limites de produção: passos [x], custo [x], tempo [x]
- Aprovação: aprovador, itens aprovados e rejeitados
- Interruptor: data do teste e tempo até a parada
- Evals: resultado por grupo; críticos [x]%
- Execuções em produção: total, por status, custo
- Multiagentes: decisão e motivo
- Canal: [conectado / não usado + motivo]
- Riscos abertos e próximos passos:
```

**Erros comuns**

- Ativar produção antes dos evals críticos a 100%
- Relatório com números sem fonte
