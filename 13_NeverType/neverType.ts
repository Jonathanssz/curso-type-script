/**
 * Arquivo: neverType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Never"
 * Data: 03/10/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Never - Throw Exception:

function error(message: string): never {
    throw new Error(message);
}

console.log(error("Erro de Mensagem - 01"));

// => Exemplo 02 - Never inferido automaticamente

function rejectMessage() {
    return error("Erro de Mensagem - 02"); // Apenas para exemplo da interpretação do TypeScript
}

// => Exemplo 03 - Função que contém loop infinito

const loopInfinito = () => {
    while (true) {
        console.log("Olá Desenvolvedores!"); // Apenas para exemplo da interpretação do TypeScript
    }
}
