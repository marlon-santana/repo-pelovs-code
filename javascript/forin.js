const notas = [30,10,40,60,80]

for (let i in notas){
    console.log(i,notas[i])

}
const pessoa = {
    nome:'marlon',
    idade: 34,
    peso: 80,
    cidade:'cabuçu',

}
for (let atributo in pessoa){
    console.log(`${atributo}= ${pessoa[atributo]} `)
}