# B3 · Nada sai do produto sem aceite humano (aprovação humana na fila do painel)

- **Trilha:** T6 · Autonomia
- **Tempo:** 75 min
- **Evidência:** aprovação e rejeição registradas
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Toda ação com efeito externo (envio, dado de cliente, cobrança) começa no nível 2: o agente prepara, um humano decide. Agente é o programa em que a IA escolhe passos e usa ferramentas.

A aprovação fica no código, não no prompt (instrução escrita para o modelo). Um texto malicioso convence o modelo, mas não muda o código.

Por isso a ferramenta só cria o item pendente; quem envia é o produto, depois do aceite. É eliminatório no marco da T6.

## Demonstração

Exemplo: o alerta ao gestor do Diário de Bordo, ação de nível 2.

1. Peça ao Claude Code: "Crie a fila de aprovação no painel administrativo. Cada item tem ação, conteúdo, motivo do agente, execução de origem, status e decisor."
2. Peça: "Só o admin da organização vê e decide os itens. Verifique o papel no servidor."
3. Peça: "Ao aprovar, o produto envia e registra quem aprovou e quando. Ao rejeitar, registra quem rejeitou e o motivo, sem envio."
4. Rode o agente na organização Turma Teste, com dados fictícios.
5. Confira no painel: o alerta aparece como "pendente".
6. Confira na caixa de e-mail de teste do gestor fictício: nada chegou.
7. Aprove o item. Confira o e-mail na caixa de teste e o registro com aprovador e horário.
8. Rode de novo e rejeite o novo item, com motivo. Confira: nada enviado e rejeição registrada.
9. Entre com uma conta de aluno e tente aprovar um item. Confira o bloqueio.
10. Peça: "Crie um teste que tenta enviar um item pendente sem aprovação. Ele deve falhar." Rode e confira.
11. Peça um commit (versão salva no git).

## Prática

1. Abra seu projeto no Claude Code.
2. Peça a fila de aprovação no seu painel administrativo, com os campos da Demonstração.
3. Restrinja a decisão ao papel aprovador definido na lição A2 da T6, verificado no servidor.
4. Ligue a ferramenta de nível 2 da lição B1 da T6 à fila.
5. Faça os cinco testes de "Como verificar este eliminatório", na Referência.
6. Tire prints da fila e dos registros de 1 aprovação e 1 rejeição.
7. Peça um commit.

## Checagem

Entrega: prints da fila e dos registros de 1 aprovação (com envio) e 1 rejeição (sem envio), com decisor, horário e motivo.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Efeito externo: ação que sai do produto, como envio, dado de cliente ou cobrança
- Nível 2: o agente prepara e espera aprovação (matriz da lição A2 da T6)
- Fila de aprovação: lista de ações preparadas pelo agente, esperando aceite ou recusa
- Prompt: instrução escrita para o modelo
- Painel administrativo: tela de gestão criada na lição B2 da T5
- Servidor: parte do produto que roda fora do navegador do usuário
- Caixa de teste: endereço de e-mail seu, usado só como destino dos usuários fictícios

**Campos do item da fila**

- Ação, conteúdo, motivo do agente, execução de origem
- Status: pendente, aprovado, rejeitado
- Decisor, horário, motivo da rejeição

**Como verificar este eliminatório**

| Teste | Resultado esperado |
| --- | --- |
| Rodar o agente | Item pendente; nada enviado |
| Aprovar | Envio feito; registro com decisor e horário |
| Rejeitar | Nada enviado; registro com decisor e motivo |
| Decidir com papel errado | Bloqueado no servidor |
| Enviar item pendente sem aprovação | Falha |

**Erros comuns**

- Pedir aprovação no prompt ("só envie se aprovado"): o modelo pode ser convencido
- Ferramenta do agente com acesso ao envio
- Testar envio com e-mail real de cliente: use caixa de teste e dados fictícios
