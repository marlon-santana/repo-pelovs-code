// função factory de objeto*********************************

function criarFuncionario(nome,salario,falta){
    return{
        nome,
        salario,
        falta,
        getsalario(){
            return (salario/30) * (30 - falta)
        }
    }
}
const f1 = criarFuncionario('marlon',1800,4)
const f2 = criarFuncionario('tiago',2000,10)
const f3 = criarFuncionario('fernando',3000,2)
console.log(f1.getsalario(),f2.getsalario(),f3.getsalario())

// função construtora******************************************
function produto(nome,preço,validade){
    this.nome = nome
    this.preço = preço
    this.validade = validade
    
    
}
 const p1 = new produto('arroz',10.00,2)
 console.log(p1)
