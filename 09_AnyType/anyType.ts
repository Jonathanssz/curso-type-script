/**
 * Arquivo: anyType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Any"
 * Data: 28/09/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Tipo Any:

const a: any = 24;
const b: any = ["Jonathan"];

const result = a + b;

console.log(result);

// => Exemplo 02 - Inferido implícitamente:

let frase; // Se passar o mouse em cima vai ver que é any
console.log(typeof(frase));

frase = "Oi pessoal, tudo bem ?";

console.log(frase);
console.log(typeof(frase));

// => Exemplo 03 - Usos do Tipo Any:

const formulario: any = {
    nome: "Jonathan",
    sobrenome: "Souza",
    idade: 24
}

console.log(formulario);
