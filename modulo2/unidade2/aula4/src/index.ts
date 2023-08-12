const listarProdutos = () => {
  try {
    fetch("https://fakestoreapi.com/products", {method: 'get'})
      .then((resposta) => resposta.json())
      .then((listaDeProdutos) => {
        listaDeProdutos.map(item => {
          produtos.innerHTML += `
                <li>
                    <div class="image">
                    <span>
                    <box-icon name="heart" type="solid"></box-icon>
                    ${item.rating.rate}
                    </span>
                    <img src="${item.image}" alt="">
                    </div>
                    <h4>${item.title}</h4>
                    <h5>${item.category}</h5>
                    <p>${item.description}</p>
                    <h6>${item.price}</h6>
                    <a href="">Comprar</a>
                </li>
                `;
        });
      });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

listarProdutos();

const listarCategorias = () => {
    try{
        fetch('https://fakestoreapi.com/products/categories')
        .then(resposta => resposta.json())
        .then(listaDeCategorias => {
            listaDeCategorias.map(item => {
                filtro.innerHTML += `<option>${item}</option>`
            })
        })
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}

listarCategorias()