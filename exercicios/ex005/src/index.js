let listagem = [];

const buscarCep = () => {
    if (campoCep.value.length == 0) {
        res.innerHTML = `Coloque seu cep corretamente.`
    }
    try {
        fetch(`https://viacep.com.br/ws/${campoCep.value}/json/`)
        .then(res => res.json())
        .then(item => {
            listagem[0] = item;
            mostrarLoc(listagem);
        })
    } catch (error) {
        console.log(error.message);
    }
}

const mostrarLoc = (lista) => {
    res.innerHTML = '';
    lista.map(item => {
        res.innerHTML = `
        <label for="zipcode">Zipcode:</label>
        <input id="zipcode" type="text" value="${item.cep}">

        <label for="logradouro">Logradouro:</label>
        <input id="logradouro" type="text" value="${item.logradouro}">

        <label for="bairro">bairro:</label>
        <input id="bairro" type="text" value="${item.bairro}">

        <label for="localidade">localidade:</label>
        <input id="localidade" type="text" value="${item.localidade}">

        <label for="ddd">DDD:</label>
        <input id="ddd" type="text" value="${item.ddd}">

        <label for="uf">UF:</label>
        <input id="uf" type="text" value="${item.uf}">
        `
    });
}

btn.onclick = () => {
    buscarCep()
}