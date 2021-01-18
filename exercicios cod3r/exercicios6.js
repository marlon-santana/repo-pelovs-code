/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/


// função juros simples********************************************
function jurosSimples(capitalInicial,taxaDEjuros,tempoDEaplicaçao){
    let tx = (capitalInicial * taxaDEjuros) / 100
    let total = capitalInicial + (tx * tempoDEaplicaçao)
    console.log(total)
}
jurosSimples(1000,5,10)

function jurosCompostos (capitalInicial, taxa, tempo) {
    let res = capitalInicial * (1 + taxa) ** tempo
    console.log(res.toFixed(2))

    
}

console.log(jurosCompostos(100, 1/100, 12));


