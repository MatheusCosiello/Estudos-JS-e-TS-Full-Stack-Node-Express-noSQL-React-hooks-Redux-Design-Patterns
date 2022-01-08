// operadores de comparação
/*
>  MAIOR QUE
>= MAIOR OU IGUAL A
< MENOR QUE
<= MENOR OU IGUAL A
== IGUALDADE (SOMENTE VALORES)
=== IGUALDADE ESTRITA (VALORES E TIPOS)
!= DIFERENTE  (VALOR)
!== DIFERENTE ESTRITO (VALORES E TIPOS)
*/

// operadores logicos
/*
&& -> AND -> E ((todas as expressoes tem que ser verdadeiras para retornar true))
|| -> OR -> ou ((se uma expressao for verdadeira retorna verdadeiro))
! -> not -> não (inverte os valores Boolean)
*/

//--------------------------------- exemplo de AND---------------------------------

const expressoesAnd = true && true && true && true;
//-------------------------exemplo de OR---------------------------------------------
const expressoesOr =  false || false || true || false; ;
//------------------------Exemplo de NOT----------------------------------------------
console.log(!true); // retorna false pois esta negando true
console.log(!!true); // retorna True pois esta negando a negação true -> false -> true
//-----------------------exemplo hardcode de uso AND e ===(igualdade)-------------

const usuario = "User";
const senha = "Guest_123";
//                      TRUE                    FALSE
const vaiLogar = usuario === "User" && senha === "Guest";

console.log(vaiLogar); // NÃO VAI LOGAR FALSE
//---------------------------------------------------------------------