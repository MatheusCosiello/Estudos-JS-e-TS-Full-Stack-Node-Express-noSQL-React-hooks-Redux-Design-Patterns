// Getter  obtem um valor
// Setter setar um valor

function Produto (nome,preco,estoque){
    

    let estoquePrivado = estoque;
    Object.defineProperties(this,{
        nome:{
            enumerable: true,   
            value : nome,    
            writable :false,    
            configurable:false  
        },
        preço: {
            enumerable: true,  
            value : preco,    
            writable :false,    
            configurable:false   
        },
        estoque:{
            enumerable: true,   // mostra a chave  
            configurable:true,  // configuravel 
            get: function (){       // pegando o valor
                return estoque;
            },
            set: function(valor){       // setando um valor
                if (typeof valor !== 'number'){
                   throw new TypeError('error bad value');
                }
                return estoquePrivado = valor;
            } 
        }
    });
};

     const p1 = new Produto ('calças',20,3);
     console.log(p1); // exibi Produto { nome: 'calças', 'preço': 20, estoque: [Getter / setter] }

     // para exibir o estoque é necessario executa o estoque com p1.estoque
     console.log(p1.estoque); // exibi 3
     p1.estoque = 'a';
     console.log(Object.keys(p1));