const prompt = require('prompt-sync')({ sigint: true });

const cardapio = {
  100: {
    preco: 1.7,
    nomeProduto: 'Cachorro quente',
  },
  101: {
    preco: 2.3,
    nomeProduto: 'Bauru Simples',
  },
  102: {
    preco: 2.6,
    nomeProduto: 'Bauru com ovo',
  },
  103: {
    preco: 2.4,
    nomeProduto: 'Hamburguer',
  },
  104: {
    preco: 2.5,
    nomeProduto: 'Cheeseburguer',
  },
  105: {
    preco: 1.0,
    nomeProduto: 'Refrigerante',
  },

  string: `
  100 | R$ 1,70 | Cachorro quente 
  101 | R$ 2,30 | Bauru Simples 
  102 | R$ 2,60 | Bauru com ovo 
  103 | R$ 2,40 | Hamburguer 
  104 | R$ 2,50 | Cheeseburguer 
  105 | R$ 1,00 | Refrigerante
  
  `,
};

console.clear();
console.log('Bem vindo à nossa casa de lanches!\n');

const pedidos = [];

while (true) {
  console.log(
    '\nDigite 0 para fechar sua conta, 1 para ver o cardápio ou qualquer outro valor para cadastrar um pedido.\n'
  );

  const entrada = prompt('Entrada: ');

  if (entrada.trim() !== '' && Number(entrada) === 0) break;
  if (entrada === Number(1)) {
    console.log(cardapio.string);
    continue;
  }

  while (true) {
    const numPedido = Number(prompt('Digite o número do produto: '));
    const qtd = Number(
      prompt('Digite a quantidade solicitada deste produto: ')
    );

    if (
      numPedido === 100 ||
      numPedido === 101 ||
      numPedido === 102 ||
      numPedido === 103 ||
      numPedido === 104 ||
      numPedido === 105 ||
      qtd > 0
    ) {
      pedidos.push({
        pedido: numPedido,
        qtd: qtd,
      });

      break;
    }

    console.log(
      '\nParece que o número do pedido ou a quantidade inseridos foram inválidos.'
    );
    console.log('Verifique os valores de entrada e tente novamente.\n');
  }
}

if (pedidos.length > 0) {
  let contaTotal = 0;

  console.log('Foram pedidos: \n');

  pedidos.forEach((pedido) => {
    const pedidoCardapio = cardapio[pedido.pedido];
    const total = pedidoCardapio.preco * pedido.qtd;
    contaTotal += total;

    console.log(
      `O total a pagar pelo pedido do ${
        pedidoCardapio.nomeProduto
      } é R$${total.toFixed(2)}.`
    );
  });

  console.log(`Valor total da compra: R$${contaTotal.toFixed(2)}`);
}
