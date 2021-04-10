soma = 0;
index = 1;

# I'll use a flag as there is no do while in python
while True:
  entrada = input(f'Digite a entrada {index}: ');

  if entrada.isnumeric():
    soma += int(entrada);
    index += 1;
  else:
    print('Digite apenas números.');

  if index >= 20:
    break;

print(f'\nA soma é: {soma}');
