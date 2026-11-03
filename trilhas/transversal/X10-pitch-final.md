# X10 · Apresentar o produto em 5 minutos (pitch final)

- **Trilha:** Transversal · Carreira e Governança
- **Tempo:** 60 min
- **Evidência:** vídeo
- **Liberada após:** fim
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Cliente, empresa ou investidor decide em minutos. O pitch é a apresentação curta que mostra o produto e por que confiar nele.

Você já tem todo o material: posicionamento, case, métricas, preço e dossiê. O pitch organiza isso em 5 minutos, com demonstração do produto funcionando.

O vídeo de até 5 minutos é eliminatório no marco final.

## Demonstração

Exemplo: o Diário de Bordo (app de registro da jornada do curso), com Tutor de IA, organizações e agente semanal.

1. Abra a pasta do Diário no Claude Code (o Claude trabalhando na pasta do projeto, lição 0.4 da T0).
2. Peça: "Leia posicionamento, case, dossiê de governança, planilha de precificação e rotina de operação. Escreva o roteiro do pitch nos 6 blocos da Referência, com o tempo de cada um."
3. Confira se cada bloco cita uma evidência que aparece na tela.
4. Bloco solução: escolha uma tela, como o registro de uma lição e o painel atualizando.
5. Bloco confiabilidade: mostre o resultado dos evals (testes de qualidade da IA) e o teste de isolamento.
6. Bloco autonomia: mostre o agente propondo uma ação e a fila de aprovação.
7. Leia o roteiro em voz alta com cronômetro. Corte até ficar em 4 min 40 s.
8. Grave tela e voz numa só tomada. [LACUNA: ferramenta de gravação de referência não definida na ementa]
9. Assista e confira a duração: até 5 minutos.

## Prática

1. Abra no Claude Code a pasta do seu projeto.
2. Peça o roteiro nos 6 blocos, a partir dos seus documentos da trilha transversal.
3. Marque, em cada bloco, a tela ou o arquivo que aparece.
4. Ensaie com cronômetro até caber em 4 min 40 s.
5. Grave o vídeo com tela e voz.
6. Assista uma vez como se fosse o cliente. Regrave se algum bloco não tiver prova na tela.
7. Salve o roteiro em `pitch.md` e o link do vídeo no case (X9 desta trilha). Peça um commit (versão salva do projeto).

## Checagem

Entrega: vídeo de até 5 minutos com os 6 blocos + `pitch.md` com o roteiro.

## Referência

**Estrutura do pitch**

| Bloco | Tempo | O que mostrar | Fonte |
| --- | --- | --- | --- |
| Problema | 45 s | Dor validada e quem sofre | T1; posicionamento (X1 desta trilha) |
| Solução com demonstração | 60 s | O produto funcionando | URL do produto |
| Confiabilidade | 60 s | Evals, isolamento, segurança | T4, T5; dossiê (X7 desta trilha) |
| Autonomia | 45 s | Agente com limites e aprovação humana | T6 |
| Negócio | 45 s | Preço, custo, métrica, primeiros usuários | X4, X5, X6, X8 desta trilha |
| Próximos passos | 25 s | O que vem e o que você pede | Backlog e plano |

- Total: 4 min 40 s; sobram 20 s de folga

**Termos**

- Pitch: apresentação curta do produto para quem decide
- Evals: testes de qualidade da IA, com casos e meta
- Isolamento: um cliente nunca vê dados de outro
- Agente: IA que executa tarefas do produto, com aprovação nas ações de risco

**Cuidados**

- Demonstração com dados fictícios, nunca de usuários reais
- Nenhum segredo (senha ou chave de acesso) na tela
- Uma tomada só evita cortes que parecem esconder falha

**Pedidos ao Claude Code**

- "Escreva o roteiro do pitch nos 6 blocos, com tempo e a evidência de cada um."
- "Corte o roteiro para caber em 4 min 40 s, sem perder as evidências."
