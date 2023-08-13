var lista = [];
var buscarProdutos = function () {
    try {
        fetch('https://fakestoreapi.com/products')
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeProdutos) {
            lista = listaDeProdutos;
            listarProdutos(lista);
        });
    }
    catch (error) {
        alert("Error: ".concat(error.message));
    }
};
buscarProdutos();
var listarProdutos = function (lista) {
    produtos.innerHTML = '';
    lista.map(function (item) {
        produtos.innerHTML += "\n            <li>\n                <div class=\"image\">\n                    <span>\n                        <box-icon type='solid' name='heart'></box-icon>\n                        ".concat(item.rating.rate, "\n                    </span>\n                    <img src=\"").concat(item.image, "\" alt=\"\">\n                </div>\n                <h4>").concat(item.title, "</h4>\n                <h5>").concat(item.category, "</h5>\n                <p>").concat(item.description, "</p>\n                <h6>R$ ").concat(item.price, "</h6>\n                <a href=\"\">Comprar</a>\n            </li>\n        ");
    });
};
var listarCategorias = function () {
    try {
        fetch('https://fakestoreapi.com/products/categories')
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeCategorias) {
            listaDeCategorias.map(function (item) {
                filtro.innerHTML += "<option>".concat(item, "</option>");
            });
        });
    }
    catch (error) {
        alert("Erro: ".concat(error.message));
    }
};
listarCategorias();
var filtrarProdutos = function () {
    if (filtro.value != 'All') {
        var produtosFiltrados = lista.filter(function (item) { return item.category === filtro.value; });
        listarProdutos(produtosFiltrados);
        return;
    }
    else {
        listarProdutos(lista);
    }
};
