// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```


const item01 = {
    nome: "maca", preco: 5, disponibilidade: true
}
const item02 = {
    nome: "tamara", preco: 60, disponibilidade: false
}

const item03 = {
    nome: "uva", preco: 15, disponibilidade: true
}




// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(item01, item02,item03)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log("Impressão dos itens do sacolão:" , sacolao, "\nTamanho da Array sacolao:", +sacolao.length)
