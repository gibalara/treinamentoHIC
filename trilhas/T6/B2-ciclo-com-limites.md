# B2 · Um agente que para antes de sair do controle (ciclo com limites de passos, custo e tempo)

- **Trilha:** T6 · Autonomia
- **Tempo:** 90 min
- **Evidência:** parada por limite
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O agente (programa em que a IA escolhe passos e usa ferramentas) trabalha em ciclo. O modelo pede uma ferramenta, recebe o resultado e decide o próximo passo.

Sem limite, um erro vira repetição sem fim, conta alta e execução que não termina. Três limites param o ciclo: passos, custo e tempo.

Ao atingir um limite, o agente para e registra o motivo e o que já fez. "Limites ativos" é eliminatório no marco da T6.

## Demonstração

Exemplo: o ciclo do agente semanal do Diário de Bordo.

1. Peça ao Claude Code: "Implemente o ciclo do agente semanal no servidor, com a API Anthropic. Use as ferramentas do SPEC.md."
2. Peça: "Adicione limites de passos, custo e tempo, lidos de variáveis de ambiente. Ao atingir um, pare e informe o motivo."
3. Peça: "Configure o limite de passos em 2, só para teste."
4. Peça: "Rode o agente semanal agora na organização Turma Teste." Turma Teste tem só dados fictícios.
5. Confira o resultado: execução parada por "limite de passos", com a lista do que foi feito antes.
6. Repita com custo muito baixo (exemplo: US$ 0,001). Confira a parada por "limite de custo".
7. Repita com tempo muito baixo (exemplo: 5 segundos). Confira a parada por "limite de tempo".
8. Volte os limites a valores altos. Peça: "Rode 3 execuções e mostre passos, custo e tempo de cada uma."
9. Defina os valores de produção com folga sobre o maior valor observado (veja "Valores de produção", na Referência).
10. Peça um commit (versão salva no git).

## Prática

1. Abra seu projeto no Claude Code.
2. Peça o ciclo do agente no servidor, com as ferramentas da lição B1 da T6.
3. Peça os três limites em variáveis de ambiente, com parada e motivo.
4. Teste cada limite com valor baixo, como nos passos 3 a 7 da Demonstração. Use uma organização com dados fictícios.
5. Tire um print de cada parada com o motivo.
6. Peça 3 execuções normais com passos, custo e tempo. Defina os valores de produção.
7. Registre os valores na seção do agente do `SPEC.md`, criada na lição A3 da T6.
8. Cadastre as mesmas variáveis de ambiente na Vercel, como na T2. [VERIFICAR NA INTERFACE]
9. Peça um commit.

## Checagem

Entrega: prints das três paradas (passos, custo, tempo), com o motivo visível, e os valores de produção no `SPEC.md`.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Ferramenta (tool): função do produto que o agente pode chamar
- Ciclo: modelo pede ferramenta → produto executa → modelo lê o resultado → decide de novo
- Modelo: a IA da API Anthropic que decide os passos do agente
- Passo: uma volta do ciclo
- Execução: uma rodada completa do agente, do início à parada
- Variável de ambiente: configuração guardada fora do código, como as chaves (T2)
- Vercel: serviço que publica o produto na internet (T2)
- Servidor: parte do produto que roda fora do navegador do usuário

**Limites**

| Limite | Mede | Protege contra |
| --- | --- | --- |
| Passos | Voltas do ciclo | Repetição sem fim |
| Custo | Gasto com a API na execução | Conta alta |
| Tempo | Duração da execução | Execução que não termina |

**Valores de produção**

- Base: 3 execuções normais em teste
- Valor: folga sobre o maior observado [LACUNA: a ementa não define valores ou folga de referência]
- Revisar quando o volume de dados mudar

**Onde ver a parada**

- Agora: no resultado mostrado pelo Claude Code
- A partir da lição B4 da T6: no registro de execuções do painel

**Erros comuns**

- Limite só no prompt (instrução ao modelo, "pare após 5 passos"): o limite tem de estar no código
- Testar limite só com valor de produção: a parada nunca acontece no teste
