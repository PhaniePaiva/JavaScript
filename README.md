# JavaScript
JavaScript Antes do Framework (React ou Vue.js)

#### TÓPICOS

<ul>
    <li>Tudo é objeto</li>
    <li>Arrow Function</li>
    <li>Destructuring</li>
    <li>Rest e Spread</li>
    <li>Module (Export/Import)</li>
    <li>Fetch</li>
    <li>Async / Await</li>
    <li>Arrays (map, filter, reduce)</li>
    <li>Class</li>
    <li>Expressões</li>
</ul>

#

# 1.Tudo é Objeto
Um objeto possui propriedades e métodos quem podem ser diretos ou herdados (protótipo).

#
#### OBS: Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto).
#

# 2.Arrow Function
Permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return. O conceito de funcionamento do this pode variar dependendo do contexto e do modo como o JavaScript esta sendo usado (modo strict ou não).
A principal diferença é o contexto do this. A arrow function não cria o próprio this.

#
#### OBS: O this faz referência ao objeto criado pela função. A arrow function consegue ignorar isso, e manter como referência o objeto pai.

#

# 3.Destructuring
Desestruturar objetos e arrays.

#

# 4.Spread e Rest
Você irá utilizar o spread para espalhar dados de um conjunto de dados (array, objeto, string) para outro, fazendo modificações se necessário. O rest você utiliza quando se espera receber vários elementos e deseja transformá-los em um array, como no caso do parâmetro da função do exemplo de rest.
#

# 5.Module
Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

#

# 6.Fetch
Envia requisições assíncronas(Esse código irá roda no tempo dele e não travará o resto mesmo estando lento) para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

#
# Async / Await
Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

#
# Arrays 
São geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista.
#
<code>
const precos = [ "Crédito", "R$ 200", "R$ 400", "Contas Pagar", "R$ 300", "R$ 400", "Meus dados" ];
</code>

<h5>Métodos para iterarmos entre os valores de arrays.</h5>

<ul>
<li><strong>Filter:</strong> O método <code>filter()</code> cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. </li>
</ul>

<code>
const precosFiltro = precos.filter( precos => precos.includes("R$"));
console.log(precosFiltro);

</code>

<ul>
<li><strong>Map:</strong> O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos;</li>
</ul>

<code>
const precosNumero = precosFiltro.map( precos => 
    Number(precos.replace("R$ ", ""))
);
console.log(precosNumero);

</code>


<ul>
<li><strong>Reduce:</strong>O método <code>reduce()</code> executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
</li>
</ul>

#### OBS: console.log(array1.reduce(reducer, 5));
#### 1.Acumulador (acc)
#### 2.Valor Atual (cur)
#### 3.Index Atual (idx)
#### 4.Array original (src)
#### O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

<code>
const total = precoNumeros.reduce(function(acc, cur){
    return acc + cur;
});
console.log(total);

</code>
