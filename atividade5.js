while (true) {
    const menu = Number(prompt("Escolha uma operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair"))

    if (menu === 0) {
        break
    }

    const numero1 = Number(prompt("Digite um número"))
    const numero2 = Number(prompt("Digite outro número"))
    let resultado = 0

    const realizarOperacao = function(menu) {
        if (menu === 1) {
            resultado = `A soma dos valores é de: ${numero1 + numero2}`
        } else if (menu === 2) {
            resultado = `A subtração dos valores é de: ${numero1 - numero2}`
        } else if (menu === 3) {
            resultado = `A multiplicação dos valores é de: ${numero1 * numero2}`
        } else {
            resultado = `A divisão dos valores é de: ${numero1 / numero2}`
        }
        return resultado
    }

    console.log(realizarOperacao(menu))
}