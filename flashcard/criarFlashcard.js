const prompt = require ('prompt-sync')()

function criarFlashcard(flashcards, callback){

    let perguntaFlashcard = prompt('Qual a pergunta: ')
    let respostaFlashcard = prompt('Qual a resposta: ')
    let idBaralho = prompt('Qual o id do baralho que deseja adicionar esse flashcard: ')

    flashcards.push({id: flashcards.length + 1, pergunta: perguntaFlashcard, resposta: respostaFlashcard, idBaralho: idBaralho})
    console.log(`Flashcard adicionado com sucesso !!`)
    callback()
}

module.exports = criarFlashcard