/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
09)*/

let mylista = "2 ,20, 10, 5, 2, 30, 50, 12, 15, 9"
 
function transformarArray(str){
 let pontuaçoes = str.split(",")
 let qtquebraderecordes = 0
 let piorjogo = 1
 let maiorpontos =pontuaçoes[0]
 let menorpontos =[0]
  for ( let i = 1; i < pontuaçoes.length; i++){
      if (pontuaçoes[i] >maiorpontos){
          maiorpontos = pontuaçoes[i]
          qtquebraderecordes++
      }else if (pontuaçoes[i] < menorpontos){
          menorpontos = pontuaçoes[i]
          piorjogo = i+1;
      }
  }
  console.log( [piorjogo,qtquebraderecordes])



}
//console.log(transformarArray(str))
transformarArray(mylista)
