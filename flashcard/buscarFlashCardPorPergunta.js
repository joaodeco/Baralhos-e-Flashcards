const { baralhos, flashcards } = require('../data')
const prompt = require ('prompt-sync')()

function listarFlashcardPorPergunta(callback){

    let opçãoListarPorPergunta = prompt('Digite a pergunta do flashcard para listar seus flashcards: ')

    let index = flashcards.findIndex(flash => flash.pergunta == opçãoListarPorBaralhos) < 0
    if(index < 0){

        console.log('Erro voltando para o menu')
    } else{

        console.log(flashcards[index])
    }
    callback()
}

module.exports = listarFlashcardPorPergunta