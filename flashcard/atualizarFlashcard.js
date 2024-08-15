const prompt = require ('prompt-sync')()
let {flashcards} = require('../data')
const listarFlashcard = require('./listarFlashcards')

function atualizarFlashcards(callback){
    listarFlashcard(flashcards)
    let opcaoEditar = parseInt(prompt('Essas são nossas opções de Flashcards para editar, por favor escolha uma: '))

    opcaoEditar = flashcards.findIndex(flashcad => flashcad.id == opcaoEditar)
    
    let novaPergunta = prompt('Qual a nova pergunta do seu flashcard: ')
    let novaResposta = prompt('Qual a nova resposta do seu flashcard: ')

    flashcards[opcaoEditar].pergunta = novaPergunta
    flashcards[opcaoEditar].resposta = novaResposta
    console.log('Editado com sucesso !!')
    callback()
}

module.exports = atualizarFlashcards