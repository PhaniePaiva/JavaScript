// podemos colocar try { } catch(e) { }
// para lidarmos com erros
// Função assíncrona
// async function fetchProdutos(url) {
//     const response = await fetch(url);
//     const jsonBody = await response.json();
//     return jsonBody;
// }
  
// fetchProdutos("http://127.0.0.1:5500/JavaScript/7-Async-Await/api.json");


async function fetchProdutos(url) {
    //const response = fetch(url);
    // Await vai esperar a promessa ser resolvida para somente depois aparecer a sua resposta = response
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
    //console.log(jsonBody);
}
  
fetchProdutos("http://127.0.0.1:5500/JavaScript/7-Async-Await/api.json");


// Outra Alternativa
const requisicao = fetchProdutos("http://127.0.0.1:5500/JavaScript/7-Async-Await/api.json");

requisicao.then( r => {
    console.log(r);
});