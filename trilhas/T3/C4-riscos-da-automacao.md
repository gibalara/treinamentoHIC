# C4 · Automação que não sai do controle (riscos da automação)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 30 min
- **Evidência:** checklist
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Subagentes, comandos e hooks fazem trabalho sem você pedir passo a passo. É o ganho e também o risco: o erro automático se repete em silêncio.

Os riscos típicos são acesso amplo demais, ação sem aprovação, falha escondida e peça de terceiro que muda sem reavaliação. Um checklist curto, aplicado a cada peça, mantém a automação sob controle.

## Demonstração

Exemplo: o Diário de Bordo, com subagentes de revisão, comandos e hooks.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Peça: "Liste as automações deste projeto (subagentes, comandos, hooks, skills, servidores MCP) e o que cada uma pode fazer."
3. Cole o "Checklist de riscos", na Referência, e peça: "Aplique este checklist a cada automação. Para cada item, atende ou não, com o motivo."
4. Confira um item por conta própria: peça as ferramentas do subagente revisor e confirme que ele não edita arquivos.
5. Confira outro: rode o comando `/fechar-ciclo` e confirme que ele para antes do commit.
6. Simule uma falha silenciosa: peça para desligar o hook de testes e peça uma mudança que quebra um teste. Note que nada avisa. [VERIFICAR NA INTERFACE]
7. Desfaça a mudança e religue o hook.
8. Corrija os itens reprovados, com um commit por correção.
9. Peça para salvar o checklist preenchido em `docs/checklist-riscos.md` e o commit.

[LINK A CURAR: documentação oficial do Claude Code sobre segurança e permissões]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Manual**.
2. Peça a lista de automações, como no passo 2 da Demonstração.
3. Cole o "Checklist de riscos" (Referência) e peça a aplicação a cada automação, como no passo 3 da Demonstração.
4. Confira dois itens por conta própria, um de acesso e um de aprovação (passos 4 e 5 da Demonstração).
5. Corrija os itens reprovados, com um commit por correção.
6. Salve o checklist preenchido em `docs/checklist-riscos.md` e peça o commit.

## Checagem

Entrega: checklist de riscos preenchido para todas as automações do projeto.

## Referência

**Termos**

- Subagente: assistente com papel e contexto próprios, chamado pelo Claude Code (lição C1 da T3)
- Comando personalizado: atalho iniciado por barra com passos fixos (lição C2 da T3)
- Hook: verificação automática em momentos fixos (lição C3 da T3)
- Modo de permissão: regra de quando o Claude Code pede aprovação (lição 0.4 da T0)

**Checklist de riscos**

- [ ] Cada automação tem só as ferramentas de que precisa
- [ ] Revisores só leem
- [ ] Commit, envio ao GitHub e exclusão passam por aprovação
- [ ] Falha de teste ou de hook aparece para você; nada falha em silêncio
- [ ] Nenhuma automação grava ou exibe segredos
- [ ] Peças de terceiros avaliadas (lição A7 da T3) e reavaliadas a cada atualização
- [ ] Modo "Ignorar permissões" nunca usado
- [ ] Hooks testados depois de qualquer mudança
- [ ] Cada automação tem dono e data de revisão (trimestral)
- [ ] Você sabe desligar cada automação

**Pedidos ao Claude Code**

- "Liste todas as automações deste projeto, com o que cada uma pode fazer."
- "Aplique este checklist a cada automação, com o motivo de cada resposta."
