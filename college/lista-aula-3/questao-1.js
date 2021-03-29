// 1) Leia 20 valores reais e calcule seu somatório utilizando a instrução while
const prompt = require('prompt-sync')({ sigint: true });

let soma = 0;
let index = 1;

while (index <= 20) {
  const entrada = Number(prompt(`Digite a entrada ${index}: `));

  if (!isNaN(entrada)) {
    soma += entrada;
    index += 1;
  } else {
    console.log('Digite apenas números.');
  }
}

console.log(`A soma é: ${soma}`);
