// Revisão

const listaFrutas = []
let quantidade = 0

while(true) {
    const menu = Number(prompt("1 - Adicionar Fruta\n2 - Ver Todas as Frutas\n3 - Remover Fruta\n0 - Sair"))
    
    if (menu === 1) {
            let fruta = prompt("Qual fruta deseja adicionar?")
            listaFrutas.push(fruta)
    } else if (menu === 2) {
            for (fruta_atual of listaFrutas) {
                for (let i = 0; i <= listaFrutas.length - 1; i++) {
                        quantidade++
                }
                console.log(`${fruta_atual}":" ${quantidade}\n`)
            }
        } else if (menu === 3) {
            const remover = prompt("Qual Fruta Deseja Remover?")
            const Iremover = listaFrutas.indexOf(remover)
            listaFrutas.splice(Iremover, 1)
        } else if (menu === 0) {
            break
        } else {
            alert("Valor Inválido")
        }
}