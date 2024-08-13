const prompt = require ('prompt-sync')()
const listarBaralhos = require ('./listarBaralhos')

function atualizarBaralho(baralhos, callback){
    listarBaralhos()
    let opcaoEditar = prompt('Essas são nossas opções de baralhos para editar, por favor escolha uma: ')
    
    let novoTitulo = prompt('Qual o novo titulo do seu baralho: ')
    baralhos.push({titulo: novoTitulo})
}

module.exports = atualizarBaralho