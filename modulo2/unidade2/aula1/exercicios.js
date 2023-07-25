// // function calcularIdade (ano, mes){
// //    let idade= ano-1993;
// //    if (mes<12){
// //     idade--;
// //    }
// //    document.write (`A idade do Thiago é ${idade}`); 
// // }
// //3 - (CR, CP) Nossa sala de aula comporta 20 alunos e temos 19 alunos ativos, mas o dia estava chuvoso e vieram apenas 11 alunos, Crie uma função que calcule o percentual de alunos que faltaram;

// // function alunosPersentAusentes(alunosPresentes){
// //     let ausentes = (1 - (alunosPresentes / 19)) * 100;

// //     return ausentes.toFixed(1);
// // }

// // console.log(`O percentual de alunos ausentes é: ${alunosPersentAusentes(11)}%`);

// // 4 - (CR, CP) O professor endoidou e disse que agora haverá provas teóricas e práticas por módulo, sendo 1 teórica e 2 práticas, o devaneio foi tão grande que ele disse que a prova teórica terá peso 2  e a prática peso 1 ou seja, duas provas práticas valem o mesmo que uma prova teórica, sabendo disso crie uma função que receba as tres notas e devolva a média;

// function media(pratica1, pratica2, teorica){
//     let media = ((pratica1+pratica2)+teorica*2)/4;
//     return media;
// }

// document.write(`media do Davi ${media(5,7,9.5)}<br>`)
// document.write(`media do Vinicios ${media(8,3,6)}<br>`)

// // 5 - (SR, CP) Na Digital College os professores que possuem carro tem direito a um cartão estacionamento para guardarem seus veículos, quando um professor passa pela cancela, a mesma registra o horário em que ele entrou ou saiu, o gerente quer saber em que período do dia os professores mais acessam o estacionamento, sabendo disso crie uma função que identifique pelo horário em que período do dia(Manhã(05:00 as 11:59), Tarde(12:00 as 17:59), ou Noite(18:00 as 04:59)) aconteceu o acesso, execute essa função 10 vezes com horários diferentes, e escreva na tela a quantidade de acessos de cada período;

let contadorManha = 0;
let contadorTarde = 0;
let contadorNoite = 0;

function entrada(horario) {
    console.log(horario);
    if (horario >= "05:00" && horario <= "11:59") {
        contadorManha++;
    }
    else if (horario >= "12:00" && horario <= "17:59") {
        contadorTarde++;
    }
    else if ((horario >= "18:00" && horario <= "23:59")||(horario >= "00:00" && horario <= "04:59")) {
        contadorNoite++;
    }
}

for (let i = 0; i <= 9; i++) {
    let hora = (Math.random()*24).toFixed(0);
    let minutos = (Math.random()*60).toFixed(0);
    if (hora < 10) {
        hora ="0" + hora;
    }
    if (minutos < 10) {
        minutos ="0" + minutos;
    }
    entrada(`${hora}:${minutos}`);
}

document.write(`Entradas:<br/>Manha:${contadorManha}<br/>Tarde:${contadorTarde}<br/>Noite:${contadorNoite}`)