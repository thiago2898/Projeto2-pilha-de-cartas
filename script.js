const cheap = []
let menu = ``
let newCard = ``
let leftCard = ``

do {

    menu = prompt(`Quantidade de cartas: ${cheap.length}

    1- Adicionar uma carta
    2- Puxar uma carta
    3- Sair`)  



    switch (menu) {
        case '1':
            newCard = prompt('Qual o nome da nova carta a ser adicionada?')
            cheap.unshift(newCard)
            break
        case '2':
            if (cheap.length === 0) {
                alert('Impossível retirar carta inexistente.')
            } else {
                leftCard = cheap.shift()
                alert(leftCard)   
            }
            break
        case '3':
            alert('Encerrando programa...')
            break
        default:
            alert('Opção inválida.')
    }

} while (menu !== '3')