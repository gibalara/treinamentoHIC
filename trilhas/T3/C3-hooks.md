# C3 · Verificações que acontecem sempre, sem você pedir (hooks)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 60 min
- **Evidência:** 2 hooks + teste de bloqueio
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Regras no `CLAUDE.md` e em skills são orientações: o Claude costuma seguir, mas pode falhar. Algumas verificações não podem depender disso, como nunca gravar uma chave no código.

Um hook (verificação que o Claude Code executa automaticamente em momentos fixos, como antes de editar um arquivo) roda sempre. Pode avisar ou bloquear a ação.

O teste de bloqueio prova que ele funciona: você tenta o proibido e vê a ação barrada.

## Demonstração

Exemplo: o Diário de Bordo, app de registro da jornada construído na T2a.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Crie um hook de projeto que, antes de editar arquivos, bloqueia texto parecido com chave ou senha. Mostre o motivo."
3. Peça: "Crie um hook de projeto que roda os testes depois de cada edição e mostra as falhas."
4. Peça: "Explique os dois hooks: quando rodam, o que verificam e o que acontece se falharem." [VERIFICAR NA INTERFACE: se o app pede aprovação para ativar hooks]
5. Abra uma sessão nova, na mesma pasta, para os hooks valerem.
6. Teste de bloqueio: peça "Grave a chave `sk-teste-123456` no arquivo de configuração."
7. Confirme que a edição foi bloqueada e anote a mensagem.
8. Teste o segundo hook. Peça uma mudança que quebre um teste: "Some o tempo dos registros em dobro no painel."
   - Veja o aviso de falha.
9. Peça para desfazer a mudança e o commit dos hooks.

[LINK A CURAR: documentação oficial do Claude Code sobre hooks]

## Prática

1. Escolha 2 verificações que devem acontecer sempre no seu projeto (veja "Escolha dos hooks", na Referência).
2. Abra a pasta do seu projeto no modo de código, em **Manual**.
3. Preencha a "Ficha do hook" (Referência) para cada um. Peça os 2 hooks de projeto no modelo dos passos 2 e 3 da Demonstração.
4. Peça a explicação dos dois, como no passo 4 da Demonstração, e abra uma sessão nova.
5. Faça o teste de bloqueio do hook que bloqueia, com o pedido da linha "Teste" da ficha.
6. Faça o teste do segundo hook e desfaça a mudança de teste.
7. Anote resultado e mensagem de cada teste.
8. Peça o commit, incluindo a configuração dos hooks.

## Checagem

Entrega: configuração dos 2 hooks no repositório + registro do teste de bloqueio (pedido feito e mensagem recebida).

## Referência

**Termos**

- Hook: verificação que o Claude Code executa automaticamente em momentos fixos
- Momento: quando o hook roda (ex.: antes de editar, depois de editar, ao terminar a resposta)
- Bloquear: impedir a ação e mostrar o motivo
- Avisar: deixar a ação seguir e mostrar o alerta
- Teste de bloqueio: tentar o proibido de propósito para provar que o hook barra

**Ficha do hook**

| Campo | Conteúdo |
| --- | --- |
| Momento | Antes ou depois de qual ação |
| Verificação | O que confere |
| Ação | Avisar ou bloquear |
| Mensagem | O que o Claude e você leem |
| Teste | Pedido que deve disparar o hook |

**Escolha dos hooks**

- Boa escolha: regra que nunca pode falhar ou verificação que você sempre esquece
- Exemplos:
  - Bloquear segredo em arquivo do projeto
  - Bloquear edição do arquivo de variáveis de ambiente
  - Rodar os testes depois de cada edição
  - Rodar os evals (testes de qualidade da IA) após mudar o prompt (regressão automática; só a partir da T4)

**Erros comuns (Tutor HIC)**

| Erro | Causa | Solução |
| --- | --- | --- |
| Hook não dispara | Sessão aberta antes da criação | Abrir sessão nova |
| Tudo fica lento | Hook pesado rodando a cada edição | Rodar ao terminar a resposta |
| Bloqueia o que não devia | Verificação ampla demais | Restringir o padrão e testar de novo |
