const prompt = require ('prompt-sync')()
const listarBaralhos = require ('./listarBaralhos')
let {baralhos} = require('../data')

function atualizarBaralho(callback){
    listarBaralhos(baralhos)
    let opcaoEditar = parseInt(prompt('Essas são nossas opções de baralhos para editar, por favor escolha uma: '))

    opcaoEditar = baralhos.findIndex(baraio => baraio.id == opcaoEditar)
    
    let novoTitulo = prompt('Qual o novo titulo do seu baralho: ')
    baralhos[opcaoEditar].titulo = novoTitulo
    console.log('Editado com sucesso !!')
    callback()
}

module.exports = atualizarBaralho