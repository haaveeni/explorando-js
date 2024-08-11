console.log("Trabalhando com atribuição de variaveis")

var idade = 32
var primeiroNome = "Veridiana"
var sobrenome = "Lucena"
const nomeCompleto = primeiroNome + " " + sobrenome

//CONCATENACAO
//termo usado em computação para designar a operação de unir o conteúdo de duas strings

console.log(primeiroNome + " " + sobrenome) 

console.log(primeiroNome, sobrenome)
//ao inves de adicionarmos um trecho com espaço, podemos separar os itens com virgula

//INTERPOLACAO
//novo recurso do ES6, que pode criar strings de várias linhas sem a necessidade de um caractere de escape. Podemos usar apóstrofos e aspas facilmente que podem tornar nossas strings e, portanto, nosso código mais fácil de ler. Estas são algumas das razões para usar a interpolação de string em vez da concatenação de string.

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`)
//interpolacao de variaveis usando parenteses, crase, cifrão e chaves

console.log(`Meu nome é ${nomeCompleto}`)