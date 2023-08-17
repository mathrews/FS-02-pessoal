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
                <br>
                <div>
                zipcode: ${item.cep}
                logradouro: ${item.logradouro}
                </div>
                <h4>bairro: ${item.bairro}</h4>
                <h5>localidade: ${item.localidade}</h5>
                <p>DDD: ${item.ddd}</p>
                <h6>UF: ${item.uf}</h6>
        `;
    });
}

btn.onclick = () => {
    buscarCep()
}