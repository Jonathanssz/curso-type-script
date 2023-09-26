"use strict";
/**
 * Arquivo: tupleType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Tuple"
 * Data: 26/09/2023
 * Author: Jonathan Santos
 */
// => Exemplo 01 - Uso simples de Tuplas em TypeScript:
let pessoa;
pessoa = ["Jonathan Santos", "Desenvolvedor de Aplicativos Júnior", 24];
console.log(pessoa);
// => Exemplo 02 - Acessando o valor da Tupla:
console.log(pessoa[1]);
// => Exemplo 03 - Outra forma de usar Tuplas em TypeScript (Com Labels):
let pessoa1 = ["Jonathan Santos", "Desenvolvedor de Aplicativos Júnior", 24];
console.log(pessoa1);
// => Exemplo 04 - Usando Tuplas com Spread Operator:
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// => Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas1 = [5, true, ...listaFrutas];
console.log(listaFrutas1);
// => Exemplo 06 - Uso de função com Tupla:
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
console.log(listarPessoas(["Jonathan", "Lua"], [24, 16]));
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Jonathan", "de Souza"));
console.log(criarPessoa("Jonathan", "Santos", "de Souza"));
