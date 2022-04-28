                       //REQUISITOS OBRIGATORIOS
// primeiro: deve partir de zero até o numero de alunos total da turma;
// segundo: se o número de alunos for = 0, escreva zero e leia numero 0;
// terceiro: se o número de alunos for = {1,3,5,7}, escreva impar e leia numero;
// quarto: se o número de alunos for = {2,4,6,8...}, escreva par e leia o numero.
                             //OBSERVAÇÕES
//CASO O CODIGO DE ERRO CONSULTA AULA REFERENTE AO ENCONTRO 2;
//CASO SEJA NECESSERARIO AVERIGUAR SOLUÇÕES NA DOCUMENTAÇÃO;
//CONSULTA O STARK OVERFLOW;
//TOMAR CAFE;
//FAZER UMA ORAÇÃO.

//número de alunos
let nun_de_alunos = 12

for (let contador = 0; contador <= nun_de_alunos; contador++) {
   //console.log(contador)

   if(contador == 0) {
      console.log("O númeor atual de alunos é zero")
   } else if(contador % 2 == 0) {
      console.log('O número' + contador + ' e par')
   } else {
      console.log('O número ${contador} e impar')
   }
}
