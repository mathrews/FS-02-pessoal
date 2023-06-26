
confirmar.onclick = function(){
    let age = Number(idade.value); // conversor de número
    if(age > 17){
        // alert("Você pode entrar");
        window.location.href = 'bebidas.html'; 
    } else {
        alert("Não pode entrar");
    }
}

// let btn = document.getElementById('confirmar'); //antigos videos

// let btn = document.querySelector('button'); // permite que atribua seletores do mesmo jeito do CSS 