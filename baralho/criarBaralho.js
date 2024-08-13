const prompt = require ('prompt-sync')()

function criarBaralho(baralhos, callback){

    let tituloBaralho = prompt('Qual o titulo do seu Baralho: ')

    baralhos.push({id: baralhos.length + 1, titulo: tituloBaralho})
    console.log(`Baralho adicionado com sucesso !!`)
    callback()
}

module.exports = criarBaralho