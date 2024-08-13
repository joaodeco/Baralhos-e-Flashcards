const prompt = require ('prompt-sync')()
const criarBaralho = require ('./baralho/criarBaralho')
let { baralhos } = require ('./data')
const listarBaralhos = require ('./baralho/listarBaralhos')
const atualizarBaralho = require ('./baralho/atualizarBaralho')
const deletarBaralho = require ('./baralho/deletarBaralho')

function menuPrincipal(){
    console.log('Esses são as nossas opções, escolha uma delas para poder gerenciar seus baralhos ou flashcards!!')

    console.log(`
        -x- Menu Principal -x-
        1. Gerenciar Baralhos
        2. Gerenciar Flashcards
        0. Sair
    `)

    let opcao = prompt('Escolha oque deseja gerenciar: ')

    switch(opcao){
        case '1':
            gerenciarBaralhos()
            break
        case '2':
            gerenciarFlashcards()
            break
        case '0':
            break
        default:
            console.log('ERRO > OPÇÂO INVALIDA, TENTE NOVAMENTE !')
            menuPrincipal()
    }
}

function gerenciarBaralhos(){
    console.log(`
    Aqui você poderá gerenciar seus baralhos heis aqui suas opções:

    -x- Menu de Gerenciamento de Baralhos -x-

        1. Atualizar Baralho
        2. Criar Baralho
        3. Deletar Baralho
        4. Listar Baralhos
        0. Voltar ao Menu Principal
    `)

    let opcaoBaralhos = prompt('Qual sua opção: ')

    switch(opcaoBaralhos){
        case '1':
            atualizarBaralho(menuPrincipal)
            break
        case '2':
            criarBaralho(baralhos, menuPrincipal)
            break
        case '3':
            deletarBaralho()
            menuPrincipal()
            break
        case '4':
            listarBaralhos(baralhos)
            menuPrincipal()
            break
        case '0':
            menuPrincipal()
            break
        default:
            console.log('ERRO > OPÇÂO INVALIDA, TENTE NOVAMENTE !')
            gerenciarBaralhos()
            break
    }
}

function gerenciarFlashcards(){
    console.log(`
    Aqui você poderá gerenciar seus baralhos, heis aqui suas opções:

    -x- Menu de Gerenciamento de Flashcards -x-

        1. Atualizar Flashcard
        2. Buscar Flashcard por Baralho
        3. Buscar Flashcard por pergunta
        4. Criar Flashcard
        5. Deletar Flashcard
        6. Buscar Flashcard Por ID
        7. Listar Flashcard
        8. Listar Flashcard Por Baralho
    `)
    let opcao
}

menuPrincipal()