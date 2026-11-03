# A2 · Quanto o agente pode fazer sozinho, ação por ação (níveis de autonomia)

- **Trilha:** T6 · Autonomia
- **Tempo:** 45 min
- **Evidência:** matriz preenchida
- **Status:** rascunho, ainda não cursado pelo aluno zero

## Por quê

Autonomia é concedida por ação, não por agente (programa em que a IA escolhe passos e usa ferramentas). O mesmo agente pode gravar uma nota sozinho e precisar de aceite para enviar um e-mail.

Nível de autonomia é quanto o agente faz sem um humano, de 1 a 4. Ele segue o risco de cada ação. Regra do curso: toda ação com efeito fora do produto começa no nível 2.

A matriz preenchida vira contrato. O código, a aprovação e os testes das próximas lições seguem dela.

## Demonstração

Exemplo: o agente semanal do Diário de Bordo, que analisa travas, sugere o próximo passo e alerta o gestor.

1. Liste as ações do agente:
   - ler os registros da semana
   - calcular o atraso contra as datas-alvo
   - gravar a sugestão no painel do aluno
   - enviar alerta por e-mail ao gestor
   - remover aluno inativo da turma
2. Para cada ação, responda: é reversível? Sai do produto? Qual o dano se errar?
3. Classifique com a matriz (veja "Matriz de autonomia", na Referência).
4. Ler registros e calcular atraso: nível 4. São internas e só leem.
5. Gravar a sugestão: nível 3. É interna e reversível; o aluno vê e pode descartar.
6. Enviar alerta ao gestor: nível 2. É um envio, ou seja, efeito externo.
7. Remover aluno: nível 1. É difícil de desfazer; o agente só sugere.
8. Defina quem aprova o nível 2. No Diário, o admin da organização. [LACUNA: a ementa não define quem aprova o alerta ao gestor no Diário de Bordo]
9. Registre a matriz no `SPEC.md` (arquivo de especificação do projeto), seção 6.
10. Peça ao Claude Code: "Revise esta matriz. Aponte ações com efeito externo acima do nível 2."
11. Peça um commit (versão salva no git).

## Prática

1. Abra o `SPEC.md` do seu projeto no Claude Code.
2. Liste todas as ações do agente decidido na lição A1 da T6, inclusive as de leitura.
3. Responda, para cada ação, as três perguntas do passo 2 da Demonstração.
4. Preencha o template da matriz (veja "Template da matriz", na Referência).
5. Defina o papel que aprova as ações de nível 2. Ex.: admin da organização (papéis da lição B1 da T5).
6. Peça a revisão ao Claude Code e ajuste.
7. Registre na seção 6 do `SPEC.md` e peça um commit.

## Checagem

Entrega: matriz na seção 6 do `SPEC.md`, com todas as ações, nível, motivo e aprovador do nível 2.

## Referência

**Termos**

- Agente: programa em que a IA escolhe os próximos passos e usa ferramentas até cumprir um objetivo
- Nível de autonomia: quanto uma ação do agente acontece sem humano, de 1 (sugere) a 4 (age sozinho)
- Efeito externo: ação que sai do produto, como envio, dado de cliente ou cobrança
- Aprovador: papel do produto que aceita ou recusa ações de nível 2
- `SPEC.md`: especificação do projeto, criada na lição 1.6 da T1
- Commit: versão salva no git

**Matriz de autonomia**

| Nível | O agente… | Quando usar |
| --- | --- | --- |
| 1. Sugere | Propõe; o humano executa | Alto risco e irreversível |
| 2. Age com aprovação | Prepara e espera aprovação | Efeito externo (envio, dados de cliente, cobrança) |
| 3. Age e informa | Executa e avisa | Baixo risco e reversível |
| 4. Age sozinho | Executa sem aviso | Baixo risco, reversível e interno |

- Regra: toda ação com efeito fora do produto começa no nível 2
- Na dúvida entre dois níveis, fique com o menor

**Template da matriz**

| Ação | Reversível? | Sai do produto? | Nível | Motivo | Aprovador (nível 2) |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

**Erros comuns**

- Dizer "o agente é nível 3": o nível é de cada ação
- Subir o nível de um envio por conveniência
- Esquecer que alterar ou apagar dado de cliente é efeito externo, mesmo dentro do produto
