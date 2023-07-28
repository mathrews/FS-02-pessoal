//EX01
// function boasVindas(){
//     let aluno: string = 'Thiago';
//     document.write(`Seja bem vindo ${aluno}`)
// }
// boasVindas();
var _a;
//EX02
// let dataAtual = new Date() 
// function idade(ano:number, mes:number) {
//     let anosAtuais:number = Number(dataAtual.getFullYear()); 
//     let diferença:number = anosAtuais - ano;
//     if (mes < 12) {
//         diferença--;
//     }
//     document.write(`esse aluno tem ${diferença} anos`);
// }
// idade(1997, 12);
//EX03
var sala = 20;
var alunosAtivos = sala - 1;
function percentualAlunos(quantidadeAlunosPresentes) {
    if (quantidadeAlunosPresentes <= 19 && quantidadeAlunosPresentes > 0) {
        var porcentagem = ((alunosAtivos - quantidadeAlunosPresentes) / alunosAtivos) * 100;
        return porcentagem;
    }
    else {
        document.write("Quantidade invalida.");
    }
}
document.write("Hoje faltaram cerca de ".concat((_a = percentualAlunos(11)) === null || _a === void 0 ? void 0 : _a.toFixed(1), "%"));
