const { baralhos } = require('../data')
const listarBaralhos = require('./listarBaralhos')
const prompt = require ('prompt-sync')()

function deletarBaralho(){
    listarBaralhos(baralhos)

    let opcaoRemover = parseInt(prompt('Qual dessas você deseja remover: '))

    opcaoRemover = baralhos.findIndex(baraio => baraio.id == opcaoRemover)

    baralhos.splice(opcaoRemover, 1)
    console.log('Removido com sucesso !! ')
}

module.exports = deletarBaralho