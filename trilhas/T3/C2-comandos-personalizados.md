# C2 · Sequências repetidas num único atalho (comandos personalizados)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** 2 comandos
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Ao fim de cada ciclo, você digita a mesma sequência: rodar testes, ver o que mudou, conferir, fazer commit. Esquecer um passo custa caro.

Um comando personalizado (atalho iniciado por barra, como `/fechar-ciclo`) guarda essa sequência. Você digita o atalho e o Claude Code executa os passos na ordem.

Diferença para uma skill: o comando entra quando você chama; a skill, quando o Claude julga que combina.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Crie um comando de projeto `/fechar-ciclo` que roda os testes, lista os arquivos alterados, explica a mudança e propõe o commit. Não faz commit sem minha aprovação."
3. Peça: "Crie um comando de projeto `/registrar-trava` que recebe uma trava e registra causa e solução no `CLAUDE.md`."
4. Peça: "Mostre os dois comandos e explique cada passo." [VERIFICAR NA INTERFACE: onde os comandos aparecem ao digitar /]
5. Faça uma mudança pequena: "Mude o rótulo 'Tempo' para 'Tempo (min)' no formulário de registro."
6. Digite `/fechar-ciclo` e confira se os 4 passos rodaram na ordem.
7. Aprove o commit.
8. Digite `/registrar-trava` seguido de uma trava real e confira o `CLAUDE.md`.

[LINK A CURAR: documentação oficial do Claude Code sobre comandos personalizados]

## Prática

1. Liste as sequências que você repete no seu projeto (veja "Escolha dos comandos", na Referência).
2. Escolha 2 com passos fixos.
3. Abra a pasta do seu projeto no modo de código, em **Manual**.
4. Peça os 2 comandos de projeto, com passos e ponto de aprovação.
5. Use cada comando numa situação real.
6. Ajuste o passo que saiu errado.
7. Peça o commit, incluindo os arquivos dos comandos.

## Checagem

Entrega: os arquivos dos 2 comandos no repositório + o resultado de um uso real de cada.

## Referência

**Termos**

- Comando personalizado: atalho iniciado por barra que dispara uma sequência fixa de passos
- Comando de projeto: guardado no repositório; vai junto no git
- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Ponto de aprovação: passo em que o comando para e espera você confirmar

**Comando × skill**

| Peça | Entra quando | Use para |
| --- | --- | --- |
| Comando | Você digita o atalho | Sequência repetida, sempre igual |
| Skill | O Claude julga que o pedido combina | Saber como fazer um tipo de tarefa |

**Escolha dos comandos**

- Boa escolha: mesma sequência, várias vezes por semana
- Exemplos:
  - `/fechar-ciclo`: testes, alterações, explicação, commit com aprovação
  - `/registrar-trava`: trava, causa e solução no `CLAUDE.md`
  - `/relatorio-semana`: commits da semana resumidos para o registro da jornada

**Regras**

- Commit, envio ao GitHub e exclusão sempre com ponto de aprovação
- Um comando, uma finalidade
