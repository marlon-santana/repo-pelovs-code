/*14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos:
 Caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
  Caso kiwi, retorne: “Estamos comescassez de kiwis”. Caso melancia, retorne:
   “Aqui está, são 3 reais o quilo”. Teste com estas três opções .
Crietambém um default, que retornará uma mensagem de erro no console*/



   const fruta = "kiw"
   switch(fruta ){
      case "maçã":
         console.log("não vendemos essa fruta")
         break;
         case "kiwi":
            console.log("estamos com scassez dessa fruta")
            break;
            case "melancia":
               console.log("aqui está, são 3 reais o quilo")
               break;
               default:
                  console.log("ERRO!!! fruta nã existe")
   }

