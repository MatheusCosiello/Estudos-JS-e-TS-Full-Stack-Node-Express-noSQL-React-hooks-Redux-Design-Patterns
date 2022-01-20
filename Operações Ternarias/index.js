// ? :
// Operadores ternarios podem permitir cosigos mais limpos segue exemplo abaixo.
//abaixo temos uma condicional de verificação de pontos simples
//caso usuario tenha + de 1000 pontos ele é vip - de 1000 ele é normal

const usuarioRank = 1000;

if (usuarioRank >= 1000) {
    console.log("Usuario VIP");
}else {
    console.log("Usuario Normal");
}
//----------------Utilizando operador ternario----------------------------------------

const usuarioRank = 1000;
//                 IF + condicional   valor para TRUE   Else  valor para falso
const nivelUsuario = usuarioRank >= 1000 ? "Usuario VIp" : "usuario Normal" ; 
//---------------------------------------------------------------------------------