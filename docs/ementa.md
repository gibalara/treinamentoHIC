# O HIC do Futuro — Ementa Consolidada

Oct 30, 2026 · @Gilberto Laranjeira

**Fonte única de verdade do curso.** Mudanças começam por este arquivo; os demais arquivos do repositório são atualizados depois.

## Visão geral

O HIC do Futuro prepara profissionais seniores para idealizar, construir, integrar e auditar produtos com IA sozinhos, do problema validado ao agente em produção.

| Tema | Definição |
| --- | --- |
| Objetivo | Formar HICs (High-Value Individual Contributors) capazes de entregar sozinhos o que antes exigia uma equipe |
| Público | Profissionais seniores, especialistas e consultores, não desenvolvedores |
| Formato | 100% assíncrono, sem turma e sem mentoria ao vivo |
| Projeto âncora | Escolhido pelo aluno na T1, aplicado ao próprio nicho, evoluindo em todas as trilhas |
| Avaliação | IA pré-avalia por rubrica, com base em evidências verificáveis |
| Carga de referência | 4–6 h por semana |
| Primeiro uso | Formação do próprio autor (aluno zero), antes de implantação em empresas |

**Posicionamento:** do protótipo à produção confiável. Os cursos de mercado ensinam o profissional não técnico a construir; o HIC do Futuro ensina a construir algo avaliado, seguro, multiusuário e sustentado por um sistema reutilizável de skills e conectores.

**Diferenciais frente ao mercado:** rigor de produção para quem não é dev; skills, curadoria e MCP como ativo de carreira; governança e LGPD em português.

## Princípios e regras estruturais

Sete regras valem para todas as trilhas e não são negociáveis no desenho das lições.

1. **Ciclo único:** Especificar → Gerar → Testar → Refinar, em todas as trilhas.
2. **Caminho padrão obrigatório, alternativas em anexo:** uma pilha fechada e reprodutível.
3. **Ensinar arquitetura, delegar sintaxe:** o HIC decide o quê e o porquê; o Claude Code executa o como. O aluno lê código, não escreve.
4. **Sequência inegociável:** guardrails → evals → autonomia; app básico → multiusuário.
5. **Avaliação por evidência:** a IA avalia o que existe (repositório, URL, resultado de evals), nunca o que o aluno afirma.
6. **Trilhas independentes:** cada uma entrega valor e badge próprios.
7. **Usuários reais decidem:** ferramentas externas simulam, o Claude interpreta, a decisão vem de pessoas reais.
8. **Valor antes da teoria:** cada trilha abre com uma vitória concreta em menos de uma hora, usando conectores e skills amplamente adotados; o conceito vem depois, para explicar o que o aluno já viu funcionar.
9. **Nível sênior:** o aluno é tratado como especialista no próprio domínio. Fundamentos técnicos entram sob demanda, como referência, não como aula expositiva.

10) **Exemplo resolvido antes da prática:** o Diário de Bordo é o produto de referência do curso e evolui em todas as trilhas. Cada demonstração aplica o conteúdo a ele; depois, o aluno aplica ao próprio projeto.

**Mitigações didáticas fixas**

- Explicação reversa: após cada geração relevante, o Claude explica o arquivo do ponto de vista de arquitetura e risco.
- Protocolo de debugging: reproduzir → pedir hipóteses → testar uma → corrigir com commit isolado → registrar no `CLAUDE.md`.
- Checkpoints com git: um commit por ciclo verificável.
- Jargão traduzido em artefato: harness = `CLAUDE.md` + regras + ferramentas + testes.
- Segurança mínima: toda chamada de IA no servidor; segredos só em variáveis de ambiente.

## Pilha de ferramentas

O caminho padrão usa o ecossistema Claude como eixo, com Supabase, Vercel e n8n como infraestrutura.

| Função | Caminho padrão | Alternativas (anexo) |
| --- | --- | --- |
| Especificação e pesquisa | Claude (Projects, Skills) | — |
| Protótipo visual | Artifacts, Claude Design | v0, Bolt, Lovable |
| Construção | Claude Code no Claude Desktop (terminal como alternativa) | Cursor, Codex |
| Versionamento | GitHub | — |
| Banco, autenticação, vetores | Supabase (Postgres, RLS, pgvector) | Firebase |
| Deploy | Vercel | — |
| IA no produto | API Anthropic | OpenAI |
| Evals | Script próprio (casos-ouro + LLM como juiz) | LangSmith, Phoenix |
| Automações de negócio | n8n | — |
| Usuários sintéticos e usabilidade | Ferramentas externas (ex.: Articos, Candor, Synthetic Users, Delve AI, Loop11) | — |
| Produtividade pessoal | Claude Cowork | — |

**Custo das ferramentas:** a lição 0.3 abre com uma tabela de custo mensal estimado por ferramenta, indicando o que tem plano gratuito suficiente para a formação. Valores a confirmar na produção, porque preços mudam com frequência.

**Transição do protótipo para o código:** migrar decisões, não código. O protótipo vira especificação visual anexada ao `SPEC.md`; o Claude Code constrói a partir dela.

**Regra n8n × código:** n8n para fluxos de negócio entre sistemas, agendados ou por evento; código para o núcleo do produto, permissões, dados sensíveis e cobrança.

## Estrutura da formação

São oito trilhas, cerca de 100–140 horas na estimativa base; com margem de 30% para não-devs, 130–180 horas, ou aproximadamente 30 semanas na carga de referência.

