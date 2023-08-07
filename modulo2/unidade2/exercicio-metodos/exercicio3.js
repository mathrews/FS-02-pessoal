let arrayDeObj = [
    {
        nome: 'Mateus',
        idade: 16
    },
    {
        nome: 'Davi',
        idade: 33
    },
    {
        nome: 'Rafael',
        idade: 23
    }
]

console.log(arrayDeObj.sort(function(a, b){return a.idade - b.idade}));