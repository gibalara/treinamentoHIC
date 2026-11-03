# C4 · Fluxos do n8n sem brechas (segurança no n8n)

- **Trilha:** T5 · Escala
- **Tempo:** 30 min
- **Evidência:** checklist
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Cada fluxo do n8n (ferramenta visual de fluxos entre sistemas) é uma porta para dentro do produto. Uma porta sem tranca anula o isolamento que você provou.

Os riscos mais comuns são três: webhook sem autenticação, segredo à vista e dado sensível guardado no histórico. Webhook é o endereço que recebe aviso automático de outro sistema.

Este checklist é a evidência do critério eliminatório "webhooks do n8n autenticados", no marco da T5.

## Demonstração

Exemplo: os dois fluxos do Diário de Bordo, aviso de trava e relatório semanal por turma.

1. Abra o n8n e liste os fluxos ativos. [VERIFICAR NA INTERFACE]
2. Para cada fluxo, anote o gatilho: webhook, agendado ou manual.
3. Abra cada webhook e confira a autenticação ativa. [VERIFICAR NA INTERFACE]
4. Abra a pasta do Diário no modo de código e peça: "Chame cada webhook do n8n sem segredo e mostre as respostas." Confira: todas recusadas.
5. Abra cada bloco e procure senha, chave ou segredo escrito no texto. Todos devem estar em credenciais (segredos guardados fora dos blocos). [VERIFICAR NA INTERFACE]
6. Abra o histórico de execuções e confira se há dado sensível nele. [VERIFICAR NA INTERFACE]
7. Confira a retenção do histórico, isto é, por quanto tempo ele é guardado. [VERIFICAR NA INTERFACE]
8. Confira quem tem acesso à conta do n8n e se o login exige segundo fator. [VERIFICAR NA INTERFACE]
9. Desative todos os fluxos e use o Diário: ele deve funcionar normalmente. Reative os fluxos.
10. Preencha o checklist (veja "Checklist de segurança no n8n", na Referência) e salve em `docs/checklist-n8n.md`.
11. Peça um commit.

[LINK A CURAR: documentação oficial do n8n sobre segurança]

## Prática

1. Liste os fluxos ativos do seu n8n e o gatilho de cada um.
2. Percorra o checklist item por item.
3. Para cada item reprovado, corrija e teste de novo.
4. Salve o checklist preenchido em `docs/checklist-n8n.md`.
5. Peça um commit.

## Checagem

Entrega: `docs/checklist-n8n.md` com todos os itens marcados, inclusive o teste de webhook sem segredo recusado.

## Referência

**Termos**

- n8n: ferramenta visual de fluxos entre sistemas
- Webhook: endereço que recebe aviso automático de outro sistema
- Credencial: segredo guardado no n8n, fora dos blocos
- Histórico de execuções: registro do que cada fluxo recebeu e enviou
- Retenção: por quanto tempo o histórico é guardado
- Segundo fator: confirmação extra no login, além da senha

**Checklist de segurança no n8n**

```markdown
# Checklist de segurança no n8n — [data]

## Eliminatório
- [ ] Todo webhook exige segredo
- [ ] Chamada sem segredo é recusada (teste anexado)
- [ ] Chamada com segredo errado é recusada (teste anexado)

## Segredos
- [ ] Nenhum segredo escrito no texto dos blocos; todos em credenciais
- [ ] Segredos do produto só em variáveis de ambiente
- [ ] Segredo do webhook diferente em cada fluxo

## Dados
- [ ] Fluxos enviam e recebem só o mínimo necessário
- [ ] Sem conteúdo de cliente no histórico de execuções
- [ ] Retenção do histórico conferida
- [ ] Relatórios separados por organização (lição C3 da T5)

## Acesso
- [ ] Só quem precisa acessa a conta do n8n
- [ ] Login com segundo fator, se disponível
- [ ] Fluxos exportados para backup sem segredos dentro

## Papel no produto
- [ ] Com todos os fluxos desativados, o produto funciona
- [ ] Nenhuma permissão, cobrança ou regra central depende do n8n
```

**Pedidos ao Claude Code**

- "Chame cada webhook do n8n sem segredo e com segredo errado e mostre as respostas."
- "Liste onde o produto chama o n8n e o que acontece se o n8n falhar."

**Erros comuns (Tutor HIC)**

| Erro | Solução |
| --- | --- |
| Mesmo segredo em todos os fluxos | Um segredo por fluxo; troca de um não afeta os outros |
| Histórico guardando texto de clientes | Enviar só identificadores e números |
| Fluxo exportado com segredo dentro | Usar credenciais e conferir o arquivo antes de salvar |
