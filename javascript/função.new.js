
// palavra reservada new  cria um novo objeto
//crie um codigo que faça a mesma função do new.

function aula (nome ,video){
    this.nome=nome
    this.video=video

}
const aula1= new aula('primeira aula',233)
const aula2=new aula('segunda aula',122)
console.log(aula1,aula2)

function novo(f,...parametros){
    const obj={}
    obj.__proto__= f.prototype
    f.aplly(obj,parametros)
    return obj

}
 const aula3= novo ('primeira aula',233)
 const aula4=novo ( 'segunda aula',122)
 console.log(aula3,aula4)
