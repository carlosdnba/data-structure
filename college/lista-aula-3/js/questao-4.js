const prompt = require('prompt-sync')({ sigint: true });

let totalCobaias = 0;
// cod 1
let totalCoelhos = 0;
// cod 2
let totalRatos = 0;

console.log('Bem vindo à calculadora de cobaias!');

for (let i = 1; i <= 15; i++) {
  let tipo = 0;
  while (true) {
    console.log('');
    tipo = Number(
      prompt(
        `Digite o tipo de cobaia utilizada na experiência ${i} (1 para coelhos e 2 para ratos): `
      )
    );

    if (tipo === 1 || tipo === 2) break;

    console.log('Entrada inválida.');
  }

  const qtdCobaias = Number(prompt('Digite a quantidade de cobaias: '));

  totalCobaias += qtdCobaias;

  if (tipo === 1) totalCoelhos += qtdCobaias;
  if (tipo === 2) totalRatos += qtdCobaias;
}

console.log(`Na experiência foram utilizadas ${totalCobaias} cobaias.`);
console.log(`Na experiência foram utilizadas ${totalCoelhos} coelhos.`);
console.log(`Na experiência foram utilizadas ${totalRatos} ratos.`);

console.log(`Foram ${(totalCoelhos/totalCobaias * 100).toFixed(2)}% de coelhos e ${(totalRatos/totalCobaias * 100).toFixed(2)}% de ratos.`)
