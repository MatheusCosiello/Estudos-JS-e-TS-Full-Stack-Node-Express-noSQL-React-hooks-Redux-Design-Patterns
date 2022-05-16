// 705.484.450-52 || 070.987.720-03

/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2

70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)

Se o número digito for maior que 9, consideramos 0.
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x

11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}
// validando pfc
ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false; // nao enviado retorna undefined
  if(this.cpfLimpo.length !== 11) return false; // nao tem 11 digitos retorna false
  if(this.isSequencia()) return false; // caso seja sequencia de digito 1111111 valida como false

  const cpfParcial = this.cpfLimpo.slice(0, -2); // pega o cpf sem digitos
  const digito1 = this.criaDigito(cpfParcial); // cria o digito 1
  const digito2 = this.criaDigito(cpfParcial + digito1); // cria o digito 2

  const novoCpf = cpfParcial + digito1 + digito2; // concatenando cpf parcial + digito1 e digito2
  return novoCpf === this.cpfLimpo; // retorna se o cpf é valido
};

// converte a sequencia numerica de cpfParcial 07098772003  em array[0,7,0,9,8,7,7,2,0,0,3]
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  // contador regressivo
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => { // multiplica os valores do array de traz pra fente
    ac += (regressivo * Number(val)); 
    regressivo--;
    return ac;
  }, 0);

  // checagem se  comtem 11 digitos
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito); // retorna 0 caso o valor da conta seja maior q 9 (ternario)
};

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}