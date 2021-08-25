/* Declaração de variáveis */

var idade = 66;
console.log(`Você tem ${idade} anos`)

/* Condições */
/*Se for abaixo de 16 escrever na tela console.log (`Não vota`)
Se Não console.log(`Vota, `)
Se a variavel idade for maior ou igual a 16, vota,mas é opcional, se for abaixo de 18 é opcional.
*/
if (idade < 16) {
  console.log(`Não vota`)
} else  {
  console.log(`Vota`)
}
if (idade < 18 || idade > 65 ) {
  console.log(`Voto opcional`)
}