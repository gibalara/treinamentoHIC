# D1 · Suas peças instaláveis em qualquer projeto (plugins)

- **Trilha:** T3 · Sistemas Reutilizáveis
- **Tempo:** 75 min
- **Evidência:** plugin instalado em projeto vazio
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Skills, subagentes, comandos e hooks criados num projeto ficam presos a ele. Copiar arquivo por arquivo para o próximo projeto é lento e gera versões diferentes.

Um plugin (pacote instalável que reúne skills, subagentes, comandos, hooks e servidores MCP) leva tudo de uma vez. Instalar num projeto vazio prova que ele funciona fora de onde nasceu.

É critério eliminatório do marco da T3, com o teste documentado.

## Demonstração

Exemplo: o Diário de Bordo e suas peças de revisão.

1. Abra a pasta do Diário de Bordo no modo de código do Claude Desktop (ícone **</>**), em modo **Plano** (planeja antes de alterar arquivos).
2. Peça: "Liste as skills, subagentes, comandos e hooks deste projeto. Marque quais servem a qualquer projeto e quais são só do Diário."
3. Separe as peças reutilizáveis: subagentes revisores, `/fechar-ciclo` e o hook que bloqueia segredos.
4. Peça: "Planeje um plugin chamado 'revisao-hic' com estas peças, numa pasta própria fora do Diário. Inclua um README com a lista das peças."
5. Confira o plano: nenhuma peça cita arquivos ou tabelas do Diário; nenhum segredo.
6. Troque para **Manual** e peça a criação do plugin.
7. Crie uma pasta vazia, abra no modo de código e peça para instalar o plugin a partir da pasta dele. [VERIFICAR NA INTERFACE: como instalar um plugin a partir de uma pasta local]
8. Peça: "Liste as skills, subagentes, comandos e hooks disponíveis." Confira se as peças do plugin aparecem.
9. Teste uma peça: digite `/fechar-ciclo` e confira os passos.
10. Registre o teste (veja "Registro do teste", na Referência).

[LINK A CURAR: documentação oficial do Claude Code sobre criar e instalar plugins]

## Prática

1. Abra a pasta do seu projeto no modo de código, em **Plano**.
2. Peça a lista das suas peças, separando reutilizáveis e específicas do projeto.
3. Inclua a skill de método da A3 da T3 entre as reutilizáveis.
4. Peça o plano do plugin, numa pasta própria, com README.
5. Confira: nenhuma referência ao seu projeto e nenhum segredo.
6. Troque para **Manual** e peça a criação.
7. Crie uma pasta vazia e instale o plugin nela. [VERIFICAR NA INTERFACE]
8. Confira se todas as peças aparecem e teste duas delas.
9. Preencha o registro do teste.
10. Peça para iniciar um repositório git na pasta do plugin e fazer o commit.

## Checagem

Entrega: registro do teste de instalação em projeto vazio, com as peças listadas e duas testadas.

## Referência

**Termos**

- Plugin: pacote instalável que reúne skills, subagentes, comandos, hooks e servidores MCP
- Skill: pacote de instruções que o Claude carrega quando o pedido combina com a descrição
- Subagente: assistente com papel e contexto próprios, chamado pelo Claude Code
- Comando: atalho iniciado por barra com passos fixos
- Hook: verificação automática em momentos fixos
- Servidor MCP: programa que expõe dados e ações de um sistema ao Claude

**Reutilizável × específica**

| Vai para o plugin | Fica no projeto |
| --- | --- |
| Skill de método | Skill do projeto |
| Subagentes revisores com critérios gerais | Subagente que cita tabelas do projeto |
| Comandos de ciclo | Comandos com nomes de arquivos do projeto |
| Hooks de segurança | Servidor MCP do produto |

**Registro do teste**

| Campo | Resultado |
| --- | --- |
| Data | |
| Pasta vazia usada | |
| Forma de instalação | |
| Peças esperadas × peças listadas | |
| Peça testada 1 e resultado | |
| Peça testada 2 e resultado | |
| Problemas e correções | |

**Erros comuns**

- Peça que cita caminho do projeto original: falha no projeto novo
- Hook que depende de programa não instalado: falha silenciosa
- Plugin de terceiro instalado sem avaliação: passe pela A7 da T3 antes
