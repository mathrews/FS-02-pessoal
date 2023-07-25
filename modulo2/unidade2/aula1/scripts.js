var nome;
nome = "Rafael";
var numero;
numero = 20;
var verdadeiro;
verdadeiro = true;
function boasVindas(nome) {
    if (nome === void 0) { nome = "Alunos"; }
    document.write("Seja bem-vindo(a) ".concat(nome, "<br>"));
}
boasVindas("João");
function somar(num1, num2) {
    return num1 + num2;
}
document.write("O resultado da soma 2 + 2 é: " + somar(2, 2));
function horaExata() {
    var hora = new Date();
    return "".concat(hora.getHours(), ": ").concat(hora.getMinutes());
}
document.write("A hora \u00E9 ".concat(horaExata()));
