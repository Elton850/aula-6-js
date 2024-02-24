const numero = Number(prompt("Digite um número:"))

function quadrado (numero) {
    total = numero ** 2
    return `O quadrado do número escolhido é: ${total}`
}

console.log(quadrado(numero))