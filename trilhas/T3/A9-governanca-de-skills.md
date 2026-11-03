# A9 · Regras para uso de skills na empresa (governança de skills)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 30 min
- **Evidência:** política de 1 página
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Numa empresa, cada pessoa instalando skills (pacotes de instruções para o Claude) por conta própria vira risco sem dono. Ninguém sabe o que está em uso, de onde veio nem quem aprovou.

Uma política de uma página resolve: quem aprova, de quais fontes, com qual avaliação, e quando revisar. É também uma das evidências que a TI e o compliance pedem (dossiê de governança, X7 da trilha Transversal).

## Demonstração

Exemplo: o Diário de Bordo usado por uma empresa que forma seus profissionais.

1. Abra uma conversa no Claude e cole o modelo de política (veja "Modelo de política", na Referência).
2. Cole a rubrica de skills de terceiros (A7 da T3) e o mapa de fontes (A5 da T3) do Diário.
3. Peça: "Preencha esta política para uma empresa que usa o Diário de Bordo. Até 1 página."
4. Confira se segurança aparece como critério eliminatório.
5. Confira se cada skill tem dono, data de avaliação e data de revisão.
6. Confira se há regra para dados sensíveis e para desligar uma skill.
7. Corte o que não muda uma decisão.
8. Salve a política no repositório do Diário e peça o commit no Claude Code.

[LINK A CURAR: documentação oficial da Anthropic sobre gestão de skills em contas de organização]

## Prática

1. Escolha o contexto: sua empresa, um cliente ou sua própria operação.
2. Cole o modelo de política, sua rubrica (A7 da T3) e seu mapa de fontes (A5 da T3).
3. Peça a política preenchida para esse contexto, em até 1 página.
4. Confira os 4 pontos dos passos 4 a 6 da Demonstração.
5. Monte o inventário com as skills que você usa hoje.
6. Salve política e inventário no repositório e peça o commit.

## Checagem

Entrega: política de governança de skills em 1 página, com o inventário anexo.

## Referência

**Termos**

- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Governança: quem decide, com qual critério e como se registra
- Inventário: lista das skills em uso, com origem, dono e datas
- Dados sensíveis: dados pessoais ou confidenciais que exigem proteção

**Modelo de política**

1. Objetivo e alcance: quem a política cobre
2. Fontes permitidas: oficiais, coleções aprovadas, internas
3. Avaliação obrigatória: rubrica de 6 critérios; segurança eliminatória
4. Aprovação: quem aprova e onde registra
5. Inventário: skill, origem, versão, dono, data de avaliação, próxima revisão
6. Dados sensíveis: o que nunca entra em skill ou em teste
7. Revisão: trimestral e a cada atualização da skill
8. Desligamento: quem pode desligar e em quanto tempo

**Inventário**

| Skill | Origem | Dono | Avaliada em | Próxima revisão | Situação |
| --- | --- | --- | --- | --- | --- |
| | Oficial / Terceiro / Interna | | | | Em uso / Em teste / Desligada |