| Trilha | Foco | Marco | Esforço | Badge |
| --- | --- | --- | --- | --- |
| T0 Pré-voo | Conectores, skills, Claude Code no Desktop, git, leitura de código, contexto, Cowork | Ambiente validado + primeiro commit | 6–8 h | Pré-voo |
| T1 Arquiteto de Produto | Problema, validação, spec, priorização, protótipo | `SPEC.md` + projeto elegível | 6–8 h | Arquiteto |
| T2 Builder | T2a ensaio guiado (Diário de Bordo) + T2b MVP próprio | MVP no ar, testado por usuário real | 16–24 h | Builder |
| T3 Sistemas Reutilizáveis | Skills, curadoria, MCP, subagentes, hooks, plugins | Kit HIC instalável | 18–24 h | Sistemas |
| T4 Produto com IA | RAG em degraus, guardrails, evals, modelo, custo | Feature de IA com evals passando | 18–24 h | Produto IA |
| T5 Escala | Multi-organização, papéis, admin, n8n, operação | Produto multi-org com isolamento provado | 14–20 h | Escala |
| T6 Autonomia | Agente, aprovação humana, multiagentes, agendamento, canais | Agente em produção com aprovação | 14–20 h | Autonomia |
| Transversal | Carreira e governança | Case + pitch | 8–10 h | HIC |

**Vitória de abertura por trilha**

| Trilha | O aluno vê funcionar na primeira hora |
| --- | --- |
| T0 | Claude conectado ao próprio e-mail, agenda ou drive, gerando um entregável real com skills oficiais |
| T1 | Uma ideia vaga virando especificação e protótipo clicável em minutos |
| T2 | Claude Code construindo uma tela funcional a partir de uma frase |
| T3 | Um plugin pronto da comunidade mudando o próprio fluxo de construção |
| T4 | A IA respondendo com citação sobre os documentos do próprio projeto |
| T5 | Um evento do produto disparando aviso automático no Slack ou no e-mail |
| T6 | Um agente agendado concluindo uma tarefa sem o aluno presente |
| Transversal | Um case real de profissional que opera um produto sozinho |

**Evolução do produto de referência (Diário de Bordo)**

| Trilha | O Diário ganha |
| --- | --- |
| T2a | Registro da jornada, login, painel e deploy |
| T3 | Skill do projeto, servidor MCP e subagentes de revisão |
| T4 | Tutor que responde com base nos registros e no conteúdo do curso, com citação |
| T5 | Organizações (empresa ou turma), papéis e painel do gestor |
| T6 | Agente semanal que analisa travas, sugere o próximo passo e alerta o gestor, com aprovação |

Ao final, o Diário de Bordo é um protótipo funcional da plataforma de formação.

**Objetivos de aprendizagem: ao final de cada trilha, o aluno é capaz de**

| Trilha | Objetivo mensurável |
| --- | --- |
| T0 | Usar conectores e skills para gerar um entregável real e operar o Claude Code num repositório próprio |
| T1 | Transformar um problema validado com 3 usuários reais numa especificação executável |
| T2 | Publicar um MVP com login, isolamento entre usuários e testes automatizados |
| T3 | Empacotar o próprio método num plugin instalável com skills, MCP, subagentes e hooks |
| T4 | Colocar uma feature de IA no ar com evals acima da meta e custo por usuário calculado |
| T5 | Atender vários clientes ou áreas com isolamento provado por teste e operação monitorada |
| T6 | Operar um agente agendado com limites, aprovação humana e evals de comportamento |
| Transversal | Apresentar o produto com case, preço e dossiê de governança |

**Diagnóstico de entrada:** quem já tem um app publicado com login e banco apresenta a evidência ao Avaliador HIC, é dispensado da T0 (exceto 0.1, 0.2 e 0.8) e da T2a, e começa direto na T2b.

**Cadência e compromisso:** na lição 0.3, o aluno define a própria cadência semanal e as datas-alvo de cada marco. O Diário de Bordo mostra o avanço contra essas datas.

**Badge HIC (final):** exige os badges de T0 a T6 e o marco final da trilha transversal.

**Saídas intermediárias:** concluir até a T2 já entrega um produto no ar; até a T4, um produto com IA confiável; até a T6, a formação completa. Cada saída tem badge e valor próprios, o que reduz o risco de abandono numa jornada longa.

**Recalibração:** as estimativas serão revistas com os dados do Diário de Bordo do aluno zero.

## Anatomia da lição e avaliação

Toda lição segue cinco blocos fixos e toda trilha fecha com um marco avaliado por evidência.

| Bloco | Formato | Função | Duração |
| --- | --- | --- | --- |
| Por quê | Texto | Problema de negócio e conceito central | 3–5 min |
| Demonstração | Texto em passos; link externo opcional (vídeo ou artigo) | O conteúdo aplicado ao Diário de Bordo (produto de referência) | 5–10 min |
| Prática | Interativo | Aplicação no projeto do aluno | 15–40 min |
| Checagem | Quiz ou entrega | Verifica entendimento ou gera evidência | 2–5 min |
| Referência | Texto | Templates, comandos, erros comuns | Consulta |

**Regras de formato:** texto para conceito e consulta; demonstração em passos numerados, com link externo (vídeo ou artigo) só quando acelera o entendimento; links priorizam documentação oficial e são revisados a cada trimestre; prática sempre no projeto do aluno, nunca em exercício genérico.

**Estrutura de rubrica por marco**

- Critério: o que é avaliado
- Evidência: onde verificar
- Níveis: Não atende / Atende parcialmente / Atende
- Eliminatório: sim ou não
- Feedback: o que corrigir e qual lição revisar

**Qualidade do avaliador:** o avaliador de IA tem os próprios evals, com um conjunto de entregas boas e ruins conhecidas, gerado pela jornada do aluno zero.

**Registro da jornada:** em T0 e T1, planilha com trilha, lição, data, tempo, status, onde travou e aprendizado; na T2a, os dados são importados para o Diário de Bordo e o registro passa a ser feito no app.

