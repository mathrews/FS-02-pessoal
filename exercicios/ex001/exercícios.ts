
//EX01
// function boasVindas(){
//     let aluno: string = 'Thiago';
//     document.write(`Seja bem vindo ${aluno}`)
// }
// boasVindas();




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
let sala:number = 20;
let alunosAtivos:number = sala - 1;
function percentualAlunos(quantidadeAlunosPresentes:number){
    if (quantidadeAlunosPresentes <= 19 && quantidadeAlunosPresentes > 0){
        let porcentagem:number = ((alunosAtivos - quantidadeAlunosPresentes) / alunosAtivos) * 100
        return porcentagem;
    } else {
        document.write(`Quantidade invalida.`)
    }
}
document.write(`Hoje faltaram cerca de ${percentualAlunos(11)?.toFixed(1)}%`)