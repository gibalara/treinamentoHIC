# C3 · Conversar com o agente pelo canal que a equipe já usa (canais, opcional)

- **Trilha:** T6 · Autonomia
- **Tempo:** 45–60 min
- **Evidência:** conversa com usuário identificado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Lição opcional: faça se os seus usuários já vivem num canal de mensagens (chat corporativo, mensageiro ou e-mail).

O agente (programa em que a IA escolhe passos e usa ferramentas) é um só. Canais são portas de entrada, ligadas por um adaptador. Cada porta nova é um risco: alguém pode se passar pelo canal ou por um usuário.

Por isso, toda conexão exige cinco controles, listados na Referência. As regras das plataformas mudam com frequência; leia a documentação oficial antes de construir.

## Demonstração

Exemplo: o Diário de Bordo ligado ao canal de mensagens usado pela turma.

1. Escolha o canal com o critério da Referência.
2. Leia, na documentação oficial do canal, como verificar se uma mensagem veio mesmo dele.
3. Peça ao Claude Code: "Crie um adaptador para [canal] que chama o mesmo agente do Diário. Não crie outro agente."
4. Peça: "Verifique a autenticidade de cada mensagem recebida. Sem verificação, descarte e registre."
5. Peça: "Vincule a conta do canal a um usuário do Diário. Sem vínculo, responda só como fazer o vínculo."
6. Peça: "Guarde os segredos do canal em variáveis de ambiente, nunca no código."
7. Peça: "Aprovação pelo canal só para usuário vinculado com papel de aprovador, verificado no servidor."
8. Teste: com conta vinculada de aluno fictício, pergunte "quais são minhas travas da semana?". Confira a resposta só com dados dele.
9. Teste: com conta não vinculada, faça a mesma pergunta. Confira que nenhum dado aparece.
10. Teste: com a conta do aluno, tente aprovar um item da fila. Confira o bloqueio.
11. Confira no registro de execuções o usuário identificado em cada conversa. Peça um commit (versão salva no git).

[LINK A CURAR: documentação oficial do canal escolhido sobre verificação de autenticidade das mensagens]

## Prática

1. Decida se o canal faz sentido para o seu produto. Se não, registre o motivo na seção 8 do `SPEC.md` e pule.
2. Escolha o canal com o critério da Referência.
3. Leia a documentação oficial do canal sobre verificação de autenticidade. [VERIFICAR NA DOCUMENTAÇÃO OFICIAL DO CANAL]
4. Peça o adaptador com os cinco controles.
5. Faça os três testes da Demonstração numa organização de teste.
6. Tire print da conversa e do registro com o usuário identificado.
7. Peça um commit.

## Checagem

Entrega: print de uma conversa no canal com usuário identificado e do registro correspondente; ou o motivo de não usar canal, na seção 8 do `SPEC.md`.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Canal: meio de mensagens por onde o usuário fala com o agente
- Adaptador: peça que traduz a mensagem do canal para o agente e a resposta de volta
- Verificação de autenticidade: prova de que a mensagem veio mesmo do canal
- Vínculo de identidade: ligação entre a conta do canal e um usuário do produto
- Variável de ambiente: configuração guardada fora do código, como as chaves
- Servidor: parte do produto que roda fora do navegador do usuário

**Os cinco controles**

| Controle | Teste |
| --- | --- |
| Verificação de autenticidade | Mensagem sem verificação é descartada |
| Vínculo de identidade | Conta não vinculada não vê dados |
| Tradução da mensagem | Pergunta do canal chega ao agente e a resposta volta |
| Aprovação com verificação de papel | Papel sem permissão não aprova |
| Segredos protegidos | Nenhum segredo do canal no repositório |

**Critério de escolha do canal**

- Os usuários já usam o canal no dia a dia
- A documentação oficial explica a verificação de autenticidade
- Permite identificar o usuário de cada mensagem

**Regras**

- Um agente, vários adaptadores
- Ação de nível 2 continua na fila de aprovação, venha de onde vier

**Erros comuns**

- Criar um agente por canal
- Confiar no nome exibido no canal como identidade