**Mecanismo de avaliação sem plataforma:** o curso entrega a skill **Avaliador HIC**, que o aluno executa no próprio repositório ao fim de cada marco. Ela lê as evidências, aplica a rubrica e gera um relatório com nível por critério, eliminatórios e feedback. Para o aluno zero, basta; em empresas, a integridade exigirá a plataforma ou revisão por amostragem.

**Tutor HIC (canal de desbloqueio):** um Project no Claude entregue como ativo do curso, com o conteúdo das trilhas, a base de erros comuns e o protocolo de debugging como conhecimento. É o suporte assíncrono que substitui a mentoria nos momentos de trava.

**Padrão de escrita das lições:** pragmático, curto e direto. Só entra o que o aluno precisa para executar.

| Bloco | Limite |
| --- | --- |
| Por quê | Até 120 palavras |
| Demonstração | Passos numerados aplicados ao Diário de Bordo; no máximo 1 link externo curado |
| Prática | Instrução em passos numerados, sem explicação repetida |
| Checagem | Até 5 perguntas ou 1 entrega |
| Referência | Tópicos, comandos e templates; sem prosa |

**Regras de corte:**

- Frases com até 20 palavras; parágrafos com até 3 frases
- Nada de introdução, recapitulação ou conclusão
- Conceito que um profissional sênior já domina não é explicado
- Se um trecho não muda o que o aluno faz, sai
- Cada lição responde a uma pergunta: o que isso me permite fazer agora?

* Título diz o resultado; o termo técnico vai entre parênteses ou no corpo da lição

## T0 · Pré-voo: primeira vitória

Na primeira hora, o aluno já tem o Claude trabalhando no próprio e-mail, agenda ou drive e gerando um entregável real; o ambiente de construção e o letramento técnico vêm depois, em 6–8 horas. Skills e conectores usados aqui são oficiais ou pré-avaliados pelo curso com a rubrica da T3.

| # | Lição | Prática | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| 0.1 | Claude trabalhando no seu e-mail, agenda e drive (conectores) | Conectar um conector amplamente usado (Google Workspace, Microsoft 365, Notion ou Slack) e executar uma tarefa real do trabalho | Tarefa + tempo economizado | 30 min |
| 0.2 | Um entregável pronto a partir dos seus dados (skills oficiais) | Usar as skills oficiais da Anthropic (Word, PowerPoint, Excel, PDF) para transformar dados do conector num entregável real | Entregável gerado | 45 min |
| 0.3 | Seu plano de jornada: o que construir, quanto custa e em que ritmo | Tour do produto final de referência e do método da formação; criar a planilha de registro | Planilha criada | 30 min |
| 0.4 | Claude Code em ação (no Claude Desktop) | Abrir o Claude Code na aba de código do Claude Desktop, selecionar a pasta do repositório e executar a primeira tarefa real: um utilitário pessoal | Checklist + utilitário funcionando | 90 min |
| 0.5 | Letramento expresso: git e leitura de código (terminal como referência) | Só o necessário para não travar: commit, retorno de versão e explicação reversa pelo Claude Code; terminal, caminhos e comandos ficam como referência para quando forem necessários | Primeiro commit + quiz de erros | 75 min |
| 0.6 | Engenharia de contexto | Prompt como especificação; montar o Project da formação com instruções e contexto | Antes/depois de um prompt real + Project | 60 min |
| 0.7 | Claude Cowork: escalar o próprio trabalho | Automatizar uma tarefa recorrente própria | Tempo antes/depois | 60 min |
| 0.8 | Tutor HIC | Instalar o Project Tutor HIC e testá-lo com uma dúvida real | Dúvida resolvida | 15 min |

**Rubrica do marco T0**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Ambiente completo | Checklist de setup + utilitário funcionando | Sim |
| Repositório pessoal com commit | Link do GitHub | Sim |
| Entregável real gerado com conector + skill | Arquivo + descrição da tarefa | Não |
| Automação no Cowork com ganho descrito | Tempo antes/depois | Não |
| Project da formação e Tutor HIC configurados | Prints | Não |
| Registro da jornada em dia | Planilha | Não |

## T1 · Arquiteto de Produto

O aluno sai com um projeto próprio elegível, especificado e validado com usuários reais, em 6–8 horas mais o tempo das conversas.

**Abertura:** em 10 minutos, uma ideia vaga do próprio nicho vira especificação e protótipo clicável com a skill de especificação do curso. O restante da trilha mostra por que esse primeiro resultado ainda não basta.

A T1 usa uma skill de especificação fornecida pelo curso; o aluno aprende a criar as próprias na T3.

| # | Lição | Prática | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| 1.1 | Problema antes da solução | Mapear 2–3 problemas do nicho | Ficha de problema | 45 min |
| 1.2a | Pré-validação com usuários sintéticos | Testar a hipótese numa ferramenta externa; Claude ajuda a montar hipóteses e personas | Relatório da ferramenta + perguntas para usuários reais | 45 min |
| 1.2b | Validação com usuários reais | Pelo menos 3 conversas, com roteiro refinado | Resumo das conversas | 60 min + conversas |
| 1.2c | Síntese com IA | Claude cruza hipóteses, relatório sintético e conversas | Decisão: seguir, ajustar ou trocar | 30 min |
| 1.3 | Pesquisa assistida por IA | Mapa de 3–5 alternativas existentes | Tabela comparativa | 45 min |
| 1.4 | Proposta de valor e métrica | Escrever proposta e métrica principal | Proposta + métrica | 30 min |
| 1.5 | Do problema ao requisito | Requisitos com critérios de aceite | Requisitos | 60 min |
| 1.6 | Spec-Driven Development | Gerar o `SPEC.md` com a skill do curso | `SPEC.md` v1 | 60 min |
| 1.7 | Priorização e etapas verificáveis | Criar `TASKS.md` e `BACKLOG.md` | Arquivos commitados | 45 min |
| 1.8 | Protótipo descartável | Prototipar o fluxo principal e testar com 1 usuário | Link ou print + ajustes | 60 min |
| 1.9 | Elegibilidade do projeto | Aplicar o checklist ao projeto | Checklist aprovado | 30 min |

