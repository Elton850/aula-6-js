const raio = Number(prompt("Digite um número:"))

function APCirculo(raio) {
    area = 3.14 * raio ** 2
    perimetro = 2 * 3.14 * raio
    return `O Raio do circulo é: ${area}\nO Perímetro do Círculo é: ${perimetro}`
}

console.log(APCirculo(raio))