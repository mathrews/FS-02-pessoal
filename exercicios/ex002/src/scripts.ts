const calcularMedia = (a, b, c):Number => {
    let media = ((a * 2) + b + c) / 4;
    return media;
}

console.log(calcularMedia(10, 9.5, 5).toFixed(1));