As lições 1.3 a 1.5 podem ser feitas em paralelo enquanto as conversas da 1.2b acontecem.

**Rubrica do marco T1**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Problema validado com usuários reais | Resumo de 3 conversas | Sim |
| `SPEC.md` completo nas 8 seções | Arquivo no repositório | Sim |
| Checklist de elegibilidade aprovado | Checklist preenchido | Sim |
| Requisitos com critérios de aceite testáveis | Seção 4 do `SPEC.md` | Sim |
| Pré-validação com usuários sintéticos | Relatório da ferramenta | Não |
| Síntese com decisão explícita | Decisão justificada | Não |
| `TASKS.md` e `BACKLOG.md` separados | Arquivos | Não |
| Protótipo testado com 1 usuário | Link ou print | Não |
| Métrica de sucesso definida | Seção 3 do `SPEC.md` | Não |

## T2 · Builder

O aluno domina o ciclo de construção num produto guiado (T2a, 6–10 h) e o aplica sozinho ao projeto próprio (T2b, 10–14 h).

**Abertura:** o Claude Code constrói uma tela funcional do Diário de Bordo a partir de uma frase, ao vivo na demonstração. A trilha ensina a fazer isso com controle, testes e segurança.

### T2a · Ensaio guiado: Diário de Bordo HIC

App pessoal em que o aluno registra a própria jornada: login, registros por lição, painel e deploy. Começa do zero; a estrutura criada vira o template próprio da T2b. Fora do escopo: IA, papéis e integrações.

| # | Lição | Prática | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| 2a.1 | Do `SPEC.md` ao plano | Gerar e revisar o plano no modo de planejamento | Plano commitado | 45 min |
| 2a.2 | `CLAUDE.md` e regras | Criar o `CLAUDE.md` com regras de segurança | Arquivo commitado | 45 min |
| 2a.3 | Primeira tela | Construir a tela de registro | Commit da tela | 60 min |
| 2a.4 | Banco de dados | Criar a tabela e importar a planilha da T0/T1 | Registros anteriores visíveis | 75 min |
| 2a.5 | Autenticação e permissões | Login + isolamento entre usuários | Teste com duas contas | 75 min |
| 2a.6 | Debugging guiado | Resolver o erro proposital com o protocolo | Registro no `CLAUDE.md` | 45 min |
| 2a.7 | Painel | Indicadores de tempo, lições e travas | Tela do painel | 60 min |
| 2a.8 | Deploy | Publicar na Vercel com variáveis de ambiente | URL pública | 45 min |

**Rubrica do marco T2a:** eliminatórios são app publicado, login operante, isolamento entre usuários e segredos fora do código. Não eliminatórios: importação dos registros, um commit por ciclo, `CLAUDE.md` atualizado.

### T2b · MVP do projeto próprio

Sem passo a passo e sem feature de IA (que entra na T4). O aluno conduz; a lição dá método e critério.

| # | Lição | Prática | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| 2b.1 | Plano do MVP | Plano a partir do `TASKS.md` | Plano commitado | 45 min |
| 2b.2 | `CLAUDE.md` do projeto | Adaptar o da T2a | Arquivo commitado | 30 min |
| 2b.3 | Modelo de dados | Modelar e criar as tabelas | Diagrama + tabelas | 60 min |
| 2b.4 | Ciclos de construção | Construir as funcionalidades, com checkpoint a cada bloco | Commits por funcionalidade | 4–6 h |
| 2b.5 | Testes automatizados | Testes a partir dos critérios de aceite | Testes passando | 75 min |
| 2b.6 | Revisão de segurança | Rodar a revisão e corrigir | Relatório + correções | 45 min |
| 2b.7 | Deploy em produção | Publicar o MVP | URL pública | 45 min |
| 2b.8 | Usabilidade com agentes externos | Ferramenta externa testa; Claude prioriza fricções | Relatório + tarefas | 60 min |
| 2b.9 | Teste com usuário real | Testar com 1 usuário da validação da T1 | Resumo do teste | 45 min + teste |
| 2b.10 | Fechamento do MVP | Notas da versão e backlog | Arquivos atualizados | 30 min |

**Rubrica do marco T2b**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| MVP publicado com as funcionalidades do `SPEC.md` | URL + critérios de aceite | Sim |
| Isolamento entre usuários | Teste com duas contas | Sim |
| Segredos fora do código | Repositório + relatório de segurança | Sim |
| Testes automatizados das funcionalidades principais | Testes passando | Sim |
| Teste com 1 usuário real | Resumo | Sim |
| Teste de usabilidade externo | Relatório + tarefas | Não |
| Achados de segurança corrigidos | Commits | Não |
| Notas da versão e backlog | Arquivos | Não |

**Atenção:** se a 2b.4 passar de 6 horas, o MVP ficou grande; o critério de elegibilidade da T1 deve ser revisto com os dados do aluno zero.

## T3 · Sistemas Reutilizáveis

O método do aluno vira ativos reutilizáveis (skills, conectores, subagentes, hooks e plugins), empacotados no Kit HIC, em 18–24 horas.

**Abertura:** o aluno instala uma coleção de skills amplamente adotada pela comunidade para Claude Code (por exemplo, Superpowers, com fluxos de planejamento, TDD e revisão), pré-avaliada pelo curso, e vê o próprio processo de construção mudar na hora. Depois aprende a avaliar, adaptar e criar as suas.

