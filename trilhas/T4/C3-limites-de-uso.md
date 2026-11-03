# C3 · Limites de uso por usuário

- **Trilha:** T4 · Produto com IA
- **Tempo:** 45 min
- **Evidência:** teste de limite
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Cada pergunta à IA custa. Sem limite, um usuário, um robô ou uma conta invadida esgota seu orçamento numa noite.

O limite é contado no servidor, por usuário logado, e guardado no banco. Contado no navegador, qualquer um contorna.

Limite de uso por usuário é eliminatório no marco da T4.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Defina um limite provisório de perguntas por usuário por dia. A lição D5 da T4 recalcula pelo custo. [LACUNA: valor de referência não definido na ementa]
2. Peça ao Claude Code: "Crie no banco a contagem de perguntas ao tutor por usuário por dia, com RLS."
3. Peça: "Na rota do tutor, antes de chamar a IA, recuse quem passou do limite. Mostre 'Você atingiu o limite de perguntas de hoje' e o horário de liberação."
4. Peça: "Deixe o limite numa configuração única, fácil de mudar."
5. Mude o limite para 3 e faça 4 perguntas com a conta de teste.
6. Confira: a quarta é recusada e o registro de chamadas não mostra tokens gastos nela.
7. Entre com uma segunda conta de teste e pergunte. O limite de uma conta não afeta a outra.
8. No Console da Anthropic, confira se a conta tem limite de gasto mensal. Se não tiver, defina. [VERIFICAR NA INTERFACE]
9. Volte o limite ao valor provisório.
10. Peça: "Faça um commit com a mensagem 'Adiciona limite diário de perguntas por usuário'."

## Prática

1. Defina um limite provisório de uso por usuário para a sua feature.
2. Peça a contagem por usuário no banco, com RLS.
3. Peça a recusa no servidor acima do limite, com mensagem clara e horário de liberação.
4. Peça o limite numa configuração única.
5. Teste com limite 3: a quarta chamada é recusada sem gastar tokens.
6. Teste com uma segunda conta.
7. Confira o limite de gasto mensal no Console.
8. Volte o limite ao valor provisório e peça o commit.

## Checagem

Entrega: print ou registro do teste mostrando a quarta chamada recusada sem tokens gastos e a segunda conta funcionando.

## Referência

**Termos**

- Limite de uso: número máximo de chamadas à IA por usuário num período
- Servidor: parte do app que roda na Vercel, fora do navegador do usuário
- RLS: regra no banco que limita quais linhas cada usuário vê (lição 2a.5 da T2a)
- Token: pedaço de palavra; a API conta e cobra por tokens
- Limite de gasto mensal: teto de cobrança da conta de API, definido no Console da Anthropic
- Registro de chamadas: tabela com os dados de cada chamada à IA (lição B5 da T4)

**Duas camadas de limite**

| Camada | Onde | Protege contra |
| --- | --- | --- |
| Por usuário | Servidor e banco do seu app | Um usuário consumindo o orçamento de todos |
| Conta de API | Console da Anthropic | Gasto total fora de controle |

**Pedidos ao Claude Code**

- "Crie a contagem de chamadas de [feature] por usuário por [período], com RLS."
- "Antes de chamar a IA, recuse quem passou do limite, com mensagem e horário de liberação."
- "Deixe o limite numa configuração única."

**Erros comuns**

- Contar no navegador: o usuário apaga a contagem
- Contar depois da chamada: a IA já foi paga
- Mesma contagem para todos os usuários: um esgota o limite de todos
