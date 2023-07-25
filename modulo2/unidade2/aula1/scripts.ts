let nome : string;
nome = "Rafael";

let numero : number;
numero = 20;

let verdadeiro : boolean;
verdadeiro = true;

function boasVindas(nome: string = "Alunos"){
    document.write(`Seja bem-vindo(a) ${nome}<br>`);
}

boasVindas("João");

function somar(num1 :number, num2: number): number{
    return num1 + num2;
}

document.write("O resultado da soma 2 + 2 é: "+somar(2,2))

function horaExata(): string{
    let hora = new Date();

    return `${hora.getHours()}: ${hora.getMinutes()}`;
}

document.write(`A hora é ${horaExata()}`);
