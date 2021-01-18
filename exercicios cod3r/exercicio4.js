/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/


function divisaoComresto(dividendo,divisor){
    let res = dividendo%divisor
    console.log(dividendo/divisor)
    console.log(`o resto dessa divisao é ${res}`)

}
divisaoComresto(10,5)