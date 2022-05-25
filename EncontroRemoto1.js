var  listaDePecasCarro  =  ['Motor', 'Roda', 'amortecedor', 'freio', 'retrovisor' ] ;
let PesoAtual = 100
let PesoMinimo = 50
let PesoMaximo = 200
let Nomepeca = ['Motor', 'Roda', 'amortecedor'];

if (PesoAtual =< 100){
    console.log('A peça do carro precisa ter o peso mínimo de 50 gramas');
} else {

    console.log('A peça possui o peso ideal');
}


if(listaDePecasCarro.length < 10) {
  console.log('É possível cadastrar mais peças');
} else{
   console.log('Não é mais possível cadastrar peças'); 

}
 if (NomePeca.length > 5) {
     console.log('O nome da peça está adequado para o cadastro');
 } else if (NomePeca.length == 0){
     console.log('O nome da peça não pode estar vazio');
 }else {
     console.log('O nome da peça precisa ter mais de 5 letras, digite um nome valido');
 }
