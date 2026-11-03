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
2. Cole o modelo (veja "Modelo do README", na Referência). Peça: "Escreva o README deste plugin com este modelo, a partir dos arquivos reais."
3. Confira a tabela de peças contra os arquivos: nenhuma peça a mais ou a menos.
4. Confira se cada peça de terceiro aponta para a avaliação feita com a rubrica (A7 da T3).
5. Confira se a seção de instalação bate com o teste em projeto vazio (D1 da T3).
6. Peça: "Procure segredos, nomes de clientes e dados pessoais no plugin." Corrija o que aparecer.
7. Crie um repositório no GitHub para o plugin e envie os commits. [VERIFICAR NA INTERFACE] [LACUNA: repositório público ou privado, e licença de referência do Kit HIC]
8. Abra o repositório no GitHub e confira o README na página inicial.

[LINK A CURAR: guia oficial do GitHub sobre READMEs]

## Prática

1. Abra a pasta do seu plugin da D1 da T3 no modo de código, em **Manual**.
2. Confira as peças do plugin contra a lista "Conteúdo mínimo do kit", na Referência.
3. Peça o README com o modelo da Referência.
4. Confira peças, avaliações e instalação contra os arquivos e o teste da D1 da T3.
5. Anexe a política de governança da A9 da T3.
6. Peça a busca por segredos e dados pessoais e corrija.
7. Publique no GitHub. [VERIFICAR NA INTERFACE]
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
| | Skill / Subagente / Comando / Hook | Própria / Terceiro adaptada | Link da rubrica (A7 da T3) | |

4. Instalação, passo a passo, testada em projeto vazio
5. Requisitos
6. Segurança: sem segredos; permissões de cada peça
7. Governança: link da política (A9 da T3)
8. Versão, data e próxima revisão (trimestral)
9. Licença

**Conteúdo mínimo do kit**

- Skill de método (A3 da T3)
- Skill de mercado adaptada (A8 da T3)
- 2 subagentes (C1 da T3)
- 2 comandos (C2 da T3)
- 2 hooks (C3 da T3)

**Critérios do marco T3 ligados ao kit**

- Skill de método em tarefa real (A3 da T3): eliminatório
- Nenhuma skill de terceiro sem avaliação (A7 da T3): eliminatório
- Plugin instalável em projeto vazio (D1 da T3): eliminatório
- 2 subagentes, 2 comandos, 2 hooks; política e README: não eliminatórios
