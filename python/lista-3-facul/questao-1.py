soma = 0;
index = 1;

while index <= 20:
  entrada = input(f'Digite a entrada {index}: ');

  if entrada.isnumeric():
    soma += int(entrada);
    index += 1;
  else:
    print('Digite apenas números.');

print(f'\nA soma é: {soma}');
