totalCobaias = 0;
totalCoelhos = 0;
totalRatos = 0;

print('Bem vindo à calculadora de cobaias!');

for i in range(1, 4):
  while True:
    tipo = input(f'Digite o tipo de cobaia utilizada na experiência {i} (1 para coelhos e 2 para ratos): ');

    if tipo.isnumeric():
      if int(tipo) == 1: 
          qtdCobaias = int(input('Digite a quantidade de cobaias: '));
          totalCoelhos += qtdCobaias;
          totalCobaias += qtdCobaias;
          break;
      elif int(tipo) == 2: 
        qtdCobaias = int(input('Digite a quantidade de cobaias: '));
        totalRatos += qtdCobaias;
        totalCobaias += qtdCobaias;
        break;
      else:
        print('Entrada inválida.');
    else:
      print('Entrada inválida.');

else:
  print(f'Na experiência foram utilizadas {totalCobaias} cobaias.')
  print(f'Na experiência foram utilizadas {totalCoelhos} coelhos.')
  print(f'Na experiência foram utilizadas {totalRatos} ratos.')

  print(f'Foram {(totalCoelhos/totalCobaias * 100):.2f}% de coelhos e {(totalRatos/totalCobaias * 100):.2f}% de ratos.')
