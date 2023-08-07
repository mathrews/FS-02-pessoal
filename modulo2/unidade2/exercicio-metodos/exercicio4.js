let stringNomes = 'João, Maria, José, Vanderson';

console.log(stringNomes.split(', ').flatMap(item => item.length));