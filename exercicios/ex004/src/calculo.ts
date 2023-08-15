let a: number, b: number, c: number;

const calcularDelta = () => {
    a = Number(valorA.value);
    b = Number(valorB.value);
    c = Number(valorC.value);

    let delta = (b ** 2) - (4*a*c);

    return delta;
}

const calcularBaskara = () => {
    a = Number(valorA.value);
    b = Number(valorB.value);
    c = Number(valorC.value);

    if (a == 0) {
        return 'número exigido no campo A'
    }

    if (b == 0) {
        let x = Math.sqrt((c * -1) / a)
        if (isNaN(x)) {
            return `X é igual NAN (Not a Number), ou seja, não é um número.`;
        } else {
            return `x é igual a aproximadamente +||-${x.toFixed(1)}`;
        }
    }

    let delta = calcularDelta();
    if (delta < 0) {
        return 'não há raízes';
    }

    let x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
    let x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a);

    if (c == 0) {
        x1 = 0;
        x2 = (b * -1) / a;
    }

    if (delta == 0) {
        return `Os resultados foram ${x1.toFixed(1)} e ${x2.toFixed(1)}. Os dois resultados são iguais pois o delta é igual a 0.`;
    }
    else if(delta > 0) {
        return `Os resultados foram ${x1.toFixed(1)} e ${x2.toFixed(1)}. Os dois resultados são diferentes pois o delta é maior que 0.`;
    }
}

btn.onclick = () => {
    resposta.innerHTML = `${calcularBaskara()}`;
}