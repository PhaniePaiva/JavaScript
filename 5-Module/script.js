import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import Teste from "./numeroAleatorio.js"; // Como foi passado default eu posso escolher o nome da função
import Circulo from "./circulo.js"

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(8));

console.log(Teste());

console.log(Circulo.area(5));
console.log(Circulo.circunferencia(5));
console.log(Circulo.aleatorio());