
function listarBaralhos(baralhos, callback){
    for(let i = 0; i < baralhos.length;i ++){
        
        baralho = baralhos[i]

        console.log(`
        ID: ${baralho.id}
        Titulo: ${baralho.titulo}
        `)
    }
    callback()
}

module.exports = listarBaralhos