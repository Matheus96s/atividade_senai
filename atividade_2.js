
var n_participante = [''];
var nome_participante = [''];
var idade = [''];
var nun_participantes = [''];
//A variável data_atual retorna a data atual
var dataatual = new Date();
//A variável data_evento é do tipo: (string)
var dataevento = new Date('2022,07,15');

//condição data do evento
if(datatual > dataevento === true)
{
console.log ('Data inválida!!!');
} else {
console.log('O evento ocorrerar no dia: ', dataevento);
}
var nome = prompt("Qual o seu nome?", "nome_participante");
var nome = prompt("Qual é sua idade?", "idade");
//condição idade do participante
if (idade < 18 )
{
console.log ('Desculpe' + nome_participante + 'seu cadastro não não pode ser realizado por conta da idade!');
} else {
console.log('Parabens' + nome_participante +'Você tem '+ idade +' anos, o cadastro será realizado');
}

//condição oara máximo de participantes
if (n_participante.length < 100) 
{
console.log ('O cadastro oara o evento foi realizado com sucesso!);
} else {
console.log ('desculpe, seu cadastro não pode ser realizado, o numero total de participantes ja foi atingido!');
}
console.log('Número de participantes:', n_participante.length);

//exibir lista de participantes
console.log('Lista dos participantes do evento:');
for (var i = 0; i < n_participante.length; i++) {
  console.log(n_participante[i]);
}
