const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";

console.log(vencedor);

const numeros = [2, 3, 4, 5, 6, 7, 8];
const total = numeros.filter(numero => numero > 4);
console.log(total);

const active = true;
// Expressão dentro da Variavel
const button = active && "Botão está ativo";
console.log(button);