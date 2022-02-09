// function handleMouseMove(event){
//     const { clientX, clientY } = event;
    
//     // const clientX = event.clientX;
//     // const clientY = event.clientY;

//     console.log(clientX, clientY);
// }


// function handleMouseMove({ clientX, clientY }){
//     clientX = "X";
//     clientY = "Y";
//     console.log(clientX, clientY);
// }

// document.documentElement.addEventListener("mousemove", handleMouseMove);


// Array
const frutas = ["Banana", "Uva"];
//const fruta1 = frutas[1];
const [fruta1, fruta2] = [frutas];

console.log(frutas);

const useState = [
    "pink", 
    function(color){
        useState[0] = color;
    }
];

const [color, setColor] = useState;

//setColor("Preto");