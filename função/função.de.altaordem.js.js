

// função de forma literal
/*function fun1(){}

// função dentro de uma variavél
 const fun2 = function(){}

 //função armazenada dentro de array

 const array = [function(a,b){return a,b},fun1,fun2]
 console.log(array[0](2,3))

  //armazena em um atributo de objeto

  const obj= {}
  obj.falar = function (){return'olá'}
  console.log(obj.falar())

  // pasa função como parametro

  function run(fun){
      fun()
  } run(function(){console.log('carregando....')})*/
  const pessoa = {
    saudação:'bom dia',
    falar () {
        console.log(this.saudação)
        
    }

  }

    pessoa.falar()


