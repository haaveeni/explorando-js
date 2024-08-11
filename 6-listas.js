console.log(`Trabalhando com listas`)

const salvador = 'Salvador'
const saoPaulo = 'São Paulo'
const rioDeJaneiro = 'Rio de Janeiro'
console.log("Destinos possíveis:")
console.log(salvador, saoPaulo, rioDeJaneiro)

//Criação de array. array pode ser criado vazio.
//apesar da lista ser constante, o seu conteudo pode variar, adicionando dinamicamente, como o push
//new é uma palavra reservada, não da pra criar uma variavel com esse nome

//declarar array com const e construtor Array
const listaDeDestinos = new Array ('Salvador','São Paulo','Rio de Janeiro')
//adicionando itens a lista com .push
listaDeDestinos.push('Curitiba', 'São Luis')
console.log(listaDeDestinos)
//deletando o indice 1 com o splice (a partir da posicao 1, deletar 1)
listaDeDestinos.splice(1, 1)
console.log(listaDeDestinos)

console.log(listaDeDestinos[1])
//declarar array com var
var estados = ['Sergipe', 'Pernambuco', 'Minas Gerais']
console.log(estados[1])
//declarar array com const e sem new Array
const paises = ['França', 'Espanha', 'Estados Unidos']
console.log(paises[2])
//iterar um array
//forEach (value, index, array)
paises.forEach(function(item, indice, array){
    console.log(item, indice)
})