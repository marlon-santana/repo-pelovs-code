/*
var endereço = {
    rua:'paulista',
    numero:27,
    bairro:'cabuçu',
    cidade:'nova iguaçu',
    uf:'rio de janeiro',
}
function imprimir(){
  rua = endereço.rua
  numero = endereço.numero
  bairro = endereço.bairro
  cidade = endereço.cidade
  uf = endereço.uf
  console.log(`o usuario mora na rua  ${rua} de numero ${numero},bairro ${bairro} cidade ${cidade} no estado ${uf}`)

}
imprimir()

console.log(endereço.cidade)
 function pares(x,y){
     for ( x = 0; x <= y ; x++){
        if(x%2 ==0){
           console.log(x) 
           
        }
     }
console.log(`numeros pares entre ${x} e ${y} são esses de cima`)
 }
 pares(1,43)


 function habilidades(x){
     
     if (skills.indexOf(x) != -1){
         console.log('verdadeiro')
         console.log(x)
         console.log(`a linguagem certa é  ${x} parabéns vc acertou!!`)
     }else {
         console.log('falso')
     }

 }

 var skills= ['c++','java','javascript','python']
 
 habilidades('javascript')*/

function experiencia(anos){

    if ( anos <= 1){
        console.log('nivel inciante')
    } else if (anos <=3){
        console.log('nivel intermediario')

    }else if(anos <= 6){
        console.log('nivel avançado')

    }else if(anos <= 7){
        console.log('jedi master')

    }
    

}
experiencia(7)
experiencia(3)
experiencia(5)
experiencia(2)