const requisicao = fetch('http://127.0.0.1:5500/JavaScript/6-Fetch/api.json')
    .then( response => {
        return response.json();
    })
    .then( jsonBody => {
        document.querySelector('#app').innerHTML = jsonBody.Actors;
        console.log(jsonBody);
    }

    );

console.log(requisicao);


const data = {
    id: "andrerafa",
    nome: "Andre",
    email: "andrerafa@origamid.com",
    senha: "123456",
    cep: "123456",
    rua: "Ali Perto",
    numero: "230",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro",
    estado: "Rio de Janeiro"
  };
  
// Cadastro de Usuários
fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
method: "POST",
mode: "cors",
cache: "no-cache",
credentials: "same-origin",
headers: {
    "Content-Type": "application/json"
},
redirect: "follow",
referrer: "no-referrer",
body: JSON.stringify(data)

});