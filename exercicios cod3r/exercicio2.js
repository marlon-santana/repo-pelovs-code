/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


function tiposDEtriangulos(a,b,c){
    let l1 = a
    let l2 = b
    let l3 = c

    if ( a === b && b === c) {
        console.log("triangulo equilátero")
    }else if ( a === b && b != c){
        console.log("triangulo isóles")
    
    }else if (a != b && b!=c){
        console.log("triangulo escaleno")
    }


}
tiposDEtriangulos(10,10,10)
  
