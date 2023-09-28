/**
 * Arquivo: unknownType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Unknown"
 * Data: 28/09/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Tipo Unknown

let valorVar: unknown;

valorVar = true;
valorVar = 123;
valorVar = [];
valorVar = "Hello World";

console.log(valorVar);

// => Exemplo 02 - Diferença entre Any e Unknown

let valor1: any; // O tipo any só apresenta erro quando rodar...
let valor2: unknown;

console.log(valor1.toFixed(2));

if (typeof(valor2) === "number") {
    console.log(valor2.toFixed(2));
}
