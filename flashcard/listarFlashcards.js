 function listarFlashcard(flashcards){
    for(let i = 0; i < flashcards.length;i ++){
        
        flashcard = flashcards[i]

        console.log(`
        ID: ${flashcard.id}
        Pergunta: ${flashcard.pergunta}
        Resposta: ${flashcard.resposta}
        ID do baralho: ${flashcard.idBaralho}
        `)
    }
}

module.exports = listarFlashcard