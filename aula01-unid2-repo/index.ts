let nome: string; //linguagem de tipagem de coisas e evitar erros
let num: number;
let verdadeiro: boolean;

// para tipar algo, basta colocar : e o nome do tipo de dado

nome = 'Mateus';
num = 15;
verdadeiro = true;

function bemVindo(nome: string = 'guesth'){
    let msg = `Seja bem vindo ${nome}`
    document.write(msg)
}

bemVindo('Mateus');

function sum(a:number, b:number):number {
    return a+b+4;
}

document.write(`A soma de 2 + 2 + 3 é ${sum(2, 2)}`)

// Para criar um tipo, basta colocar 'type' e o nome do tipo, como no exemplo a seguir:

type pessoaProps = {
    nome: string,
    idade: number,
    genero?: string
}

// Em um tipo criado por você que for um objeto, e você quer criar uma propriedade que seja opicional, basta colocar o sinal interrogação: '?' antes do dois pontos.


let pessoa: pessoaProps = {
    nome: 'Mateus',
    idade: 15,
    genero: 'Masculino'
}

let otherPessoa: pessoaProps = {
    nome: 'Gleidson',
    idade: 32,
}

// Podemos também exercer a tipagem de arrays escrevendo o nome do tipo + [] como no exemplo abaixo:

let numero: number[] = [1,2,3];

function arrayNumero(){
    for (let i: number = 0; i < numero.length; i++) {
        console.log(numero[i]);
    }
}

arrayNumero();

let pessoas: pessoaProps[] = [
    {
        nome: 'Arthur',
        idade: 17,
        genero: 'Masculino'
    }
]