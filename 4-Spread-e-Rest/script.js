// Rest (esta pegando o array)
// function showList(empresa,...clientes){
//     console.log(empresa);
//     console.log(clientes);
// }

// showList("BBB22", "Jade", "Arthur Aguiar", "Douglas", 2022);

// Spread (esta espalhando o array)
// const numeros = [1, 3, 4, 90, 300, 0, 20];
// console.log(Math.max(...numeros));


// const items = document.querySelectorAll("li");

// Transformando Items em array
// const items = Array.from(document.querySelectorAll("li"));

// O forEach percorre todos os itens de um array
// items.forEach( item => {
//     console.log(item);
//     }
// );

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
// [...items].map( item => {
//     console.log(item);
//     }
// );

// console.log(items);

// Objetos
// const carro = { cor: "azul", portas: 4, ano: 2020 };

// const cloneCarro = {...carro, turbo:true };

class Transporte {
    constructor() {
      this.terrestre = true;
    }
    andar(){
        console.log("Andou");
    }
}
  
class Carro extends Transporte {
    constructor(cor, portas) {
        super();
        this.cor = cor;
        this.portas = portas;
    }
}
  
const meuCarro = new Carro("vermelho", 4);

// Shallow Clone
const cloneCarro = { ...meuCarro };

console.log(meuCarro);
console.log(cloneCarro);