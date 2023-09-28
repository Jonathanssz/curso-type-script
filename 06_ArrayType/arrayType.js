"use strict";
/**
 * Arquivo: arrayType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Array"
 * Data: 25/09/2023
 * Author: Jonathan Santos
 */
// => Exemplo 01 - Uso de Colchetes:
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// => Exemplo 02 - Array Object:
let frutasObj = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutasObj[3]);
// => Exemplo 03 - Adicionando mais strings com o método "Push":
let idiomas = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarin");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);
// => Exemplo 04 - Identificar tamanho do Array - Método "Length":
console.log(idiomas.length);
// => Exemplo 05 - Exemplo de Array com Spread Operator:
let listaNumeros = [0, 1, 2, 3, 4, 5];
console.log(listaNumeros);
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// => Exemplo 06 - Exemplo de Array com laço de iteração:
let linguagensArray = new Array("JavaScript", "Python", "PHP", "C#");
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
