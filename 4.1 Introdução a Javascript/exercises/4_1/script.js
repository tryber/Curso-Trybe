//Exercício 1

let x = 10;
let y = 15;

console.log('Soma: ' + (x + y));
console.log('Subtração: ' + (x - y));
console.log('Multiplicação: ' + (x * y));
console.log('Divisão: ' + (x / y));
console.log('Módulo: ' + (x % y));

//Exercício 2

let x = 20;
let y = 25;

if (x > y) {
    console.log ("x é maior que y");
} else {
    console.log("y é maior que x");
}

//Exercício 3

let x = 30 
let y = 40
let z = 50

if (x > y && x > z) {
    console.log ("x é maior que y e z");
} else if (y > x && y > z) {
    console.log ("y é maior que x e z");
} else {
    console.log("z é maior que x e y");
}

//Exercício 4

let x = -1

if (x > 0 == true) {
    console.log("positive");
} else {
    console.log("negative");
}

//Exercício 5

let x = 30 
let y = 40
let z = 50

if (x + y + z === 180){
    console.log (true);
} else {
    console.log (false);
}

//Exercício 6

//let variável = valor;
//switch (expressão) {
//    case x:
//      bloco de código 1;
//      break;
//    case y:
//      bloco de código 2;
//      break;

let pecaDeXadrez = 'bispo';

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}




