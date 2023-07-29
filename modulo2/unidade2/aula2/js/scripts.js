//  Esta função realiza algo depois de x tempo.
// setTimeout(() => {
//     alert(`time cadastrado`);
// }, 500); 
//recebe uma função e um tempo como parâmetro


// esta função realiza algo a cada x tempo.

// let count = 0;
// const timer = setInterval(() => {
//     count++;
//     document.querySelector('#tempo').innerHTML = `Segundos: ${count}`; //shortcut
// }, 1000);

// continuarTempo.onclick = () => {
//     setInterval(() => {
//         count++;
//         document.querySelector('#tempo').innerHTML = `Segundos: ${count}`; //shortcut
//     }, 1000);
// }

// pararTempo.onclick = () => {
//     clearInterval(timer);
// }

// setInterval(() => {
//     document.querySelector('body').innerHTML = `Segundos: ${count = 0}`; //shortcut
// }, 11000);



// Codigo do Pomodoro
let p_segundos = 0;
let p_minutos = 0;
let p_horas = 0;
let i_contarSegundos;
let i_contarMinutos;

pomodoroTime.onkeyup = () => {
    setartempo(pomodoroTime.value);
}

pomodoroTime.onclick = () => {
    setartempo(pomodoroTime.value);
}

acao.onclick = () => {
    switch(acao.getAttribute('estado')){
        case 'i':
            acao.setAttribute('estado', 'p')
            acao.innerHTML = `Parar`
            setInterval(() => {
                contarSegundos();
            }, 1000)
        break;
        case 'p':
            acao.setAttribute('estado', 'c')
            acao.innerHTML = `Continuar`
        break;
        case 'c':
            acao.setAttribute('estado', 'p')
            acao.innerHTML = `Parar`
        break;
    }
}

function setartempo(segundos) {
    //verifica se segundos é um num válido
    if(segundos){
        //verifica se segundos é maior q 59
        if (segundos > 59){
            //caso seja, fazemos o calculo para definir segundos e minutos
            let minutos = parseInt((segundos / 60) % 60);
            segundos = parseInt(segundos % 60);
            //ternário para checar se minutos é menor que 10, caso seja, adicione 0 na frente.
            minuto.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
            //atribuindo minutos a uma variável global
            p_minutos = minutos;
            segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
            //atribuindo segundos a uma variável global
            p_segundos = segundos;
            return;
        }
        //ternário para checar se segundos é menor que 10, caso seja, adicione 0 na frente.
        segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
        //atribuindo segundos a uma variável global
        p_segundos = segundos;
    }else{
        minuto.innerHTML = '00';
        segundo.innerHTML = '00';
    }
}

let progressoSegundo = 266 / 59;
let progresso = 0;

function contarSegundos(){
    if (p_minutos <= 0) {
        if (p_segundos == 0) {
            segundo.innerHTML = '00';
            clearInterval(i_contarSegundos);
            acao.setAttribute('estado', 'i');
            acao.innerHTML = 'iniciar';
            return;
        }
    }else{
        if(p_segundos == 0){
            p_segundos = 59;
            p_minutos--;
            minuto.innerHTML = p_minutos.innerHTML = p_minutos < 10 ? `0${p_minutos}` : p_minutos;
            segundo.innerHTML = '59';
            return;
        }
    }
    p_segundos--
    tempoCorrido.style.width = (p_segundos * progressoSegundo) + 'px';
    segundo.innerHTML = p_segundos < 10 ? `0${p_segundos}` : p_segundos;
}

