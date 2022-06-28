const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // o toFixed serve para dizer quantas casas decimais sera exibida

console.log(media.toString()) // serve para transformar em string mas vira todo o conteudo declarado na variavel

console.log(media.toString(2)) // serve para transformar em numero binario todo o conteudo declarado na variavel

console.log(typeof media) //serve para mostrar que é do tipo number

console.log(typeof Number) // serve para mostrar que é um função se chamado

// number (minusculo) é o tipo de dado no caso quando é numerico
// Number (maisculo) é uma função