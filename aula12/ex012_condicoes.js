/*Declaração de Variavéis*/
var agora = new Date()
var hora = agora.getHours()

/*Objetivo: pegar a variável usandi o comando new Date, e variável hora irá receber a variável agora. getHours. Assim pegando a hora do sistema e mostrando na tela
*/

/*mostrar a hora na tela, com a mensagem: 
*/
console.log(`Agora, são exatamente ${hora} horas`);

/* Verificar a hora e dizer Bom dia, Boa tarde ou boa noite */
if (hora < 12) {
  console.log('Bom Dia!')
}
else if (hora <=18) {
  console.log('Boa Tarde!')
}
else {
  console.log('Boa Noite!')
}