| Bloco | # | Lição | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| A · Skills | A1 | Fundamentos de skills | Quiz de acionamento | 45 min |
| A · Skills | A2 | Descrições que acionam | Antes/depois | 45 min |
| A · Skills | A3 | Skill de método | Skill + tarefa real | 90 min |
| A · Skills | A4 | Skill do projeto | Skill + funcionalidade gerada | 60 min |
| A · Skills | A5 | Mapa do ecossistema de mercado | Mapa de fontes | 30 min |
| A · Skills | A6 | Ler skills de terceiros | Ficha de 3 skills | 45 min |
| A · Skills | A7 | Rubrica de avaliação (casos: Claude Octopus e Multi-Agent Debate) | 5 avaliações | 60 min |
| A · Skills | A8 | Teste controlado e adaptação | Antes/depois + skill adaptada | 75 min |
| A · Skills | A9 | Governança de skills na empresa | Política de 1 página | 30 min |
| B · Conectores e MCP | B1 | Conectores nativos e permissões | 2 conexões + tarefa | 60 min |
| B · Conectores e MCP | B2 | MCP: o padrão por trás | Mapa de oportunidades | 45 min |
| B · Conectores e MCP | B3 | Claude consultando os dados do seu produto (servidor MCP) | Claude consultando o projeto | 2–2,5 h |
| B · Conectores e MCP | B4 | Segurança em MCP | Checklist + correções | 45 min |
| C · Automação | C1 | Subagentes | 2 subagentes em uso | 90 min |
| C · Automação | C2 | Comandos personalizados | 2 comandos | 45 min |
| C · Automação | C3 | Verificações automáticas (hooks) | 2 hooks + teste de bloqueio | 60 min |
| C · Automação | C4 | Riscos da automação | Checklist | 30 min |
| D · Empacotamento | D1 | Plugins | Plugin instalado em projeto vazio | 75 min |
| D · Empacotamento | D2 | Orquestração: quando usar cada peça | 5 decisões justificadas | 45 min |
| D · Empacotamento | D3 | Kit HIC | README publicado | 45 min |

**Rubrica de skills de terceiros:** procedência, segurança (eliminatório), manutenção, licença, aderência e ganho medido.

**Árvore de decisão (D2):** skill quando o Claude precisa saber *como*; conector/MCP quando precisa *acessar*; subagente quando uma parte pede papel ou contexto separado; comando para sequência repetida; hook para verificação que deve acontecer sempre; n8n para fluxo de negócio entre sistemas; código para o núcleo, permissões, dados sensíveis e cobrança.

**Rubrica do marco T3**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Skill de método em tarefa real | Skill + resultado | Sim |
| Nenhuma skill de terceiro sem avaliação | Rubricas | Sim |
| Servidor MCP sem segredos e com permissões mínimas | Checklist B4 | Sim |
| Plugin HIC instalável em projeto vazio | Teste documentado | Sim |
| Skill do projeto em uso | Funcionalidade | Não |
| Skill de mercado testada e adaptada | Antes/depois | Não |
| 2 subagentes, 2 comandos, 2 hooks | Arquivos | Não |
| Política de governança e README do Kit | Documentos | Não |

**Atenção:** é a trilha mais densa e a que mais envelhece. Demonstrações curtas, com links para a documentação oficial; se o aluno precisar priorizar, bloco A e D1 entregam o maior retorno.

## T4 · Produto com IA

A feature de IA entra no produto medida, protegida e economicamente viável, em 18–24 horas. Princípio: os casos de avaliação são escritos antes da feature existir.

**Abertura:** em 15 minutos, a IA responde perguntas sobre os documentos do próprio projeto, com citação da fonte (RAG degrau 1). A trilha mostra como medir, proteger e tornar isso economicamente viável.

| Bloco | # | Lição | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| A · Fundamentos | A1 | Onde a IA agrega valor | `SPEC.md` atualizado | 45 min |
| A · Fundamentos | A2 | Evals desde o dia zero (20 casos-ouro) | Planilha + meta | 90 min |
| A · Fundamentos | A3 | Prototipar o prompt antes de integrar | Prompt v1 + resultado | 60 min |
| A · Fundamentos | A4 | API Anthropic no servidor | Feature + chave só no servidor | 75 min |
| B · Construção | B1 | Geração e classificação com saída estruturada | Validação de formato | 75 min |
| B · Construção | B2 | Respostas com base nos seus documentos (RAG, degrau 1) | Respostas com citação | 60 min |
| B · Construção | B3 | Selecionar os documentos certos (RAG, degrau 2) | Comparação nos casos-ouro | 75 min |
| B · Construção | B4 | Busca por significado (RAG, degrau 3, só se necessário) | Decisão de degrau justificada | 2–3 h |
| B · Construção | B5 | Citação e rastreabilidade | Citação verificada | 45 min |
| C · Proteção | C1 | Guardrails de entrada | Casos maliciosos passando | 75 min |
| C · Proteção | C2 | Guardrails de saída | Casos fora do escopo passando | 60 min |
| C · Proteção | C3 | Limites de uso por usuário | Teste de limite | 45 min |
| D · Qualidade e economia | D1 | Avaliação automática com IA como juiz, calibrada em 20 casos contra o aluno | Taxa de concordância | 90 min |
| D · Qualidade e economia | D2 | Descobrir por que a IA erra (análise de erros) | Falhas por categoria + novos casos | 75 min |
| D · Qualidade e economia | D3 | Escolha de modelo: custo × latência × qualidade | Tabela comparativa | 60 min |
| D · Qualidade e economia | D4 | Melhorar sem quebrar (versionamento e regressão, inclusive na troca de modelo) | Evals automáticos antes de mudanças | 60 min |
| D · Qualidade e economia | D5 | Custo por usuário | Planilha de custo | 45 min |
| D · Qualidade e economia | D6 | Fechamento da feature | Relatório de 1 página | 30 min |

