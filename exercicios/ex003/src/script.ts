let contadorManha = 0;
let contadorTarde = 0;
let contadorNoite = 0;

const verificacaoAcessos = (horario) => {
    console.log(horario);
    if (horario >= '05:00' && horario <= '11:58') {
        contadorManha++;
    }
    else if (horario >= '12:00' && horario <= '17:59') {
        contadorTarde++;
    }
    else if ((horario >= "18:00" && horario <= "23:59")||(horario >= "00:00" && horario <= "04:59")) {
        contadorNoite++
    }
}

const acessos = () => {
    for (let i = 0; i <= 9; i++) {
        let hora = (Math.random()*24).toFixed(0);
        let minutos = (Math.random()*60).toFixed(0);
        if (hora < 10) {
            hora = '0' + hora
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        verificacaoAcessos(`${hora}:${minutos}`)
    }
}

acessos();

document.write(`Entradas:<br/>Manha:${contadorManha}<br/>Tarde:${contadorTarde}<br/>Noite:${contadorNoite}`)