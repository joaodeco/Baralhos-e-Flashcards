const listarBaralhos = require ('../baralho/listarBaralhos')
const { baralhos, flashcards } = require('../data')
const prompt = require ('prompt-sync')()

function listarFlashcardPorBaralho(callback){
    listarBaralhos(baralhos)

    let opçãoListarPorBaralhos = parseInt(prompt('Digite o id do baralho para listar seus flashcards: '))

    if(flashcards.findIndex(flash => flash.id == opçãoListarPorBaralhos) < 0){

        console.log('Erro voltando para o menu')
    } else{
        
        let array = flashcards.filter(baraio => baraio.idBaralho == opçãoListarPorBaralhos)

        console.log(array)
    }
    callback()
}

module.exports = listarFlashcardPorBaralho