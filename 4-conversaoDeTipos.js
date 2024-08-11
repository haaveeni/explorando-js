console.log("Conversão de Tipos:")

console.log("a" + "a")
console.log("2" + "2")//a soma de textos é entendida como concatenação, então o resultado será 22

console.log("10" / "2") //já no caso das outras operações, como a divisão, a conversão é IMPLICITA, então o resultado será 5

console.log("10" * "2")//o mesmo acontece com multiplicacao
//resultado = 20

console.log("10" - "2")//e com subtração
//resultado = 8

console.log("10" ** "2")//e com exponenciacao
//resultado = 100

//PARSE analisa o dado da forma como vc pedir
console.log(parseInt("2") + parseInt("2"))
//parseInt faz uma conversão explicita de texto para inteiro
//resultado = 4

console.log(parseInt("a"))
//se usado com uma letra, o resultado será NaN (not a number)

//Casas decimais são separadas com ponto e não com virgula (sistema americano)
console.log(6.5)
console.log(6,5)//resultado = 6 5
//se separado com virgula, ele vai separar com espaço e considerar que são dois inteiros

console.log("2" * 2 + "a" + 3)

console.log(parseInt("a"))