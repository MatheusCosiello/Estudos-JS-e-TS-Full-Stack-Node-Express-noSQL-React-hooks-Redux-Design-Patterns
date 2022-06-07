// 705.484.450-52 || 070.987.720-03

// valida o cpf
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });

    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // validando sequencia de numeros
    }

    // gera os digitos e novo cpf
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 +digito2;
    }
    // geradigitos
    // pode se tornar static pois nao utiliza this
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso --;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
 
    // metodo de validação  do cpf
    valida() {
        if (!this.cpfLimpo) return false; //cpflimpo
        if (typeof this.cpfLimpo !== 'string') return false; //cpf é string
        if (this.cpfLimpo.length !== 11) return false; // valida 11 digitos
        if (this.éSequencia()) return false; // veirfica sé é sequencia
        if (this.geraNovoCpf()) return false // verifica se gerou novo cpf
        
        return this.novoCPF === this.cpfLimpo;
    };
}

const CPF1 = new ValidaCPF('070.987.720-03');

if (CPF1.valida()) {
    console.log('cpf valido');
} else {
    console.log('cpf invalido');
}