# B5 · Desligar o agente na hora (interruptor de emergência)

- **Trilha:** T6 · Autonomia
- **Tempo:** 30 min
- **Evidência:** teste de desligamento
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Agente é um programa em que a IA escolhe passos e usa ferramentas. Quando ele erra em produção, você precisa pará-lo na hora. Sem deploy (publicação de nova versão) e sem depender de ninguém.

O interruptor de emergência é uma chave no painel. Desligado, bloqueia execuções novas, interrompe as em andamento no próximo passo e segura envios da fila.

É eliminatório no marco da T6.

## Demonstração

Exemplo: o interruptor do agente semanal do Diário de Bordo.

1. Peça ao Claude Code: "Crie um interruptor do agente no painel administrativo, só para admin. O estado fica no banco de dados, não no código."
2. Peça: "Antes de cada passo, o ciclo confere o interruptor. Desligado, a execução para com status 'bloqueada pelo interruptor'."
3. Peça: "Com o interruptor desligado, nenhuma execução começa e nenhum item da fila é enviado."
4. Peça: "Crie um modo de teste com pausa de 10 segundos entre passos." Assim dá tempo de desligar no meio.
5. Teste 1: desligue. Peça: "Rode o agente semanal agora na Turma Teste." Confira o registro "bloqueada pelo interruptor" e nada feito.
6. Teste 2: ligue. Peça uma execução com o modo de teste e desligue no meio. Confira a parada no passo seguinte.
7. Teste 3: com o interruptor desligado, aprove um item da fila. Confira que nada foi enviado.
8. Teste 4: entre com uma conta sem papel de admin. Confira que o interruptor não pode ser mudado.
9. Anote o tempo até a parada: hora do clique contra o fim no registro de execuções.
10. Religue o interruptor e peça um commit (versão salva no git).

## Prática

1. Abra seu projeto no Claude Code.
2. Peça o interruptor no seu painel administrativo, com estado no banco e acesso só de admin.
3. Peça a checagem antes de cada passo e o bloqueio dos envios da fila.
4. Faça os 4 testes (veja "Como verificar este eliminatório", na Referência) numa organização com dados fictícios. Use o modo de teste com pausa do passo 4 da Demonstração.
5. Anote o tempo entre o clique e a parada.
6. Tire prints dos registros e peça um commit.

## Checagem

Entrega: prints dos 4 testes de desligamento, com o status no registro de execuções e o tempo até a parada.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Ferramenta (tool): função do produto que o agente pode chamar
- Interruptor de emergência: chave no painel que bloqueia toda ação do agente na hora
- Deploy: publicação de uma nova versão do produto
- Passo: uma volta do ciclo do agente (lição B2 da T6)
- Registro de execuções: histórico de cada rodada do agente (lição B4 da T6)

**Como verificar este eliminatório**

| Teste | Resultado esperado |
| --- | --- |
| Desligado, disparar execução | "Bloqueada pelo interruptor"; nada feito |
| Desligar no meio da execução | Para no passo seguinte |
| Desligado, aprovar item da fila | Nada enviado |
| Conta sem papel de admin | Não muda o interruptor |

**Erros comuns**

- Interruptor como variável de ambiente (configuração fora do código): exige novo deploy para mudar
- Checar só no início da execução: a execução em andamento continua
- Esquecer os envios já aprovados na fila
