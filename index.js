/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


Ao final do processamento, qual será o valor da variável SOMA?  */

let INDICE = 13,
  SOMA = 0,
  K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(`1) ${SOMA}`); //Resposta 91

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
function fibonacciChecker(number) {
  let a = 0; 
  let b = 1;
  let soma = 0; 

  while (a <= number) {
    if (a === number) {
      return `${number} pertence à sequência de Fibonacci.`;
    }
    soma = a + b;
    a = b; 
    b = soma;
  }
  return `${number} não pertence à sequência de Fibonacci.`;
}
console.log(`2) ${fibonacciChecker(21)}`);

//3) Descubra a lógica e complete o próximo elemento:

//a) 1, 3, 5, 7, ___

let aSequencia = [1, 3, 5, 7];

let aLastKnownNumber = aSequencia[aSequencia.length - 1];

let aNextUnknownNumber = aLastKnownNumber + 2;

aSequencia.push(aNextUnknownNumber);

console.log(`(a) ${aSequencia}`); // Resposta 9

//b) 2, 4, 8, 16, 32, 64, ____
let bSequencia = [2, 4, 8, 16, 32, 64];

let bLastKnownNumber = bSequencia[bSequencia.length - 1];

let bNextUnknownNumber = bLastKnownNumber * 2;

bSequencia.push(bNextUnknownNumber);

console.log(`(b) ${bSequencia}`); // Resposta 128

//c) 0, 1, 4, 9, 16, 25, 36, ____
let cSequencia = [0, 1, 4, 9, 16, 25, 36];

let cNextUnknownNumber = cSequencia.length * cSequencia.length;

cSequencia.push(cNextUnknownNumber);

console.log(`(c) ${cSequencia}`); // Resposta 49

//d) 4, 16, 36, 64, ____
let dSequencia = [4, 16, 36, 64];

let dNextUnknownNumber =
  (dSequencia.length * 2 + 2) * (dSequencia.length * 2 + 2);

dSequencia.push(dNextUnknownNumber);

console.log(`(d) ${dSequencia}`); // Resposta 100

//e) 1, 1, 2, 3, 5, 8, ____
let eSequencia = [1, 1, 2, 3, 5, 8];

let eLastKnownNumber = eSequencia[eSequencia.length - 1];
let ePenultimateKnownNumber = eSequencia[eSequencia.length - 2];

let eNextUnknownNumber = eLastKnownNumber + ePenultimateKnownNumber;

eSequencia.push(eNextUnknownNumber);

console.log(`(e) ${eSequencia}`); // Resposta 13

//f) 2,10, 12, 16, 17, 18, 19, ____
let fSequencia = [2, 10, 12, 16, 17, 18, 19];

let fLastKnownNumber = fSequencia[fSequencia.length - 1];

let fNextUnknownNumber = fLastKnownNumber + 1;

fSequencia.push(fNextUnknownNumber);

console.log(`(f) ${fSequencia}`); // Resposta 20

/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? */

console.log(`4) Resposta: ligaria o primeiro interruptor e iria na sala ver se a lampada está acesa, saio da sala e desligo o primeiro interruptor,
ligo o segundo interruptor e deixo ligado por um tempo, desligo o segundo interruptor e vou na sala verificar se a lampada esta quente
se estiver quente é o segundo interruptor e se estiver fria é o terceiro interruptor`);


/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;



b) Evite usar funções prontas, como, por exemplo, reverse; */

function invertCharacters(word) {
  let wordInverse = "";

  for (let i = word.length - 1; i >= 0; i--) {
    wordInverse = wordInverse + word[i];
  }
  return wordInverse;
}
console.log(`5)${invertCharacters("frase grande ")}`);

