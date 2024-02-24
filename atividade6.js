const numero1 = Number(prompt("Digite um número:"))
const numero2 = Number(prompt("Digite outro número:"))

const soma = function(numero1,numero2) {
    return numero1 + numero2
}
console.log(`A soma dos números é igual a ${soma(numero1,numero2)}`)