const { flashcards } = require('../data')
const listarFlashcard = require('./listarFlashcards')
const prompt = require ('prompt-sync')()

function deletarFlashcard(){
    listarFlashcard(flashcards)

    let opcaoRemover = parseInt(prompt('Qual dessas você deseja remover: '))

    opcaoRemover = flashcards.findIndex(flashcad => flashcad.id == opcaoRemover)

    flashcards.splice(opcaoRemover, 1)
    console.log('Removido com sucesso !! ')
}

module.exports = deletarFlashcard