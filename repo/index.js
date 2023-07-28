var nome; //linguagem de tipagem de coisas e evitar erros
var num;
var verdadeiro;
// para tipar algo, basta colocar : e o nome do tipo de dado
nome = 'Mateus';
num = 15;
verdadeiro = true;
function bemVindo(nome) {
    if (nome === void 0) { nome = 'guesth'; }
    var msg = "Seja bem vindo ".concat(nome);
    document.write(msg);
}
bemVindo('Mateus');
function sum(a, b) {
    return a + b + 4;
}
document.write("A soma de 2 + 2 + 3 \u00E9 ".concat(sum(2, 2)));
// Em um tipo criado por você que for um objeto, e você quer criar uma propriedade que seja opicional, basta colocar o sinal interrogação: '?' antes do dois pontos.
var pessoa = {
    nome: 'Mateus',
    idade: 15,
    genero: 'Masculino'
};
var otherPessoa = {
    nome: 'Gleidson',
    idade: 32,
};
// Podemos também exercer a tipagem de arrays escrevendo o nome do tipo + [] como no exemplo abaixo:
var numero = [1, 2, 3];
function arrayNumero() {
    for (var i = 0; i < numero.length; i++) {
        console.log(numero[i]);
    }
}
arrayNumero();
var pessoas = [
    {
        nome: 'Arthur',
        idade: 17,
        genero: 'Masculino'
    }
];
