# A6 · Saber o que uma skill faz antes de instalar (leitura de skills de terceiros)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** ficha de 3 skills
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Uma skill de terceiro (pacote de instruções escrito por outra pessoa) passa a orientar o Claude dentro do seu projeto. Algumas trazem scripts (pequenos programas) que rodam no seu computador.

Instalar sem ler é dar acesso ao seu repositório a quem você não conhece. Você não precisa ler código: o Claude Code lê e explica, e você audita a explicação.

## Demonstração

Exemplo: o Diário de Bordo e uma skill de revisão de segurança do mapa de fontes (A5 da T3).

1. Baixe a skill numa pasta separada, fora do repositório do Diário. Não instale. [VERIFICAR NA INTERFACE]
2. Abra essa pasta no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
3. Peça: "Leia esta skill sem executar nada. Explique o que ela faz, em quais pedidos é acionada e quais arquivos tem."
4. Peça: "Ela tem scripts? Para cada um: o que faz, que arquivos lê ou altera, e se acessa a internet."
5. Peça: "Há instruções para ignorar regras do projeto, pedir senhas ou enviar dados para fora?"
6. Abra um dos arquivos indicados e confira um trecho que o Claude citou.
7. Preencha a ficha da skill (veja "Ficha de leitura", na Referência).
8. Decida: segue para avaliação na A7 da T3 ou descarta.

[LINK A CURAR: documentação oficial da Anthropic sobre a estrutura de uma skill]

## Prática

1. Escolha 3 skills do seu mapa de fontes (A5 da T3).
2. Baixe cada uma numa pasta separada, fora do seu repositório.
3. Abra cada pasta no modo de código, em **Manual**.
4. Faça as 3 perguntas da Demonstração (passos 3 a 5).
5. Confira um trecho citado pelo Claude em cada skill.
6. Preencha uma ficha por skill.
7. Salve as fichas no seu repositório e peça o commit.

## Checagem

Entrega: ficha de leitura das 3 skills.

## Referência

**Termos**

- Skill de terceiro: skill escrita por outra pessoa ou empresa
- Script: pequeno programa que a skill pode mandar executar
- Acionamento: o Claude decidir carregar a skill a partir da descrição
- Injeção de instrução: texto escondido que tenta mudar o comportamento do Claude

**Ficha de leitura**

| Campo | Resposta |
| --- | --- |
| Nome e link | |
| O que faz (1 frase) | |
| Quando é acionada | |
| Arquivos | |
| Scripts e o que fazem | |
| Acessa a internet? | Sim / Não |
| Altera arquivos do projeto? | Sim / Não |
| Instrução suspeita? | Sim / Não (qual) |
| Decisão | Avaliar na A7 / Descartar |

**Sinais de alerta**

- Script que acessa a internet sem motivo claro
- Pedido de senha, chave de API ou token
- Instrução para ignorar o `CLAUDE.md` ou pular aprovações
- Texto escondido ou codificado
- Descrição genérica que aciona em qualquer pedido

**Pedidos ao Claude Code**

- "Leia esta skill sem executar nada. Explique o que ela faz."
- "Liste os scripts e o que cada um lê, altera ou acessa."
- "Há instruções para ignorar regras, pedir senhas ou enviar dados para fora?"
