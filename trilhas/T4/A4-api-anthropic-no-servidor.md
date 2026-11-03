# A4 · A IA dentro do seu app, com a chave protegida (API Anthropic no servidor)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 75 min
- **Evidência:** feature + chave só no servidor
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

No app, a IA não vem do seu chat: o servidor chama a API Anthropic. A chave de API autoriza e cobra cada chamada.

Se a chave chegar ao navegador, qualquer usuário a copia e gasta por você. Por isso, toda chamada de IA fica no servidor.

Chave só no servidor é critério eliminatório do marco da T4.

## Demonstração

Exemplo: a primeira versão do tutor do Diário de Bordo, que vai responder sobre os registros e o curso.

1. No Console da Anthropic, crie a conta de API, cadastre o pagamento e defina um limite de gasto mensal. [VERIFICAR NA INTERFACE]
2. Gere uma chave chamada `diario`. Copie e não cole em nenhuma conversa. [VERIFICAR NA INTERFACE]
3. Peça ao Claude Code: "Crie o arquivo `.env.local` com a variável `ANTHROPIC_API_KEY` vazia e confirme que ele está no `.gitignore`."
4. Abra o `.env.local` no editor (checklist de setup da lição 0.4 da T0), cole a chave e salve.
5. Peça: "Crie a tela 'Pergunte ao tutor' e uma rota de servidor com login obrigatório. A rota chama a API Anthropic com `prompts/tutor-v1.md` e devolve a resposta. A chave só pode ser lida no servidor. Deixe o nome do modelo numa configuração única."
6. Antes de aprovar, peça: "Explique onde a chave é lida e se ela pode chegar ao navegador."
7. Peça: "Rode o app no meu computador e me dê o endereço." Abra o endereço no navegador.
8. Entre com a conta de teste e pergunte: "O que é um commit?". Deu certo se vier uma resposta. Ela ainda não usa seus documentos; isso entra na B2 da T4.
9. Peça: "Procure a chave nos arquivos do repositório, no histórico do git e no código enviado ao navegador. Liste onde aparece." Esperado: só no `.env.local`.
10. Na Vercel, cadastre `ANTHROPIC_API_KEY` nas variáveis de ambiente do projeto. [VERIFICAR NA INTERFACE]
11. Peça: "Faça um commit com a mensagem 'Conecta tutor à API Anthropic no servidor' e envie ao GitHub."
12. A Vercel publica a nova versão (lição 2a.8 da T2a). Na URL pública, teste logado. Depois abra a URL numa janela anônima, sem login: o tutor deve recusar.

[LINK A CURAR: guia oficial da Anthropic de primeiros passos com a API]

## Prática

1. Crie a conta de API no Console, com limite de gasto mensal, e gere a chave do seu projeto.
2. Abra a pasta do seu projeto em **Manual**. Peça o `.env.local` com `ANTHROPIC_API_KEY` vazia, protegido pelo `.gitignore`.
3. Cole a chave no `.env.local` pelo editor.
4. Peça a tela e a rota de servidor da feature, com login e o prompt da lição A3 da T4. Use o pedido do passo 5 da Demonstração desta lição.
5. Peça a explicação de onde a chave é lida. Só aprove se a resposta disser que ela fica no servidor.
6. Peça para rodar o app no seu computador e teste com a conta de teste e dados fictícios.
7. Peça a busca pela chave no repositório, no histórico e no navegador. Esperado: só no `.env.local`.
8. Cadastre a variável na Vercel.
9. Peça o commit e o envio ao GitHub.
10. Na URL pública, teste logado e numa janela anônima, sem login.

## Checagem

Entrega: feature respondendo na URL pública + resultado da busca pela chave mostrando que ela só existe no servidor.

## Referência

**Termos**

- API: porta pela qual o seu app pede respostas ao Claude, pagas por uso
- Chave de API: senha que autoriza e cobra as chamadas
- Console da Anthropic: site onde você cria a conta de API e as chaves; cobrança separada da assinatura do Claude
- Servidor: parte do app que roda na Vercel, fora do navegador do usuário
- Rota de servidor: endereço do app que executa no servidor
- Variável de ambiente: segredo guardado fora do código (lição 2a.8 da T2a)
- `.env.local`: arquivo de segredos que fica só no seu computador
- `.gitignore`: lista do que o git não salva
- Modelo: versão do Claude que responde; a escolha por dados é na lição D3 da T4
- Modelo inicial: [VERIFICAR: modelo indicado hoje na documentação oficial da Anthropic para começar]

**Pedidos ao Claude Code**

- "Crie o `.env.local` com `[VARIÁVEL]` vazia e confirme que ele está no `.gitignore`."
- "Explique onde a chave é lida e se ela pode chegar ao navegador."
- "Procure a chave nos arquivos do repositório, no histórico do git e no código enviado ao navegador."

**Regras**

- Toda chamada de IA no servidor
- Chave só em variável de ambiente; nunca no código, no chat ou em print
- Rota de IA exige login (o limite por usuário vem na lição C3 da T4)
- Dados enviados à API: fictícios ou anonimizados

**Erros comuns (Tutor HIC)**

| Erro | Causa | Solução |
| --- | --- | --- |
| Chave em commit | Arquivo de segredos fora do `.gitignore` | Revogar a chave no Console e gerar outra; apagar do código não basta, ela fica no histórico |
| Chave visível no navegador | Variável com prefixo que a expõe ao navegador (no Next.js, `NEXT_PUBLIC_`) [VERIFICAR: framework usado na T2a] | Remover o prefixo e chamar a API só pela rota de servidor |
| Funciona local, falha na Vercel | Variável não cadastrada na Vercel | Cadastrar e publicar de novo |
| Erro de crédito | Conta de API sem pagamento ou acima do limite | Conferir cobrança e limite no Console |
