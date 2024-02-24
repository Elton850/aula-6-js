const palavra = prompt("Digite uma palavra")

function contVogais(palavra) {
    const vogais = "aeiou"
    let contador = 0

    for (letra of palavra) {
        if (vogais.includes(letra.toLowerCase())) {
            contador++
        }
    }
    return `A palavra possui: ${contador} vogais`
}

console.log(contVogais(palavra))