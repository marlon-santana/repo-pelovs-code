const alunos=[10,9.9,7.0,4.9,7.0]

const reduce=(acumulador,valorinicial)=>acumulador + valorinicial;
let media = alunos.reduce(reduce,0)/5;
console.log(`á media das notas dos alunos é : ${media}`)
