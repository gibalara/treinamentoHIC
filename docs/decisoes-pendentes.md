# Decisões pendentes

Levantadas na escrita e revisão das trilhas T1 a T6 e transversal (novembro de 2026). Cada decisão tomada vai para a ementa e sai desta lista.

## 1. Ativos que bloqueiam cursar (sem eles, a lição não é executável)

| Ativo | Lições afetadas |
| --- | --- |
| Skill de especificação (entrega e instalação) | 1.1, 1.6 |
| Avaliador HIC (entrega e execução) | 1.9, 2a.8, 2b.10, D3 da T3, D6 da T4, D3 da T6 |
| `SPEC.md` do Diário de Bordo | 2a.1, X4 (métrica principal) |
| Erro proposital da 2a.6 (sintoma e entrega) | 2a.6 |
| Ferramenta de referência de usuários sintéticos | 1.2a, 2b.8 |
| Script de evals de referência + exemplos de casos-ouro | A2 e D1 da T4 (sem eles, evals dificilmente são executáveis por não desenvolvedor) |
| Diário de Bordo de referência evoluído (pasta `conteudo/`, conta de teste, `evals/casos-ouro.csv`, agente pronto) | Demonstrações da T3 à T6 |
| Coleção pré-avaliada e rubricas preenchidas (Claude Octopus, Multi-Agent Debate) | A1 e A7 da T3 |
| Autenticação de referência do servidor MCP sem chave de administração | B3 e B4 da T3 (eliminatório) |
| Método de backup e restauração sem terminal | A2 e D3 da T5 (eliminatório) |

## 2. Decisões de ementa

| Tema | Pergunta | Lições |
| --- | --- | --- |
| Tecnologia do app | Qual framework? (afeta comandos, `.env.local`, prefixo `NEXT_PUBLIC_`) | 2a.1, A4 da T4 |
| Exceção da T2a | Registrar que a prática da T2a é no próprio Diário do aluno (repositório `diario-de-bordo`) | 2a.1–2a.8 |
| Ordem login × tela | 2b.1/2b.4 exigem login antes de tela com dados; T2a faz tela → banco → login | 2a, 2b |
| Template T2a → T2b | Como a estrutura da T2a vira modelo da T2b; MVP dentro de `projeto-hic`? | 2b.1 |
| Repositório na T1 | Nasce na 1.1 (Claude Code grava) ou na 1.6 (hoje: 9 downloads manuais)? | 1.1–1.6 |
| Aluno dispensado | "Kit mínimo" para quem começa na 2b.1 (pula 0.3–0.5 e T2a, não tem Diário) | 2b.1, D2 da T3 |
| Vitórias de abertura | T5 e T6 não têm vitória na primeira hora; T4 usa aproximação (A1) | A1 da T4, T5, A1 da T6 |
| Evidência da B3 da T4 | Aceitar "comparação ou decisão de não subir de degrau" | B3, B4 da T4 |
| Casos-ouro | Confirmar que a base cresce além de 20 (C1, C2, D2 da T4) e que a calibração fica nos 20 originais | T4 |
| Metas | Taxa mínima de concordância do juiz (D1 da T4); metas de caminho feliz e informação insuficiente (D1 da T6) | T4, T6 |
| Kit HIC | Inclui servidor MCP? Público ou privado? Licença? Plugin pessoal ou de projeto? | A1, D1, D3 da T3 |
| Pilha | Provedor de embeddings (B4 da T4); agendador padrão (C2 da T6); canal de envio após aprovação (B3 da T6); provedor de pagamento (D4 da T5); editor de referência (0.4) | várias |
| Organizações de teste | Criar organizações TESTE em produção ou usar ambiente de preview | A5, B2, C3, D4 da T5 |
| Limites | Regra dos limites do agente (ex.: 2× o maior observado); limite diário de uso da IA | B2 da T6, C3 da T4 |
| X7 | Liberar após a T6 (dossiê usa evidências da T6) ou aceitar dossiê em duas etapas | X7 |
| LGPD | Conteúdo mínimo revisado por profissional de direito (bases legais, dado sensível, retenção, direitos) | X3, 1.9 |
| Checklist de segurança de agentes | Validar os 14 itens derivados e levar aos templates da ementa | D2 da T6 |
| Termos fora da ementa | CAC, LTV e churn: incluir na planilha da X6 ou cortar | X5, X6 |
| Case Fitfolio | Autorização do fundador; dado de receita; confirmar vídeo como canal; incluir X8 na tabela do insumo | X1, X4, X5, X8 |
| Custos | Limite de projetos ativos no plano gratuito do Supabase (Diário + MVP) na tabela da 0.3 | 0.3, 2b.3 |
| Checagens com duas partes | 2a.2, 2b.3, 2b.5, 2b.7, X3, X4, X10, 0.5: aceitar como entrega única ou ajustar evidência | várias |

## 3. Medir com o aluno zero (tempo provavelmente curto)

1.1, 1.2b, 2a.4, 2a.5, 2b.3, A1 e A7 da T3, B4 e D1 da T4, A2 da T5, D3 da T6, X8.

## 4. Conferir na interface (só o autor consegue)

- Claude Desktop: criar sessão, abrir pasta, aprovação de plano, preview do app local, skills, plugins locais, hooks no Windows, MCP, subagentes, busca na web, download de `.md` gerado no chat.
- Supabase: chaves, SQL Editor, importação de CSV, RLS padrão, confirmação de e-mail, URL do site, backups por plano.
- Vercel: variáveis de ambiente, repositório privado, nova publicação após envio.
- n8n: nós, autenticação por cabeçalho, endereço de teste × produção, exportação de fluxo.
- Console da Anthropic: chave, limite de gasto, modelos e preços vigentes.
