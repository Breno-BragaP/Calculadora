# Calculadora

 ### Projeto de calculadora usando HTML, CSS e JavaScript

- Com 17 botões, com números de 0 a 9, 4 operações matemáticas, com 1 botão adicionar decimal, outro apagar toda a operação e o último para calcular o resultado.

- Utilizando DOM no elemento `<input>` para manipular os valores dos botões em funcões, sendo responsável pela visualização das operações do usuário.

##### Funções responsáveis pelo funcionamento da calculadora.
  
- A função `calculate(input)` é chamada quando qualquer botão, exceto os botões `C` e `=`, são clicados. É passado por parâmetro o valor (em forma de *string*) do botão, seja um número ou uma operação. Assim é somado o valor do `<input>` + o valor do botão clicado.

- A função `finalResult()` é chamada quando o botão `=` é clicado. Dentro desta função existe um bloco de `try/cacth`, que tenta atualizar o valor do elemento `<input>` com a função `eval()` passando como parâmetro o próprio valor do elemento. Caso o usuário não insira corretamente uma "expressão", o valor do elemento recebe a *string* `Error`. *Exemplo: o usuário clica em dois botões de operação (+/) e depois em = para ver o resultado ou quando apenas um número e um operador (5-) são clicados.*
  
*NOTA: O argumento da função `eval()` é uma string. Se a string representa uma expressão, `eval()` avalia a expressão. Deve ser usada somente para fins de estudo. Não utilize `eval()`, é uma função perigosa. [Saiba mais em...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval)

- A função `clearResult()` é chamada qunado o botão `C` é clicado. O valor do elemento `<input>` é atualizado para uma *string* vazia.

##### Design

- Inspirado no design da calculadora do Android 14. Utilizando CSS, o projeto só possui o tema escuro (quem usa tema claro?!😅). Todos os botões tem um efeito de *hover* quando o mouse passa por cima, tornando o fundo cinza claro.
  
- Os botões numéricos mais o decimal são azuis claros com fundo cinza não tão claro quanto o efeito *hover* (eu acho... 😕). 

- Os botões de operações são larajas com fundo cinza escuro.

- O botão *C* é vermelho com fundo cinza escuro.

- O botão de resultado é branco com fundo laranja claro.

- Além de claro, um enorme título **CALCULADORA** bem em cima 😉.