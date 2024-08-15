const { baralhos, flashcards } = require('../data')
const prompt = require ('prompt-sync')()

function listarFlashcardPorPergunta(callback){

    let opçãoListarPorPergunta = prompt('Digite a pergunta do flashcard para listar seus flashcards: ')

    if(flashcards.findIndex(flash => flash.pergunta == opçãoListarPorBaralhos) < 0){

        console.log('Erro voltando para o menu')
    } else{

        console.log(flashcards[opçãoListarPorPergunta])
    }
    callback()
}

module.exports = listarFlashcardPorPergunta