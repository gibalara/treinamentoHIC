# CLAUDE.md — O HIC do Futuro

Regras deste repositório. Valem para qualquer mudança.

## Fonte de verdade

- `docs/ementa.md` é a fonte única de verdade do curso.
- Nada no repositório contradiz a ementa. Em caso de conflito, vale a ementa.
- Mudança de conteúdo do curso começa pela ementa; os demais arquivos são atualizados depois.
- Não inventar conteúdo que não esteja na ementa. Se faltar informação, registrar a lacuna em vez de preencher.

## Lições

Toda lição segue `templates/licao.md`, com os cinco blocos fixos: Por quê, Demonstração, Prática, Checagem, Referência.

**Regras de formato**

- Texto para conceito e consulta.
- Demonstração em passos numerados, aplicada ao Diário de Bordo (produto de referência).
- Link externo (vídeo ou artigo) só quando acelera o entendimento.
- Links priorizam documentação oficial e são revisados a cada trimestre.
- Prática sempre no projeto do aluno, nunca em exercício genérico.

**Padrão de escrita:** pragmático, curto e direto. Só entra o que o aluno precisa para executar.

| Bloco | Limite |
| --- | --- |
| Por quê | Até 120 palavras |
| Demonstração | Passos numerados aplicados ao Diário de Bordo; no máximo 1 link externo curado |
| Prática | Instrução em passos numerados, sem explicação repetida |
| Checagem | Até 5 perguntas ou 1 entrega |
| Referência | Tópicos, comandos e templates; sem prosa |

**Regras de corte**

- Frases com até 20 palavras; parágrafos com até 3 frases.
- Nada de introdução, recapitulação ou conclusão.
- Conceito que um profissional sênior já domina não é explicado.
- Se um trecho não muda o que o aluno faz, sai.
- Cada lição responde a uma pergunta: o que isso me permite fazer agora?
- Título diz o resultado; o termo técnico vai entre parênteses ou no corpo da lição.

## Commits

- Um commit por mudança.
- Mensagem curta, em português, no imperativo (ex.: "Adiciona lição 0.5").

## Organização

| Pasta | Conteúdo |
| --- | --- |
| `docs/` | Ementa (fonte de verdade) |
| `templates/` | Template de lição |
| `trilhas/` | Uma pasta por trilha (T0 a T6 e transversal) |
| `rubricas/` | Uma rubrica por marco |
| `tutor/` | Base de conhecimento do Tutor HIC |
