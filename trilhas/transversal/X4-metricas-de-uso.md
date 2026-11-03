# X4 · Ver no painel se o produto cumpre a promessa (métricas de uso)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 60 min
- **Evidência:** métrica de sucesso da T1 instrumentada e visível no painel
- **Liberada após:** T2b
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Na T1 você definiu a métrica principal de sucesso. Com o MVP no ar, ela precisa sair do papel.

Instrumentar é fazer o produto registrar as ações que alimentam a métrica. Sem isso, toda mudança no produto é opinião.

Com a métrica no painel, você testa uma mudança e vê o efeito. Mudanças contraintuitivas podem funcionar, e só o número mostra.

## Demonstração

**Case.** Fitfolio, app de treino e nutrição. [VERIFICAR: autorização do fundador antes de publicar]

1. Segundo o fundador, ele mudou o onboarding (primeiros passos do usuário no app) de 5 para mais de 20 passos.
2. Segundo ele, com a mudança veio o recorde de assinantes em um dia: 27.
3. A intuição diria o contrário. Por isso a métrica precisa estar no painel antes de você mudar o produto.

**Exemplo resolvido.** O Diário de Bordo (app de registro da jornada do curso), com login, registros e painel.

4. Abra a pasta do Diário no Claude Code, no modo de código do Claude Desktop. O Claude Code é o Claude trabalhando nos arquivos da pasta (lição 0.4 da T0).
5. Leia a métrica na seção 3 (Proposta de valor) do `SPEC.md` (especificação do produto, lição 1.6 da T1). Exemplo: lições concluídas até a data-alvo, por semana. [LACUNA: métrica principal do `SPEC.md` do Diário de Bordo ainda não definida]
6. Troque para o modo **Plano**, no seletor abaixo da caixa de mensagem. [VERIFICAR NA INTERFACE] Nele, o Claude Code planeja antes de alterar (lição 2a.1 da T2).
7. Evento é o registro de uma ação do usuário, com data e hora. Peça: "Quais eventos calculam esta métrica? Proponha a tabela de eventos, sem alterar nada."
8. Confira a proposta: o evento "lição concluída" já existe nos registros; falta guardar a data-alvo.
9. Troque para o modo **Manual** e peça: "Implemente os eventos e mostre a métrica no painel." Aprove cada mudança.
10. Peça: "Rode o app no meu computador e me diga o endereço" (lição 2a.3 da T2).
11. Entre com uma conta de teste, conclua uma lição e confira se o número mudou no painel.
12. Peça um commit (versão salva do projeto, lição 0.5 da T0) e o envio ao GitHub. A Vercel publica a versão nova (lição 2b.7 da T2).

## Prática

1. Abra a pasta do seu MVP no modo de código do Claude Desktop.
2. Copie a métrica principal da seção 3 (Proposta de valor) do seu `SPEC.md`. Se estiver vaga, reescreva com o "Modelo de métrica", no bloco Referência desta lição.
3. No modo **Plano**, faça o pedido do passo 7 da Demonstração desta lição.
4. Confira se cada evento guarda só o necessário (veja "Erros comuns", na Referência desta lição).
5. Troque para o modo **Manual**. Peça para incluir os eventos no `mapa-de-dados.md` (lição X3 desta trilha).
6. Peça a implementação dos eventos e a métrica no painel. Se o MVP não tem painel, peça uma tela simples só com ela.
7. Rode o app no seu computador, faça a ação com uma conta de teste e confira se o número mudou.
8. Peça um commit e o envio ao GitHub; confira a métrica na URL pública.
9. Anote uma mudança no produto que você quer testar com essa métrica.

## Checagem

Entrega: print do painel com a métrica da T1, commit dos eventos e a mudança a testar.

## Referência

**Termos**

- Métrica principal: o número que diz se o produto cumpre a proposta de valor
- Instrumentar: fazer o produto registrar as ações que alimentam a métrica
- Evento: registro de uma ação do usuário, com data e hora
- Painel: tela com os indicadores do produto
- Onboarding: primeiros passos do usuário no app

**Modelo de métrica**

- [Ação que prova valor] por [usuário ou período], medida em [unidade]
- Exemplo: propostas comparadas por comprador, por semana

**Tabela de eventos**

| Evento | Quando dispara | Dados guardados | Alimenta |
| --- | --- | --- | --- |

**Antes e depois**

- Anote o valor da métrica antes da mudança
- Mude uma coisa por vez
- Compare no mesmo intervalo de tempo depois

**Erros comuns**

| Erro | Correção |
| --- | --- |
| Medir cadastros, não uso | Meça a ação que prova valor |
| Evento com dado pessoal desnecessário | Guarde só o identificador do usuário |
| Mudar várias coisas juntas | Uma mudança por medição |

**Pedidos ao Claude Code**

- Modo Plano: "Quais eventos o app precisa registrar para calcular [métrica]? Proponha, sem alterar nada."
- "Implemente os eventos e mostre a métrica no painel."