**Composição dos 20 casos-ouro:** 8 típicos, 5 difíceis, 4 fora do escopo, 3 maliciosos. Meta geral definida pelo aluno (referência: 85%); fora do escopo e maliciosos: 100%.

**Sobre os 100%:** passar em todos os casos maliciosos e fora do escopo é o mínimo para seguir, não garantia de segurança. A cada falha encontrada em uso, um novo caso entra na base.

**Regra de subida de degrau no RAG:** só se passa ao próximo degrau quando o atual não atinge a meta nos casos-ouro.

**Rubrica do marco T4**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Chave da API apenas no servidor | Repositório + revisão | Sim |
| Evals atingindo a meta | Resultado do script | Sim |
| Maliciosos e fora do escopo: 100% | Resultado dos evals | Sim |
| Respostas com citação da fonte | Casos verificados | Sim |
| Limite de uso por usuário | Teste | Sim |
| Juiz calibrado | Taxa de concordância | Não |
| Análise de erros incorporada | Tabela + casos novos | Não |
| Modelo escolhido por dados | Tabela comparativa | Não |
| Regressão automática | Hook ou comando | Não |
| Custo por usuário e relatório | Planilha + documento | Não |

**Atenção:** evals são o conceito mais difícil da formação; o curso especializado de evals do benchmark fica como aprofundamento recomendado. Dados enviados à API devem ser fictícios ou anonimizados.

## T5 · Escala

O MVP passa a atender várias organizações (clientes, áreas ou departamentos) com segurança, é operado por painel administrativo e avisa quando algo dá errado, em 14–20 horas. Princípio: isolamento provado por teste antes de qualquer funcionalidade de escala.

**Abertura:** um evento real do produto dispara um aviso automático no Slack ou no e-mail via n8n. Em seguida, a trilha trata do que é preciso para atender vários clientes sem misturar dados.

| Bloco | # | Lição | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| A · Multi-organização | A1 | Atender vários clientes no mesmo produto | Diagrama + decisão | 45 min |
| A · Multi-organização | A2 | Migração segura (backup → teste → produção) | Migração sem perda | 2 h |
| A · Multi-organização | A3 | Convites e membros | Fluxo testado | 75 min |
| A · Multi-organização | A4 | IA isolada por organização (RAG filtrado) | Evals de acesso cruzado: 100% | 60 min |
| A · Multi-organização | A5 | Teste de isolamento | Relatório do roteiro | 60 min |
| B · Papéis e admin | B1 | Papéis e permissões no servidor e no banco | Teste de bloqueio | 75 min |
| B · Papéis e admin | B2 | Painel administrativo (organizações, usuários, uso e custo de IA) | Painel | 90 min |
| B · Papéis e admin | B3 | Trilha de auditoria | Registros consultáveis | 45 min |
| C · n8n | C1 | Fundamentos do n8n | Fluxo de teste | 45 min |
| C · n8n | C2 | Evento do produto → ação externa (webhook autenticado) | Fluxo + segredo | 60 min |
| C · n8n | C3 | Relatório agendado por organização | Relatório recebido | 60 min |
| C · n8n | C4 | Segurança no n8n | Checklist | 30 min |
| D · Operação | D1 | Ver o que acontece em produção (observabilidade) | Erros e chamadas consultáveis | 60 min |
| D · Operação | D2 | Monitoramento e alertas (fora do ar, erros, custo, qualidade) | Alerta disparado | 60 min |
| D · Operação | D3 | Backup e recuperação | Restauração testada | 45 min |
| D · Operação | D4 | Pagamentos (opcional, modo de teste) | Assinatura de teste | 2 h |

**Roteiro do teste de isolamento (A5):** nenhuma tela, requisição alterada, resposta de IA, arquivo, exportação ou relatório da Org A expõe dados da Org B; usuário removido perde acesso imediatamente.

**Rubrica do marco T5**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Teste de isolamento aprovado | Relatório A5 | Sim |
| IA sem acesso cruzado | Evals: 100% | Sim |
| Permissões no servidor e no banco | Teste de bloqueio | Sim |
| Migração sem perda de dados | Backup + registro | Sim |
| Webhooks do n8n autenticados | Checklist C4 | Sim |
| Painel com uso e custo por organização | Painel | Não |
| Auditoria, alertas e restauração testados | Registros | Não |
| Pagamentos em modo de teste (opcional) | Assinatura | Não |

**Atenção:** a A2 é a lição de maior risco técnico da formação. Os fluxos do n8n devem ser acessórios, nunca parte crítica do núcleo do produto.

## T6 · Autonomia

Um agente executa trabalho real do produto com autonomia proporcional ao risco, em 14–20 horas. Princípio: autonomia é concedida por ação, não por agente.

**Abertura:** um agente agendado conclui uma tarefa do produto sem o aluno presente e deixa a ação mais arriscada aguardando aprovação. É a demonstração concreta de um profissional entregando o trabalho de uma equipe.

**Matriz de autonomia**

| Nível | O agente… | Quando usar |
| --- | --- | --- |
| 1. Sugere | Propõe; o humano executa | Alto risco e irreversível |
| 2. Age com aprovação | Prepara e espera aprovação | Efeito externo (envio, dados de cliente, cobrança) |
| 3. Age e informa | Executa e avisa | Baixo risco e reversível |
| 4. Age sozinho | Executa sem aviso | Baixo risco, reversível e interno |

Regra: toda ação com efeito fora do produto começa no nível 2.

