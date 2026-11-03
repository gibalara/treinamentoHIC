# A3 · Seu método de trabalho reutilizável pelo Claude (skill de método)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 90 min
- **Evidência:** skill + tarefa real
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Seu valor como sênior está no método: a ordem dos passos, os critérios e o que você nunca deixa passar. Hoje ele está na sua cabeça.

Uma skill de método (pacote de instruções com o seu jeito de executar uma tarefa) guarda esse método. O Claude passa a aplicá-lo sempre. O resultado deixa de depender de você lembrar de pedir cada detalhe.

É o ativo central do Kit HIC e critério eliminatório do marco da T3.

## Demonstração

Exemplo: o Diário de Bordo e o protocolo de debugging do curso (método de resolver erros, lição 2a.6 da T2).

1. Escreva o método em passos: reproduzir → hipóteses → testar uma → corrigir com commit isolado → registrar no `CLAUDE.md`. Commit isolado é um commit só com a correção.
2. Preencha a "Ficha do método", na Referência, com um critério de "feito" por passo.
3. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
4. Cole a ficha e peça: "Crie uma skill pessoal chamada 'protocolo-de-debugging' a partir desta ficha. Descrição: usar quando algo quebrou ou um teste falhou."
5. Peça: "Mostre a skill criada e explique cada parte." Confira se todos os passos e critérios estão lá.
6. Provoque um erro: peça para gravar a data dos registros em outro formato. Confira que o painel deixou de mostrar as datas. [VERIFICAR NO DIÁRIO DE BORDO DE REFERÊNCIA: se o painel não quebrar, use o erro proposital da lição 2a.6 da T2]
7. Peça: "O painel parou de mostrar as datas. Resolva."
8. Confira se o Claude seguiu os 5 passos, na ordem, e registrou o aprendizado no `CLAUDE.md`.
9. Ajuste a skill no ponto em que o Claude desviou e peça o commit.

[LINK A CURAR: documentação oficial da Anthropic sobre como criar uma skill]

## Prática

1. Escolha um método seu, do seu domínio profissional (veja "Escolha do método", na Referência).
2. Preencha a "Ficha do método", na Referência.
3. Abra a pasta do seu projeto no modo de código, em **Manual**.
4. Cole a ficha e peça a skill pessoal. Escreva a descrição com a estrutura de "Descrição", na Referência.
5. Peça para ver a skill e confira passos e critérios.
6. Abra uma sessão nova e use a skill numa tarefa real do seu trabalho. Anonimize dados de clientes e pessoas.
7. Compare o resultado com o que você entregaria e anote as diferenças.
8. Ajuste a skill e rode de novo.
9. Peça uma cópia da skill no repositório e o commit. Ela entra no Kit HIC na lição D3 da T3.

## Checagem

Entrega: a skill + o resultado da tarefa real + as diferenças anotadas no passo 7.

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Skill de método: skill com o seu jeito de executar uma tarefa do seu domínio
- Skill pessoal: vale para todos os seus projetos neste computador
- Commit isolado: um commit só com a correção, para poder voltar só ela

**Descrição** (estrutura da lição A2 da T3)

- O que faz, em uma frase
- Quando usar: situações e palavras que você diria
- Quando não usar: a tarefa vizinha mais parecida

**Ficha do método**

| Campo | Conteúdo |
| --- | --- |
| Nome | Verbo + objeto (ex.: "diagnosticar-processo") |
| Quando usar | Situações que disparam o método |
| Entradas | O que precisa existir antes |
| Passos | Em ordem, um verbo por passo |
| Critério de feito | Por passo: como saber que terminou |
| Nunca | O que você não deixa passar |
| Saída | Formato do resultado |

**Escolha do método**

- Boa escolha: você faz com frequência, e um júnior erraria sem orientação
- Teste: cabe em 5–9 passos
- Exemplos:
  - Parecer: analisar um caso e recomendar com riscos e alternativas
  - Diagnóstico: levantar dados de um processo, achar gargalos e priorizar
  - Revisão: conferir um documento contra critérios fixos e listar ajustes

**Pedidos ao Claude Code**

- "Crie uma skill pessoal chamada [nome] a partir desta ficha."
- "Mostre a skill [nome] e explique cada parte."
- "Copie a skill [nome] para o repositório."
