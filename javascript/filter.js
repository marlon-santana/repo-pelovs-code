const produtos =[
    {nome:'noebook',preço:2499,fragil:true},
    {nome:'ipad pro',preço:4199,fragil:true},
    {nome:'copo de vidro',preço:1899,fragil:true},
    {nome:'copo plastico',preço:1099,fragil:false}

]
// retorne somente os itens mais caros e frageis da lista usando filter
console.log(produtos.filter(function(p){
    return p.fragil===true && p.preço>1999

}))
// jeito do professor
const caro=produto=>produto.preço>=1999
const fragil=produto=>produto.fragil

console.log(produtos.filter(caro).filter(fragil))