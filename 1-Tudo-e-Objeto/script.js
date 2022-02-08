// Objeto Literal EXEMPLO
// const menu = {
//     selector: ".principal",
//     active() {
//       const menuElement = document.querySelector(this.selector);
//       menuElement.classList.add("active");
//     }
// };
  
//   menu.selector; // ".principal";
//   menu.active(); // adicionar active ao menu
//   menu.hasOwnProperty("class"); // método herdado


// EXEMPLO
// ["10", "20", "30"].map(Number); // [10, 20, 30];
// "JavaScript".toUpperCase(); // JAVASCRIPT

// const body = document.querySelector("body");
// body.classList.add("js"); // adiciona JS ao Body


// OBJETO
const menu = {
    //Propriedades é uma variável que pode segurar um valor qualquer
    class: ".principal",
    //Métodos são Funções
    ativar(){
        const menuElement = document.querySelector(this.class);
        console.log(menuElement);
    }
};

menu.ativar();