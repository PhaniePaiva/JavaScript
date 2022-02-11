const precos = [
    "Crédito",
    "R$ 100",
    "R$ 200",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados",
    "R$ 500",
    "Valor",
    "R$ 600"
];
console.log(precos);

// const precosFiltro = precos.filter(function(preco){

//     // if(preco === "R$ 400"){
//     //     return true;
//     // } else{
//     //     return false;
//     // }


//     if(preco.includes("R$")){
//         return true;

//     } else{
//         return false;

//     }
// });

// Método FILTER
const precosFiltro = precos.filter( precos => precos.includes("R$"));

console.log(precosFiltro);

//Método MAP
const precoNumeros = precosFiltro.map( precos => 
    //Transformando String em Numero
    Number(precos.replace("R$ ", ""))
);

console.log(precoNumeros);

//Método REDUCE
const total = precoNumeros.reduce((acc, cur) => acc + cur );
console.log(total);
