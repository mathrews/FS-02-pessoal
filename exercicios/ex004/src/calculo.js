var a, b, c;
var calcularDelta = function () {
    a = Number(valorA.value);
    b = Number(valorB.value);
    c = Number(valorC.value);
    var delta = (Math.pow(b, 2)) - (4 * a * c);
    return delta;
};
var calcularBaskara = function () {
    a = Number(valorA.value);
    b = Number(valorB.value);
    c = Number(valorC.value);
    if (a == 0) {
        return 'número exigido no campo A';
    }
    if (b == 0) {
        var x = Math.sqrt((c * -1) / a);
        if (isNaN(x)) {
            return "X \u00E9 igual NAN (Not a Number), ou seja, n\u00E3o \u00E9 um n\u00FAmero.";
        }
        else {
            return "x \u00E9 igual a aproximadamente +||-".concat(x.toFixed(1));
        }
    }
    var delta = calcularDelta();
    if (delta < 0) {
        return 'não há raízes';
    }
    var x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
    var x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a);
    if (c == 0) {
        x1 = 0;
        x2 = (b * -1) / a;
    }
    if (delta == 0) {
        return "Os resultados foram ".concat(x1.toFixed(1), " e ").concat(x2.toFixed(1), ". Os dois resultados s\u00E3o iguais pois o delta \u00E9 igual a 0.");
    }
    else if (delta > 0) {
        return "Os resultados foram ".concat(x1.toFixed(1), " e ").concat(x2.toFixed(1), ". Os dois resultados s\u00E3o diferentes pois o delta \u00E9 maior que 0.");
    }
};
btn.onclick = function () {
    resposta.innerHTML = "".concat(calcularBaskara());
};
