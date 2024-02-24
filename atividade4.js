const numero = Number(prompt("Digite um número:"))

function primo(numero) {
    let contador = 0
    for (i = 1; i <= numero; i++) {
        if (numero%i === 0) {
            contador++
        }
    }
    return contador
}

if (primo(numero) === 2) {
    alert(`O número ${numero} é Primo`)
} else {
    alert(`O número ${numero} não é Primo`)
}