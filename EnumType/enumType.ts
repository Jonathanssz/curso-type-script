/**
 * Arquivo: enumType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Enum"
 * Data: 27/09/2023
 * Author: Jonathan Santos
 */

// => Exemplo 01 - Numeric Enums:

enum Idiomas {
    Portugues,
    Ingles,
    Espanhol,
    Frances
}

console.log(Idiomas);

// => Exemplo 02 - String Enums:

enum DiaSemana {
    Domingo = "DOM",
    Segunda = "SEG",
    Terca = "TER",
    Quarta = "QUA",
    Quinta = "QUI",
    Sexta = "SEX",
    Sabado = "SAB"
}

console.log(DiaSemana);
console.log(DiaSemana.Domingo);

// => Exemplo 03 - Acessar o valor de um Enum com uma chave (Usando o const):

const enum Comidas {
    Hamburguer = "Hamburguer",
    Coxinha = "Coxinha",
    Pizza = "Pizza",
    Torta = "Torta",
    Fruta = "Fruta"
}

function comidas(c: Comidas) {
    if (c === Comidas.Fruta) {
        return "Comida Saudável!";
    } else {
        return "Coma com moderação!";
    }
}

console.log(comidas(Comidas.Coxinha));
console.log(comidas(Comidas.Fruta));

// => Exemplo 04 - Exemplo de Uso do Enum:

enum StatusTarefa {
    Todo,
    Progress,
    Done
}

const tarefa1 = {
    id: 1,
    status: StatusTarefa.Done,
    descricao: "Parabéns, Tarefa Concluída com Sucesso!"
}
const tarefa2 = {
    id: 2,
    status: StatusTarefa[1],
    descricao: "A Tarefa ainda está em Progresso..."
}

if (tarefa1.status === StatusTarefa.Done) {
    console.log("Enviar e-mail: Tarefa Concluída!");
}

if (tarefa2.status === StatusTarefa[1]) {
    console.log(tarefa2.descricao);
}
