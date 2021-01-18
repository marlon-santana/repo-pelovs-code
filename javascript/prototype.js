

const carro = {
 cor:'preto',
 modelo: 'sedan',
 ano:2020,
 cambio:'auto'
}
carro.peso="kg"
//console.log(carro)


const carro2 = Object.create(carro)// cria  um novo objeto com as propriedades do prototipo ja existente
carro2.cor='branco'
carro2.cambio='manual'
//console.log(carro2.cor,carro2.ano,carro2.cambio,carro2.peso)

let carro3 = Object.create(carro2)
carro3.cor="azul"
console.log(carro3.modelo)
console.log(carro2.modelo)
console.log(carro.cor)






 