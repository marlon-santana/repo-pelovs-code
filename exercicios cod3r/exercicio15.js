/*15)​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a
 revendapossui, além de carros hatch, sedans, motocicletas e caminhonetes. 
Utilizando uma estrutura switch, caso ocomprador queira o hatch, retorne:
 “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certezaque não prefere este modelo?”.
  Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const veiculo = "hath"

switch(veiculo){
  case "hath":
    console.log("compra efetuada com sucesso")
    break;
    case "motos":
      console.log("tem certeza que não prefere o modelo"+ " "+ veiculo + "?")
      break;
      case "caminhonete":
        console.log("tem certeza que não prefere o modelo"+ " "+ veiculo + "?")
        break;
        default:
          console.log("não temos esse modelo")
}
