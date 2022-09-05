

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
   };

  
const copiaPokemon1 = {...pokemon1,
   nome: "Squirtle",
   tipo: "Água",
}
   
pokemon1.ataque = []
pokemon1.ataque.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
})



copiaPokemon1.ataque = [...pokemon1.ataque]


pokemon1.ataque.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo : "Grama",
    precisao: 100,
    
}) 


copiaPokemon1.ataque.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
    
}) 
console.log("Pokemon Original : ", pokemon1)
console.log("Pokemon Copia : ", copiaPokemon1)


