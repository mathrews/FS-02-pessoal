// interface categoria {
//     type: string
// }
// interface produtos extends category {
//     title: string;
//     category: string;
//     image: string;
//     description: string
//     price: number;
// }

type rating = {
    rate: number,
    count: number,
}

type produtosObject ={
    id: number,
    title: string,
    category: string,
    image: string,
    description: string,
    price: number,
    rating: rating,
}

let lista = [];

const buscarProdutos = () => {
    try {
        fetch('https://fakestoreapi.com/products')
        .then(resposta => resposta.json())
        .then(listaDeProdutos => {
            lista = listaDeProdutos;
            listarProdutos(lista);
        })
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

buscarProdutos();

const listarProdutos = (lista) => {
    produtos.innerHTML = '';
    lista.map(item => {
        produtos.innerHTML += `
            <li>
                <div class="image">
                    <span>
                        <box-icon type='solid' name='heart'></box-icon>
                        ${item.rating.rate}
                    </span>
                    <img src="${item.image}" alt="">
                </div>
                <h4>${item.title}</h4>
                <h5>${item.category}</h5>
                <p>${item.description}</p>
                <h6>R$ ${item.price}</h6>
                <a href="">Comprar</a>
            </li>
        `;
    });
}

const listarCategorias = () => {
    try {
        fetch('https://fakestoreapi.com/products/categories')
        .then(resposta => resposta.json())
        .then(listaDeCategorias => {
            listaDeCategorias.map(item => {
                filtro.innerHTML += `<option>${item}</option>`;
            });
        })
    } catch (error) {
        alert(`Erro: ${error.message}`)
    }
}

listarCategorias();

const filtrarProdutos = () => {
    if(filtro.value != 'All'){
        let produtosFiltrados = lista.filter(item => item.category === filtro.value);
        listarProdutos(produtosFiltrados);
        return;
    } else {
      listarProdutos(lista);
    }
}