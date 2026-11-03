# D3 · Seu método empacotado e documentado (Kit HIC)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 45 min
- **Evidência:** README publicado
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

O Kit HIC é o seu plugin (pacote instalável de skills, subagentes, comandos e hooks) com o seu método dentro. É o marco da T3 e um ativo de carreira.

Sem documentação, ninguém instala, nem você daqui a seis meses. O README é o arquivo de apresentação do repositório. Diz o que o kit faz, como instalar, o que foi avaliado e como manter.

Publicado no GitHub, ele vira evidência verificável do seu trabalho.

## Demonstração

Exemplo: o plugin de revisão nascido do Diário de Bordo.

1. Abra a pasta do plugin no modo de código do Claude Desktop (ícone **</>**), em modo **Manual**.
2. Cole o "Modelo do README", na Referência. Peça: "Escreva o README deste plugin com este modelo, a partir dos arquivos reais."
3. Confira a tabela de peças contra os arquivos: nenhuma peça a mais ou a menos.
4. Confira se cada peça de terceiro aponta para a avaliação feita com a rubrica da lição A7 da T3.
5. Confira se a seção de instalação bate com o registro do teste em projeto vazio (`TESTE-INSTALACAO.md`, lição D1 da T3).
6. Peça: "Procure segredos, nomes de clientes e dados pessoais no plugin." Corrija o que aparecer.
7. Peça: "Crie um repositório no GitHub para este plugin e envie os commits." [VERIFICAR NA INTERFACE] [LACUNA: repositório público ou privado, e licença de referência do Kit HIC]
8. Abra o repositório no GitHub e confira o README na página inicial.

[LINK A CURAR: guia oficial do GitHub sobre READMEs]

## Prática

1. Abra a pasta do seu plugin (lição D1 da T3) no modo de código, em **Manual**.
2. Confira as peças do plugin contra a lista "Conteúdo mínimo do kit", na Referência. Se faltar peça, generalize-a, acrescente como na lição D1 da T3 e repita o teste em projeto vazio.
3. Cole o "Modelo do README" (Referência) e peça o README, como no passo 2 da Demonstração.
4. Confira peças, avaliações e instalação contra os arquivos e o `TESTE-INSTALACAO.md`, como nos passos 3 a 5 da Demonstração.
5. Copie o `docs/politica-de-skills.md` (lição A9 da T3) para a pasta do plugin e aponte para ele no README.
6. Peça a busca por segredos e dados pessoais, como no passo 6 da Demonstração, e corrija.
7. Publique no GitHub, como no passo 7 da Demonstração. [VERIFICAR NA INTERFACE]
8. Confira o README na página do repositório.

## Checagem

Entrega: link do repositório do Kit HIC no GitHub, com o README na página inicial.

## Referência

**Termos**

- Kit HIC: seu plugin com o método, as peças avaliadas e a documentação
- Plugin: pacote instalável de skills, subagentes, comandos, hooks e servidores MCP
- README: arquivo de apresentação exibido na página inicial do repositório
- Licença: regra de uso que você define para o kit

**Modelo do README**

1. Nome e o que o kit faz, em 1 frase
2. Para quem é
3. Peças:

| Peça | Tipo | Origem | Avaliação | O que faz |
| --- | --- | --- | --- | --- |
| | Skill / Subagente / Comando / Hook | Própria / Terceiro adaptada | Link da rubrica (lição A7 da T3) | |

4. Instalação, passo a passo, testada em projeto vazio
5. Requisitos
6. Segurança: sem segredos; permissões de cada peça
7. Governança: link da política (lição A9 da T3)
8. Versão, data e próxima revisão (trimestral)
9. Licença

**Conteúdo mínimo do kit**

- Skill de método (lição A3 da T3)
- Skill de mercado adaptada (lição A8 da T3)
- 2 subagentes (lição C1 da T3)
- 2 comandos (lição C2 da T3)
- 2 hooks (lição C3 da T3)

**Critérios do marco T3 ligados ao kit**

- Skill de método em tarefa real (lição A3 da T3): eliminatório
- Nenhuma skill de terceiro sem avaliação (lição A7 da T3): eliminatório
- Plugin instalável em projeto vazio (lição D1 da T3): eliminatório
- 2 subagentes, 2 comandos, 2 hooks; política e README: não eliminatórios
