/**
 * Arquivo: typeAnnotation.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Type Annotations"
 * Data: 18/09/2023
 * Author: Jonathan Santos
 */

// => Variáveis

let nome: string = "Jonathan Santos";
console.log(nome);

// => Arrays

let animais: string[] = ['Cachorro', 'Gato', 'Coruja', 'Panda'];
console.log(animais);

// => Objetos

let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: "Fusca", ano: 1960, preco: 8000 };
console.log(carro);

// => Functions

function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumeros(2,5));
