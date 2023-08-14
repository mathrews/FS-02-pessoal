var contadorManha = 0;
var contadorTarde = 0;
var contadorNoite = 0;
var verificacaoAcessos = function (horario) {
    console.log(horario);
    if (horario >= '05:00' && horario <= '11:58') {
        contadorManha++;
    }
    else if (horario >= '12:00' && horario <= '17:59') {
        contadorTarde++;
    }
    else if ((horario >= "18:00" && horario <= "23:59") || (horario >= "00:00" && horario <= "04:59")) {
        contadorNoite++;
    }
};
var acessos = function () {
    for (var i = 0; i <= 9; i++) {
        var hora = (Math.random() * 24).toFixed(0);
        var minutos = (Math.random() * 60).toFixed(0);
        if (hora < 10) {
            hora = '0' + hora;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        verificacaoAcessos("".concat(hora, ":").concat(minutos));
    }
};
acessos();
document.write("Entradas:<br/>Manha:".concat(contadorManha, "<br/>Tarde:").concat(contadorTarde, "<br/>Noite:").concat(contadorNoite));
