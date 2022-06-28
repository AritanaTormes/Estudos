let IsAtivo = false
console.log(IsAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // colocando duas vezes a negação (!!) ele vira


console.log('os verdadeiros...')
console.log(!33)
console.log(!!-1)
console.log(!!' ') //verdadeiro com um espaço na string
console.log(!![]) // mesmo com array vazio representa verdadeiro
console.log(!!{}) //objeto literal vazio també verdadeiro
console.log(!!Infinity) //infinity também se comporta como verdadeiro
console.log(!!(isAtivo = true))

console.log("os falsos....")

console.log(!!0)
console.log(!!'') //string vazia é falsa
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(IsAtivo = false))

console.log("para finalizar")

console.log(!!('' || null || 0 || ' '))