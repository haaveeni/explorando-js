console.log(`\nTrabalhando com condicionais`)

const listaDeDestinos = new Array ('Salvador','São Paulo','Rio de Janeiro')

const idadeComprador = 17
const estaAcompanhado = true
let passagemComprada = false

if (idadeComprador >= 18 || estaAcompanhado){
    console.log("\nVenda: \n Comprador maior de idade ou acompanhado. Venda liberada.")
    console.log ("Destinos possiveis:")
    console.log(listaDeDestinos)
    passagemComprada = true

    }else{
        console.log("Comprador menor de idade e desacompanhado. Venda não autorizada!")
    }
    console.log("\n\nEmbarque: \n")
    if (passagemComprada || estaAcompanhado){
        console.log("Boa viagem!")
    }else{
        console.log("Você não pode embarcar.")
    }