// factory function (função fabrica)
function criaPessoa(nome, sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala : function(assunto){
            return `${nome} está falando sobre ${assunto}.`;
        },
        altura,
        peso,
        // Getter
         get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }        
        
    };
}

const p1 = criaPessoa('matheus','cosiello',1.70,110);
p1.nomeCompleto = "matheus Cosiello";
console.log(p1.imc); 
console.log(p1.fala('programação'))
console.log(p1.nomeCompleto);
