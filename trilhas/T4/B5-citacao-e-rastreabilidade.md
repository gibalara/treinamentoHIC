# B5 · Toda resposta com fonte conferível (citação e rastreabilidade)

- **Trilha:** T4 · Produto com IA
- **Tempo:** 45 min
- **Evidência:** citação verificada
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Resposta sem fonte exige confiança cega. Com citação, o usuário confere a origem em um clique.

A IA também pode citar um trecho que não existe. Por isso o servidor confere cada citação antes de mostrar.

Rastreabilidade é poder reconstruir qualquer resposta: pergunta, documentos enviados, prompt, modelo e resultado. Sem ela, não dá para investigar erros. Resposta com citação da fonte é eliminatória no marco da T4.

## Demonstração

Exemplo: o tutor do Diário de Bordo, que responde com base nos registros e no conteúdo do curso, com citação.

1. Peça ao Claude Code: "Mostre cada citação abaixo da resposta do tutor, com link para o registro ou a seção da lição citada."
2. Peça: "No servidor, confira se cada trecho citado existe no documento enviado. Remova a citação que não conferir. Se nenhuma conferir, mostre 'Não encontrei base nos seus documentos'."
3. Peça: "Crie a tabela de registro do tutor: data, usuário, pergunta, documentos enviados, versão do prompt, modelo, resposta, citações, tokens e latência. Aplique RLS por usuário."
4. Peça: "Guarde só o necessário para investigar erros. Não guarde dados que o tutor não usa."
5. Rode os 20 casos-ouro com a conta de teste.
6. Nos casos típicos e difíceis, clique em cada citação e confira o trecho. Marque a coluna nova `citacao_ok`.
7. Escolha uma resposta qualquer e reconstrua pela tabela: documentos enviados, versão do prompt e modelo.
8. Peça: "Faça um commit com a mensagem 'Adiciona citação verificada e registro de chamadas do tutor'."

## Prática

1. Peça a exibição das citações da sua feature, com link para a fonte.
2. Peça a conferência das citações no servidor, com mensagem padrão quando nenhuma conferir.
3. Peça a tabela de registro das chamadas, com RLS por usuário.
4. Revise os campos guardados e retire o que a investigação não usa.
5. Rode os 20 casos-ouro e confira cada citação dos típicos e difíceis.
6. Marque a coluna `citacao_ok`.
7. Reconstrua uma resposta pela tabela de registro.
8. Peça o commit.

## Checagem

Entrega: planilha com a coluna `citacao_ok` preenchida nos casos típicos e difíceis + print de uma resposta reconstruída pela tabela de registro.

## Referência

**Termos**

- Citação: indicação do documento e do trecho que sustentam a resposta
- Citação verificada: o servidor confirmou que o trecho existe no documento enviado
- Rastreabilidade: poder reconstruir como cada resposta foi gerada
- Registro de chamadas (log): tabela com os dados de cada chamada à IA
- Versão do prompt: arquivo numerado da instrução usada (lição D4 da T4)
- RLS: regra no banco que limita quais linhas cada usuário vê (lição 2a.5 da T2a)
- Token: pedaço de palavra; a API conta e cobra por tokens
- Latência: tempo entre o envio da pergunta e a chegada da resposta

**Campos do registro de chamadas**

| Campo | Para que serve |
| --- | --- |
| Data e usuário | Achar a chamada |
| Pergunta | Reproduzir o caso |
| Documentos enviados | Separar falha de seleção de falha de resposta (lição D2 da T4) |
| Versão do prompt e modelo | Comparar versões (lição D4 da T4) |
| Resposta e citações | Conferir o resultado |
| Tokens e latência | Custo e tempo (lições D3 e D5 da T4) |

**Pedidos ao Claude Code**

- "Mostre cada citação com link para a fonte."
- "Confira no servidor se cada trecho citado existe no documento enviado."
- "Crie a tabela de registro das chamadas com RLS por usuário."

**Cuidados**

- O registro guarda perguntas de usuários: trate como dado pessoal (lição X3 da trilha Transversal)
- Citação que não confere nunca aparece para o usuário
