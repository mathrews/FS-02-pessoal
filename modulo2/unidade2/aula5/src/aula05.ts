type regiaoProps = {
    id: number,
    sigla: string,
    nome: string,
}

type EstadoProps = {
    id: number,
    sigla: string,
    nome: string,
    regiao: regiaoProps,
}

// type EstadoArrayProps = {
//     estado: EstadoProps,
// }[]

function listarEstados() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then(response => response.json())
    .then((lista: EstadoProps[]) => {
        lista.forEach(item => {
            estado.innerHTML += `
                <option value="${item.sigla}" disabled>${item.nome}</option>
            `;
        })
    })
    .catch(error => {
        alert(error.message)
    })
    .finally(() => {
        console.log('Processo finalizado');
    })
} listarEstados()

// async

async function buscaCEP() {
    if (cep.value.length == 8) {
        try {
            let request = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            let response = await request.json()

            if (response.erro) {
                alert('Cep inválido')
                return;
            }

            logradouro.value = response.logradouro;
            bairro.value = response.bairro;
            localidade.value = response.localidade;
            estado.value = response.uf;

        } catch (error) {
            alert(error.message)
        }
    }
}