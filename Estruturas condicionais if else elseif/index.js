/*
 IF -> SE | pode ser usado sozinho
 ELSE IF -> SE NÃO | pose ter quantos eu quiser
 Else sempre tem um if antes
 */
//---------------------------------------------------------
// primeiro exemplo de condicional utilizando hardcode

const hora = 10;

if (hora <= 12) {
   console.log('bom dia');
}
//--------------------------------------------------------
//- exemplo de condicional hardcode if e else if
/*
 entre 0 - 11:59 fala bom dia
 entre 12 - 17:59 fala boa tarde
 entre 18 - 23 59 fala boa noite
*/

const horaRelogio = 50;
//  se   hora        menor/igual 0   e            hora          maior/igual11
    if (horaRelogio         >=0      &&         horaRelogio         <=11 ) {
    console.log('Bom dia')

// se não     
} else if (horaRelogio >=12 && horaRelogio <=17 ){
    console.log('Boa tarde')

} else if ( horaRelogio >= 18 && horaRelogio<= 23 ){
    console.log('Boa noite')
} else {
    console.log('Ola usuario')
}
//--------------------------------------------------------------------