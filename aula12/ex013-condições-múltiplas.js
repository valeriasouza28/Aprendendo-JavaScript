/*Declarações de Variáveis*/
/*Pegar a data do Sistema, */
var agora = new Date()
var diaSem = agora.getDay()
/*para o JavaScript os dias da semana são esses:
Domingo 
Segunda 
Terça
Quarta
Quinta
Sexta
Sábado
esse getDay vai pegar exatamente esse dia da semana
*/
console.log(diaSem)
/*Estrutura para mostrar os nomes da semana segundo a numeração dos dias da semana em JavaScript*/
switch (diaSem) {
  case 0:
    console.log(`Domingo`)
    break;
  case 1:
    console.log(`Segunda`)
    break;
    case 2:
      console.log(`Terça`)
      break;
    case 3:
      console.log(`Quarta`)
      break;
      case 4:
        console.log(`Quinta`)
        case 5:
          console.log(`Sexta`)
          break;
  default:
    console.log(`[ERRO] Dia Inválido`)
    break;
}