| Bloco | # | Lição | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| A · Fundamentos | A1 | Agente vs. fluxo fixo | Decisão no `SPEC.md` | 45 min |
| A · Fundamentos | A2 | Níveis de autonomia | Matriz preenchida | 45 min |
| A · Fundamentos | A3 | Especificação do agente | Seção do agente | 60 min |
| B · Construção | B1 | Ferramentas com permissões mínimas | Lista de ferramentas | 90 min |
| B · Construção | B2 | Ciclo com limites de passos, custo e tempo | Parada por limite | 90 min |
| B · Construção | B3 | Aprovação humana (fila no painel) | Aprovação e rejeição registradas | 75 min |
| B · Construção | B4 | Registro de execuções | Execuções no painel | 45 min |
| B · Construção | B5 | Interruptor de emergência | Teste de desligamento | 30 min |
| C · Escala de agentes | C1 | Multiagentes (orquestrador + especialista) | Decisão justificada | 90 min |
| C · Escala de agentes | C2 | Agentes que trabalham sem você (agendamento sem duplicação) | Execução sem duplicação | 75 min |
| C · Escala de agentes | C3 | Canais (opcional, visão genérica) | Conversa com usuário identificado | 45–60 min |
| D · Qualidade e segurança | D1 | Evals de agente (15 cenários de trajetória) | Script + resultado | 2 h |
| D · Qualidade e segurança | D2 | Segurança de agentes | Checklist + correções | 75 min |
| D · Qualidade e segurança | D3 | Fechamento do agente | Relatório de 1 página | 30 min |

**Canais (C3):** o agente é um só e os canais (Slack, Teams, WhatsApp, e-mail) são portas de entrada via adaptador. Toda conexão precisa de verificação de autenticidade, vínculo de identidade, tradução da mensagem, aprovação com verificação de papel e segredos protegidos. Regras de cada plataforma mudam com frequência; consultar a documentação oficial antes de construir.

**15 cenários de avaliação (D1):** 4 caminho feliz, 3 informação insuficiente, 3 ação de nível 2, 3 instrução maliciosa em dados ou ferramentas, 2 acesso cruzado. Aprovação, maliciosos e acesso cruzado: 100%.

**Rubrica do marco T6**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Efeito externo passa por aprovação humana | Fila + registros | Sim |
| Limites ativos | Parada por limite | Sim |
| Interruptor de emergência | Teste | Sim |
| Evals críticos a 100% | Script | Sim |
| Toda execução registrada | Painel | Sim |
| Matriz de autonomia e checklist de segurança | Documentos | Não |
| Agendamento sem duplicação | Registro | Não |
| Decisão sobre multiagentes | `SPEC.md` | Não |
| Canal conectado (opcional) e relatório | Registro + documento | Não |

## Trilha Transversal · Carreira e Governança

A capacidade técnica vira valor de mercado: posicionamento, decisão do que construir, distribuição, métricas, regras, preço e apresentação, em 8–10 horas. Cada lição é liberada quando o aluno tem material para aplicá-la.

**Abertura:** um case real de profissional que opera um produto sozinho, do posicionamento à receita.

| # | Lição | Liberada após | Evidência | Tempo |
| --- | --- | --- | --- | --- |
| X1 | Posicionamento do HIC | T1 | Posicionamento em 1 parágrafo | 45 min |
| X2 | Quando não construir | T1 | Matriz comprar / configurar / construir | 45 min |
| X3 | LGPD em produtos com IA | T2b | Mapa de dados + política de privacidade v1 | 75 min |
| X4 | Métricas de uso do produto | T2b | Métrica de sucesso da T1 instrumentada e visível no painel | 60 min |
| X5 | Distribuição e primeiros usuários | T2b | Plano de aquisição dos 10 primeiros usuários + primeira ação executada | 60 min |
| X6 | Precificação (custo por usuário + valor) | T4 | Planilha de precificação | 60 min |
| X7 | Governança de IA em empresas | T5 | Dossiê de governança | 60 min |
| X8 | Custo de operar sozinho | T6 | Rotina de operação | 45 min |
| X9 | Portfólio e build documentado | Contínua | Case publicado | 60 min |
| X10 | Pitch final (5 min) | Fim | Vídeo | 60 min |

**Dossiê de governança (X7):** cada pergunta da TI ou do compliance é respondida por uma evidência já produzida: isolamento (T5), auditoria (T5), evals (T4), casos maliciosos (T4 e T6), matriz de autonomia e aprovação (T6), mapa de dados (X3), interruptor de emergência (T6), rubricas de skills (T3).

**Estrutura do pitch (X10):** problema (45 s), solução com demonstração (60 s), confiabilidade (60 s), autonomia (45 s), negócio (45 s), próximos passos (25 s).

**Rubrica do marco final**

| Critério | Evidência | Eliminatório |
| --- | --- | --- |
| Case do projeto com evidências | Case publicado | Sim |
| Pitch de até 5 minutos | Vídeo | Sim |
| Mapa de dados e política de privacidade | Documentos | Sim |
| Precificação baseada em custo e valor | Planilha | Não |
| Dossiê de governança | Documento | Não |
| Posicionamento, matriz de decisão, métricas, plano de distribuição e rotina de operação | Documentos | Não |

**Atenção:** a X3 não é aconselhamento jurídico; em produto comercial ou empresa regulada, a política exige revisão por profissional de direito.

## Templates e checklists

Quatro ativos de uso direto, citados ao longo das trilhas.

### Template do `SPEC.md` (T1)

```markdown
# [Nome do projeto]

## 1. Problema
- Dor:
- Quem sofre:
- Frequência:
- Alternativa atual e por que é insuficiente:

## 2. Usuários e papéis
- Usuário principal:
- Outros papéis (gestor, admin):

## 3. Proposta de valor
- Em uma frase:
- Métrica principal de sucesso:

## 4. Escopo do MVP
- Funcionalidades (com critérios de aceite):
- Fora do escopo (ver BACKLOG.md):

## 5. Dados
- Quais dados o produto usa:
- Origem dos dados:
- Dados sensíveis e tratamento:

## 6. IA no produto
- Tarefa de IA:
- Base de conhecimento (RAG):
- Ação candidata a agente (com aprovação humana):

## 7. Regras e restrições
- Regras de negócio:
- Restrições técnicas e de segurança:

## 8. Decisões tomadas
- [data] decisão + motivo
```

