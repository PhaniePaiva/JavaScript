//Criando Funções
// function upperName(name) {
//     return name.toUpperCase();
    
// };

//Criando função dentro de uma variável
// const upperName = function(name) {
//     return name.toUpperCase();
    
// };


// const upperName = (name) => {
//     return name.toUpperCase();
    
// };

// const upperName = name => name.toUpperCase();
// const countLetters = word => word.length;

// console.log(countLetters("Maria Joaquina fez bagunça?"));

class Menu{
    constructor(menu){
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";
    }
    addActiveEvent() {

        this.menuElement.addEventListener("click", (event) => {
            console.log(this);
            event.target.classList.add(this.activeClass);
        });
    }
}


const menu = new Menu(".principal");
menu.addActiveEvent();

// console.log(menu);

//O Arrow function nos permite utilizar mostrar o this da forma necessária, do que utilizando o function();