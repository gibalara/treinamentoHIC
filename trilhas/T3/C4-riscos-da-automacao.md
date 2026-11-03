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
3. Cole o checklist (veja "Checklist de riscos", na Referência) e peça: "Aplique este checklist a cada automação. Para cada item, atende ou não, com o motivo."
4. Confira um item por conta própria: o subagente revisor não tem permissão de editar.
5. Confira outro: o comando `/fechar-ciclo` para antes do commit.
6. Simule uma falha: peça para desligar temporariamente o hook de testes e veja se algo avisa. [VERIFICAR NA INTERFACE]
7. Religue o hook.
8. Corrija os itens reprovados, com um commit por correção.
9. Salve o checklist preenchido no repositório.

[LINK A CURAR: documentação oficial do Claude Code sobre segurança e permissões]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Manual**.
2. Peça a lista de todas as automações do projeto.
3. Aplique o checklist a cada uma.
4. Confira dois itens por conta própria.
5. Corrija os itens reprovados, com um commit por correção.
6. Salve o checklist preenchido no repositório e peça o commit.

## Checagem

Entrega: checklist de riscos preenchido para todas as automações do projeto.

## Referência

**Termos**

- Subagente: assistente com papel e contexto próprios, chamado pelo Claude Code (C1 da T3)
- Comando personalizado: atalho iniciado por barra com passos fixos (C2 da T3)
- Hook: verificação automática em momentos fixos (C3 da T3)
- Modo de permissão: regra de quando o Claude Code pede aprovação (0.4 da T0)

**Checklist de riscos**

- [ ] Cada automação tem só as ferramentas de que precisa
- [ ] Revisores só leem
- [ ] Commit, envio ao GitHub e exclusão passam por aprovação
- [ ] Falha de teste ou de hook aparece para você; nada falha em silêncio
- [ ] Nenhuma automação grava ou exibe segredos
- [ ] Peças de terceiros avaliadas (A7 da T3) e reavaliadas a cada atualização
- [ ] Modo "Ignorar permissões" nunca usado
- [ ] Hooks testados depois de qualquer mudança
- [ ] Cada automação tem dono e data de revisão (trimestral)
- [ ] Você sabe desligar cada automação

**Pedidos ao Claude Code**

- "Liste todas as automações deste projeto, com o que cada uma pode fazer."
- "Aplique este checklist a cada automação, com o motivo de cada resposta."
