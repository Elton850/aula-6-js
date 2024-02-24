function contPalavra (palavra) {
    const tamanho = palavra.length
    const listaVogais = []
    const listaConsoantes = []
    const vogais = "aeiou"
    const consoantes = "bcdfghjklmnpqrstvwxyz"
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            listaVogais.push(letra)
        } else if (consoantes.includes(letra)) {
            listaConsoantes.push(letra)
        }
    }
    return [tamanho,listaVogais,listaConsoantes]
}

const palavra = prompt("Digite uma palavra:")

const relatorio_palavra = contPalavra(palavra)

const tamaho = relatorio_palavra[0]