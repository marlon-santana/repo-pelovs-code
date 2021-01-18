//formula de baskara


//2x**+3x + 5=0
// caucular o delta
function baskaraDelta(a,b,c){

var delta = ( -b*-b)-(4*a*c) 

  let raiz=Math.sqrt(delta)
  var x1 = -b + raiz
  console.log(raiz)
  var m = 2*a
  x1 / (m)
  
  var x2 = -b - raiz
  x2 / (m)
  console.log(`x1 = ${x1/m} e x2 = ${x2/m}`)

}

baskaraDelta(2,7,5)

