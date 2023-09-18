"use strict";
/**
 * Arquivo: numberBigint.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Number e Bigint"
 * Data: 18/09/2023
 * Author: Jonathan Santos
 */
// => Exemplos: number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
let num5 = 0b111011;
console.log("Number - Ponto Flutuante...: ", num1);
console.log("Number - Hexadecimal...: ", num2);
console.log("Number - Octal...: ", num3);
console.log("Number - Binário...: ", num4);
console.log("Tipo...: ", typeof (num4));
// => Exemplos: bigint
let big1 = 9007199254740995n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
console.log("Bigint...: ", big1);
console.log("Bigint - Binário...: ", big2);
console.log("Bigint - Hexadecimal...: ", big3);
console.log("Bigint - Octal...: ", big4);
console.log("Tipo...: ", typeof (big4));
