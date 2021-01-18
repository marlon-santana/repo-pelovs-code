/* objeto constante tem seus atributos mudaveis*/

const pessoa = { nome:'marlon',idade:34}
pessoa.nome = 'tiago' // mudou atributo nome
pessoa.idade = 30 // mudou atributo idade
console.log(pessoa)

// congela o objeto, assim nãoé possivel mudar nenhum atributo

Object.freeze(pessoa)
pessoa.nome = 'fernando'
pessoa.idade = 20
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'marlon',idade:20}) //  já cria o objeto inteiro como constante.
console.log(pessoaConstante)