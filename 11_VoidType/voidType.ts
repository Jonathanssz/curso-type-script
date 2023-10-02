/**
 * Arquivo: voidType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Void"
 * Data: 02/10/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Funções

function logError(errorMessage: string): void {
    console.log(errorMessage);
}

logError("Required field - Name");

// => Exemplo 02 - Arrow Function

const logErrorMessage = (errorMessage: string): void => {
    console.log(errorMessage);
}

logErrorMessage("Required field - Surname");

// => Exemplo 03 - Void com Variáveis

let varExemploVoid: void;
varExemploVoid = undefined;

console.log(varExemploVoid);
