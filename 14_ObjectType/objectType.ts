/**
 * Arquivo: objectType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre "Tipo Object"
 * Data: 03/10/2023
 * Author: Jonathan Santos
 */

export { };

// => Exemplo 01 - Tipo Object

const pessoa = {
    nome: "Jonathan",
    sobrenome: "Souza",
    idade: 24,
    funcao: "Desenvolvedor Júnior"
}

console.log(pessoa);

// => Exemplo 02 - Object como parâmetros de função (podem ser anônimos)

function onboarding01(funcionario: { nome: string }) {
    return "Seja bem-vindo " + funcionario.nome;
}

console.log(onboarding01({ nome: "Jonathan Souza" }));

// => Exemplo 03 - Object Nomeados

interface Pessoa01 {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa01) {
    return "Seja bem-vindo " + pessoa.nome + "! Você será " + pessoa.funcao + " em nossa empresa, parabéns!";
}

console.log(onboarding02({ nome: "Jonathan Souza", funcao: "Desenvolvedor de Aplicativos Júnior" }));

// => Exemplo 04 - Object como type alias, com um optional no object e a propriedade "Readonly" (usado para proibir a modificação de um determinado objeto)

type Pessoa02 = {
    nome: string;
    funcao: string;
    readonly linguagem: string;
    email?: string;
}

function onboarding03(pessoa: Pessoa02) {
    return "Seja bem-vindo " + pessoa.nome + "! Você será " + pessoa.funcao + " em nossa empresa, usando a linguagem " + pessoa.linguagem + ".";
}

console.log(onboarding03({ nome: "Jonathan Souza", funcao: "Desenvolvedor de Aplicativos Júnior", linguagem: "TypeScript" }));

// => Exemplo 05 - Tipos de Extensões (Heranças) 

interface Pai { nome: string; }
interface Mae { sobrenome: string; }
interface Filho extends Pai, Mae { idade: number; }

const filho: Filho = {
    nome: "Jonathan",
    sobrenome: "Souza",
    idade: 24
}

console.log(filho);

// => Exemplo 06 - Tipos de Interseções

interface Cachorro { tipo: string; }
interface Gato { tipo: string; }

type Pet = Cachorro & Gato;

const pet: Pet = { tipo: "Maine Coon" }

console.log(pet);

// => Exemplo 07 - Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = {
    nome: "Jonathan",
    email: "jons@gmail.com"
}

const admin: Admin = {
    nome: "Paulo",
    email: "paul@gmail.com",
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
