
function pessoa(nome,idade,pais,sexo){
this.nome=nome
this.idade=idade
this.pais=pais
this.sexo=sexo
}
pessoa.prototype.soma = function(){
    console.log(idade*2)
}

pessoa.prototype.lingua ="portugues"

const meupai = new pessoa('jorge',40,'br','m')
console.log(meupai,'lingua :',meupai.lingua)