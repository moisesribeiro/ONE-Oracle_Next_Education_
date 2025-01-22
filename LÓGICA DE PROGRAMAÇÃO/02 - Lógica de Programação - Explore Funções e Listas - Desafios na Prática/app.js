/**** LÓGICA DE PROGRAMAÇÃO: EXPLORE FUNÇÕES E LISTAS - INTERAGINDO COM HTML - DESAFIO: HORA DA PRÁTICA *****/ 

// 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerText = 'Hora do Desafio';

// 2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarClique() {
    console.log('O botão foi clicado!')
  }

// 3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. 

function verificarMensagem() {
    alert('Eu amo JS')
}   

// 4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function verificarPrompt() {
    let cidade = prompt('Qual cidade você mora?');
    alert(`Estive em ${cidade} e lembrei de você!`)
}   

// 5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function soma() {
    let num1 = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    alert(num1 + num2)              
}

/***** LÓGICA DE PROGRAMAÇÃO: EXPLORE FUNÇÕES E LISTAS - FUNÇÕES - DESAFIO: HORA DA PRÁTICA *****/ 

// 1. Criar uma função que exibe "Olá, mundo!" no console.  

function olaMundo() {
    console.log('Olá, mundo!')
}

olaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function boasVindas(nome) {
    console.log(`Olá, ${nome}!`)    
}   

boasVindas('Moisés Ribeiro');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.  

function dobrar(num) {
    return num * 2  
}

console.log(dobrar(10));

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3 
}   

console.log(media(10, 20, 30));    

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }   
} 

console.log(maior(100, 200));

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(num) {    
    return num * num
}

console.log(quadrado(120));

// 7. Criar uma função que recebe dois números como parâmetros e retorna o maior deles. Utilizar operador ternario.     

function maior2(num1, num2) {
    return num1 > num2 ? num1 : num2
}

console.log(maior2(100, 200));

/***** LÓGICA DE PROGRAMAÇÃO: EXPLORE FUNÇÕES E LISTAS - REINICIANDO O JOGO - DESAFIO: HORA DA PRÁTICA *****/

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    return peso / (altura * altura)
}

console.log(calcularIMC(1.80, 80));

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(num) {
    let fatorial = 1
    for (let i = num; i > 1; i--) {
        fatorial *= i
    }   
    return fatorial
}

console.log(calcularFatorial(5));   

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolar(dolar) {
    return dolar * 4.80
}

console.log(converterDolar(100));   

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function mostrarArea(largura, altura) {
    let area = largura * altura 
    return area 
}

console.log(mostrarArea(10, 20));   

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. 

function mostrarAreaCirculo(raio) {
    let area = 3.14 * raio * raio
    return area 
}

console.log(mostrarAreaCirculo(10));    

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(num) {      
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }   
}

mostrarTabuada(5);

/***** LÓGICA DE PROGRAMAÇÃO: EXPLORE FUNÇÕES E LISTAS - LISTAS - DESAFIO: HORA DA PRÁTICA *****/

// 1. Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = []  

// 2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

// 3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.   

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// 4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ['Arthur', 'Ana Júlia', 'Andrea']
console.log(nomes[0]);

// 5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.  

console.log(nomes[1]);

// 6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log(nomes[2]);  

