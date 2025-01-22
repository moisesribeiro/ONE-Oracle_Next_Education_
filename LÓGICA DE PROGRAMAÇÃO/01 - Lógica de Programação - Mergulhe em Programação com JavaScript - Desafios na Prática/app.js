/***** LÓGICA DE PROGRAMAÇÃO: MERGULHE EM PROGRAMAÇÃO COM JAVASCRIPT - INICIANDO COM JAVASCRIPT - DESAFIO: HORA DA PRÁTICA *****/ 

// 1.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert('Boas vindas ao nosso site!')

// 2.Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = 'Lua'

// 3.Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = 25

// 4.Defina uma variável numeroDeVendas e atribua a ela o valor 50. 

let numeroDeVendas = 50

// 5.Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

let saldoDisponivel = 1000

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos"

alert('Erro! Preencha todos os campos')

/* 7.Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! 
Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
*/

let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro)   

// 8.Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

let nomeDoUsuario = prompt('Qual é seu nome?')

// 9.Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

let idadeDoUsuario = prompt('Qual é sua idade?')

// 10.Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
  

if (idadeDoUsuario >= 18) {
    alert('Pode tirar a habilitação!')
}
else
    if (idadeDoUsuario < 18) {
    alert('Ainda não pode tirar a habilitação!')          
}

/***** LÓGICA DE PROGRAMAÇÃO: MERGULHE EM PROGRAMAÇÃO COM JAVASCRIPT - CONDICIONAIS E CONCATENAÇÃO - DESAFIO: HORA DA PRÁTICA *****/ 

// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".


let diaDaSemana = prompt('Qual o dia da semana?')

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite um número')

if (numero > 0) {
    alert('O número é positivo')
} else {
    alert('O número é negativo')        
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".


let pontuacao = prompt('Digite a pontuação')

if (pontuacao >= 100) {
    alert('Parabéns, vocé venceu!') 
} else {
    alert('Tente novamente para ganhar.')       
} 

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1000
alert(`O saldo da sua conta é ${saldo}`)    

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Digite seu nome')
alert(`Bem-vindo, ${nome}`) 

/***** LÓGICA DE PROGRAMAÇÃO: MERGULHE EM PROGRAMAÇÃO COM JAVASCRIPT - LOOPS E TENTATIVAS - DESAFIO: HORA DA PRÁTICA *****/ 

// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1

while (contador <= 10) {
    alert(contador)
    contador++    
}   

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10

while (contador2 >= 0) {
    alert(contador2)
    contador2--    
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero3 = prompt('Digite um número')

while (numero3 >= 0) {
    alert(numero3)
    numero3--       
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero4 = prompt('Digite um número')

while (numero4 >= 0) {
    alert(numero4)
    numero4++   
}

/***** LÓGICA DE PROGRAMAÇÃO: MERGULHE EM PROGRAMAÇÃO COM JAVASCRIPT - BOAS PRÁTICAS DE PROGRAMAÇÃO - DESAFIO: HORA DA PRÁTICA *****/ 

// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Bem-vindo ao meu programa')    

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = ('Moisés Ribeiro');
console.log(`Olá, ${nome}`);


// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = prompt('Digite seu nome')
alert(`Olá, ${nome}`)

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemDeProgramacao = prompt('Qual a linguagem de programação que vocé mais gosta?')
console.log(linguagemDeProgramacao)

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.  

let valor1 = prompt('Digite um número') 
let valor2 = prompt('Digite outro número')
let resultado = parseInt(valor1) + parseInt(valor2)
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`)

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.  

let valor1 = prompt('Digite um número') 
let valor2 = prompt('Digite outro número')
let resultado = parseInt(valor1) - parseInt(valor2)
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`)   

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt('Digite sua idade')
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')       
}

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem. 

let numero = prompt('Digite um número')
if (numero > 0) {    
    console.log('O número é positivo')
} else if (numero < 0) {
    console.log('O número é negativo')
} else {
    console.log('O número é zero')  
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = prompt('Digite uma nota')    
if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')        
}   

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.    

console.log(Math.random())  

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.    

console.log(Math.floor(Math.random() * 11)) 

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.    

console.log(Math.floor(Math.random() * 1001)) 

