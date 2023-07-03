// let alunos = ['Davi', 'Mateus', 'vitor'];

let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for(let i = 1; i <= diasPorMes[0]; i++){
    dia.innerHTML += `<option>${i}</option>`;
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

for(let i = 0; i < meses.length; i++){
    mes.innerHTML += `<option value="${i}">${meses[i]}</option>`;
} 

mes.onchange = function(){
    dia.innerHTML = '';
    for(let i = 1; i <= diasPorMes[mes.value]; i++){
        dia.innerHTML += `<option>${i}</option>`;
    }
}

let data = new Date(); //pega a data do server

// let anoBi = for(let i = data.getFullYear(); i > ((data.getFullYear() - 101) % 4 === 0); i--){

// }

for(let i = data.getFullYear(); i > (data.getFullYear() - 101); i--){
    ano.innerHTML += `<option>${i}</option>`;
}

let diasPorMesBi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ano.onchange = function(){
//     if () {
//         dia.innerHTML = '';
//         for(let i = 1; i <= diasPorMesBi[mes.value]; i++){
//             dia.innerHTML += `<option>${i}</option>`;
//         }
//         console.log('Esse ano é bissexto');
//     } else {
//         console.log('Esse ano não é bissexto');
//     }
// }