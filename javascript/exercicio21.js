/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do
conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: ) 
1 - crianças com menosde 10 anos pagam R$80; )
2 -conveniados com idade entre 10 e 30 anos pagam R$50; )
3 -conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e )
4 -conveniados acima de 60 anos pagam R$130*/



function valormensalidade (idade){
    var mensalidade = 100

    if (idade <= 10){
        var mensalidade = 80

    }else if (idade = 10 && idade < 30){
        var mensalidade = mensalidade + 50

    }else if (idade = 30 && idade < 60){
        var mensalidade=mensalidade + 95

    }
     else if (idade = 61 && idade < 100) {
        console.log(mensalidade + 130)

    }
    console.log(mensalidade)
    


}
valormensalidade(80)