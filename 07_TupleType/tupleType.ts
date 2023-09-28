/**
 * Arquivo: tupleType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Tuple"
 * Data: 26/09/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Uso simples de Tuplas em TypeScript:

let pessoa: [string, string, number];
pessoa = ["Jonathan Santos", "Desenvolvedor de Aplicativos Júnior", 24];

console.log(pessoa);

// => Exemplo 02 - Acessando o valor da Tupla:

console.log(pessoa[1]);

// => Exemplo 03 - Outra forma de usar Tuplas em TypeScript (Com Labels):

let pessoa1: [nome: string, cargo: string, idade: number] = ["Jonathan Santos", "Desenvolvedor de Aplicativos Júnior", 24];
console.log(pessoa1);

// => Exemplo 04 - Usando Tuplas com Spread Operator:

let listaFrutas: [...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(... listaFrutas);

// => Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas1: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas1);

// => Exemplo 06 - Uso de função com Tupla:

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}

console.log(listarPessoas(["Jonathan", "Lua"], [24, 16]));

// => Exemplo 07 - Labeled Tuples com Spread Operator numa função:

type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa("Jonathan", "de Souza"));
console.log(criarPessoa("Jonathan", "Santos", "de Souza"));