### Checklist de elegibilidade do projeto (T1)

- [ ] Resolve um problema real do nicho, validado com pelo menos 3 pessoas
- [ ] Tem dados próprios que justificam RAG
- [ ] Tem pelo menos uma tarefa de IA clara
- [ ] Faz sentido com mais de um tipo de usuário
- [ ] Faz sentido para mais de uma organização: clientes, áreas ou departamentos (exigido na T5)
- [ ] Tem pelo menos uma ação que um agente poderia executar com aprovação humana
- [ ] O MVP cabe na T2b
- [ ] Não depende de dados sensíveis reais para funcionar

### Checklist de setup (T0)

- [ ] Conta no Claude com acesso ao Claude Code
- [ ] Contas no GitHub, Supabase e Vercel
- [ ] Git instalado (exigido pelo Claude Code); Node instalado (necessário a partir da T2)
- [ ] Editor instalado (para leitura)
- [ ] Claude Desktop instalado, com a aba de código funcionando
- [ ] Teste final: o Claude Code, no Desktop, criou um arquivo na pasta do repositório

### Critérios de escolha de ferramenta de usuários sintéticos (T1 e T2b)

- [ ] Suporta o idioma do público-alvo
- [ ] Termos claros sobre uso e retenção dos dados enviados
- [ ] Permite definir personas com o perfil do nicho
- [ ] Gera relatório exportável
- [ ] Custo compatível com 1–2 rodadas de teste

## Decisões e exclusões registradas

Registro do que foi decidido no desenho, para não reabrir sem motivo.

| Tema | Decisão |
| --- | --- |
| Número de aulas | Livre; estrutura em trilhas, não em encontros |
| Formato | 100% assíncrono; turma e mentoria ao vivo excluídas |
| Projeto âncora | Escolhido pelo aluno na T1, aplicado ao próprio nicho, filtrado pelo checklist de elegibilidade |
| Ensaio guiado | Mini-produto Diário de Bordo na T2a antes do projeto próprio |
| Avaliação | IA pré-avalia com rubrica, por evidência |
| Formato das lições | Texto, demonstração em passos com link externo opcional e prática interativa; sem gravação de vídeos próprios |
| Usuários sintéticos | Feitos por ferramentas externas; Claude só analisa e sintetiza |
| Validação real | Conversas com usuários reais continuam eliminatórias |
| Canais do agente | Tratados de forma genérica e opcional |
| Pagamentos | Lição opcional na T5 |
| Plataforma própria | Exclusiva deste curso: o Diário de Bordo de referência evoluído, construído pelo autor nas demonstrações; conteúdo provisório no repositório e no Tutor HIC até a V1 |

**Excluídos:** turma e mentoria ao vivo; organização de skills por função; biblioteca de skills como módulo de plataforma; construção do próprio testador de usuários com Claude; programação do zero; apps mobile.

**Em anexo como alternativas:** Lovable, Cursor, Codex, Bolt, v0, Firebase, OpenAI, LangSmith, Phoenix.

**Acrescentado após revisão crítica:** valor antes da teoria, com vitória de abertura em cada trilha; T0 reestruturada para começar por conectores e skills oficiais; nível sênior como regra de tom; Tutor HIC e Avaliador HIC como ativos do curso; lições de métricas de uso e distribuição na trilha transversal; critério de multi-organização no checklist de elegibilidade; margem de 30% na carga e saídas intermediárias explícitas.

**Acrescentado após validação pelo painel de agentes:** Diário de Bordo como produto de referência contínuo; objetivos de aprendizagem mensuráveis por trilha; diagnóstico de entrada com dispensa por evidência; cadência definida pelo aluno; custo das ferramentas na T0; organização inclui clientes, áreas ou departamentos; títulos sem jargão; 100% como mínimo, não garantia; juiz calibrado em 20 casos; regressão também na troca de modelo. Para a fase de plataforma: modo corporativo (ambientes aprovados, SSO) e certificação com verificação externa.

## Próximos passos

A ementa está fechada; o próximo trabalho é construir os ativos que precisam existir antes da T1 e iniciar a jornada do aluno zero.

**Ativos do curso a construir**

- [ ] Diário de Bordo de referência evoluindo até a T6 (base de todas as demonstrações)
- [ ] Tutor HIC: Project com conteúdo das trilhas, base de erros comuns e protocolo de debugging
- [ ] Avaliador HIC: skill que aplica as rubricas e o diagnóstico de entrada
- [ ] Skill de especificação (usada na T1)
- [ ] Curadoria prévia dos conectores e skills da T0 e da abertura da T3, com rubrica preenchida
- [ ] Tabela de custo das ferramentas (lição 0.3), com preços verificados
- [ ] `SPEC.md` do Diário de Bordo (T2a)
- [ ] Erro proposital da lição 2a.6
- [ ] Exemplos completos de casos-ouro de nichos diferentes (T4)
- [ ] Escolha da ferramenta de referência de usuários sintéticos (após teste do aluno zero)

**Jornada do aluno zero**

- [ ] Iniciar a T0 e registrar tempo e travas desde a lição 0.1
- [ ] Testar 2–3 ferramentas de usuários sintéticos com o próprio projeto
- [ ] Recalibrar as estimativas de esforço com os dados do Diário de Bordo
- [ ] Rodar com 2–3 pilotos externos de perfis diferentes antes de levar a uma empresa

**Manutenção:** revisão trimestral das lições que mais envelhecem (T3 e canais da T6), separando conteúdo atemporal de conteúdo de ferramenta.
