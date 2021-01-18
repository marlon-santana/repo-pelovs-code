//12) Faça um algoritmo que calcule o fatorial de um número.
//n! = n . (n – 1).

function fatorial(n){
    let fatorial=1
    let explicaFator=''
    for (let i = 1;i <= n ; i++){

        fatorial= fatorial*i
        if(explicaFator != ''){
            explicaFator += 'x'
          }
          explicaFator += i;
        console.log((i+"! = "+explicaFator+" = "+fatorial))
    }
}
fatorial(4)
