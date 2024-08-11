console.log(`\nTrabalhando com condicionais`)

const listaDeDestinos = new Array ('Salvador','São Paulo','Rio de Janeiro')

const idadeComprador = 16
const estaAcompanhado = false
let passagemComprada = false
let destino = 'Salvador'
let destinoDisponivel = false
let contador = 0

const podeComprar = idadeComprador >= 18 || estaAcompanhado


// //mostrar se existe determinado item no array com while, usando break
//     let contador = 0//inicia com contador em 0
     //inicia com destinoDisponivel em false

    // while (contador<3){//enquanto o contador for menor que 3
    //     if (listaDeDestinos[contador] == destino){
    //         destinoDisponivel = true
    //         break//quebra o fluxo caso a condição seja atendida
    //     }
    //     contador +=1
    // }
    // console.log("Destino disponível:", destinoDisponivel)

    if (podeComprar){
        console.log("Comprador maior de idade ou acompanhado. Venda liberada.")
        console.log ("Destinos possiveis:")
        console.log(listaDeDestinos)
        passagemComprada = true
    }else{
        console.log("Comprador menor de idade e desacompanhado. Venda não autorizada!")
        }

        console.log("\nEmbarque: \n")
    
    for (contador = 0; contador < 3; contador++){//declara iteracao de variavel, condicao a verificar, o que executar
        if (listaDeDestinos[contador] == destino){
            destinoDisponivel = true
            break
        }
    }

    if(podeComprar && destinoDisponivel){
        console.log("Boa viagem!")
    }else{
        console.log("Você não pode embarcar.")
    }
    console.log("Destino disponível:", destinoDisponivel)