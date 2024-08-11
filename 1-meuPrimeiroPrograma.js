//usando o node apenas como interpretador

console.log("Meu primeiro programa - Trabalhando com variáveis");

//declarando variáveis
//definir padrão e seguir. ou começa tudo com letra minuscula, ou maiuscula. 
//JS é case sensitive. 
//ou usa ponto e virgula ; no final, ou nao usa.

const idadeVeri = 33
const idadeLais = idadeVeri + 30
const idadeKonrad = idadeLais - 4
const idadeLucas = idadeVeri + 2

//NÃO declarar variável sem declarar o tipo (const, var, let) ex: idade = 32
//variavel sem tipo declarado sobe pra escopo global e vai gerar problemas no futuro

//CONCATENACAO
//termo usado em computação para designar a operação de unir o conteúdo de duas strings

//printando no console concatenação com variaveis
console.log("Eu tenho " + idadeVeri + " anos, minha mãe tem " + idadeLais + " anos e meu pai tem " + idadeKonrad + " anos. Meu marido tem " + idadeLucas + " anos.")
//Transformando concatenação em interpolação
console.log(`Eu tenho ${idadeVeri} anos, minha mãe tem ${idadeLais} anos e meu pai tem ${idadeKonrad} anos. Meu marido tem ${idadeLucas} anos.`)

//apresentação pessoal
var nome = "Veridiana"
var idade = 33
var altura = "1,58m"
const nacionalidade = "brasileira"
var cidade = "São Paulo"
var profissao = "programadora"

console.log("Olá, eu me chamo " + nome + ", tenho " + idade + " anos, tenho " + altura + " de altura, sou " + nacionalidade + ", moro em " + cidade + " e sou " + profissao + ".")
//Transformando concatenação em interpolação
console.log(`Olá, eu me chamo ${nome}, tenho ${idade} anos, tenho ${altura} de altura, sou ${nacionalidade}, moro em ${cidade} e sou ${profissao}.`)


var one = 'Hello,'
var two = ' how are you?'
var joined = one + two
console.log(joined)