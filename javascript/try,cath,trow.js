function tratarerro (ERRO){
throw new erro('erro de sintaxe')
}

function imprimirnomegrito(obj){
    try{
          console.log(obj.name.toUpperCase()+ "!!!!!!")
    }catch(a){
        tratarerro()
    }
  

}

const obj = {
    nome: 'marlon'


}
imprimirnomegrito(obj)