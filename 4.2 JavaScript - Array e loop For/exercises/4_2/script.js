// 4.2 Javascript - Array e loop For

//Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers)

//Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0

for (i = 0; i < numbers.length; i++) {
   sum += numbers[i]
}
console.log(sum)

//Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 278

let mediaAritmética = sum/numbers.length
console.log(mediaAritmética)

//Exercício 4

if (mediaAritmética >20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

//Exercício 5

let maiorValor = Math.max(5, 9, 3, 19, 70, 8, 100, 2, 35, 27);

console.log(maiorValor);


//Exercício 6 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i])
    } else {
        console.log ("nenhum valor ímpar encontrado");
    }
}

//Exercício 7

let menorValor = Math.min(5, 9, 3, 19, 70, 8, 100, 2, 35, 27);

console.log(menorValor);
