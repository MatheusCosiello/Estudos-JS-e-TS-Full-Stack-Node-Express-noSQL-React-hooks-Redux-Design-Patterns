// 705.484.450-52 || 070.987.720-03

// valida o cpf
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,'')
        });
    }
}

const ValidaCpf = new ValidaCPF('070.987.720-03');
console.log(ValidaCpf.valida());