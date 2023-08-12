var listarProdutos = function () {
    try {
        fetch("https://fakestoreapi.com/products", { method: 'get' })
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeProdutos) {
            listaDeProdutos.map(function (item) {
                produtos.innerHTML += "\n                <li>\n                    <div class=\"image\">\n                    <span>\n                    <box-icon name=\"heart\" type=\"solid\"></box-icon>\n                    ".concat(item.rating.rate, "\n                    </span>\n                    <img src=\"").concat(item.image, "\" alt=\"\">\n                    </div>\n                    <h4>").concat(item.title, "</h4>\n                    <h5>").concat(item.category, "</h5>\n                    <p>").concat(item.description, "</p>\n                    <h6>").concat(item.price, "</h6>\n                    <a href=\"\">Comprar</a>\n                </li>\n                ");
            });
        });
    }
    catch (error) {
        console.log("Error: ".concat(error.message));
    }
};
listarProdutos();
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
        alert("Error: ".concat(error.message));
    }
};
listarCategorias();
