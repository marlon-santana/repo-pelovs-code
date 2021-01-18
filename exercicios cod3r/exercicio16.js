/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO
 programa recebecomo parâmetros dois valores numéricos e uma string referente à operação
  e a realize com os valores*/

const n1 = 2
const n2 = 3

const soma = n1+n2;
const mult = n1*n2;
const div = n1/n2;
const sub = n1-n2;

const resultado = sub

  switch(resultado){
      case soma:
          console.log(`o resultado de ${n1} + ${n2} é igual a ${resultado}`)
          break;
          case mult:
            console.log(`o resultado de ${n1} x ${n2} é igual a ${resultado}`)
            break;
            case div:
            console.log(`o resultado de ${n1} / ${n2} é igual a ${resultado}`)
            break;
            case sub:
            console.log(`o resultado de ${n1} - ${n2} é igual a ${resultado}`)
            break;

          default:
              console.log("invalido") 
  }