/**
 * Console API
 */
console.log("Aula inicial JS");

console.error("Falha na execução");

console.warn("Atenção");

console.table([{ nome: "Cristian", turma: "02" }]); // tabela

/**
 * Constantes e variaveis
 */

// const - para informações que nunca mudam
// car ou let - para informações que podem mudar

// informações de um dog que não mudam
const nome = "Loki";
const raca = "SRD - vira lata";
const sexo = "Macho";
const cor = "Caramelo";
const dataDeNascimento = "01/01/2020";
const porte = "M";

// informações que mudam
let idade = 5;
let peso = 10.5;
let vacinado = true;
let castrado = false;
let tamanho = "M";

const irmaos = ["Thor", "Hella"];
console.table(irmaos);

/**
 * Tipos de dados - cadeia, inteiro, real, logico, vetor e matriz
 * cadeia - String
 * inteira/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 *
 * undefined - atribuido automaticamente caso nao seja definido um valor para ela
 * null - atribuido propositalmente
 *
 * BigInt = Number para numeros extremamente grandes
 * Symbol = Identificador unico
 *
 *
 */

/**
'Turma 02 do PGTAS' -- SINGLE QUOTE
"Turma 02 do PGTAS" -- double quote
`Turma 02 do PGTAS` -- com crase, template strings
*/

const turma = "02";
console.log("Aula 03 da Turma " + turma + " no sabado");

console.log(`Aula 03 da Turma ${turma}`); // interpolação de strings usando o "${}" para inserir a variavel no meio da frase (precisa usar crase)

const numeroAula = "03";
let data = "05 de Abril";

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril");

console.log(`Aula ${numeroAula} da Turma ${turma} no Sábado dia ${data}`);

// split - separar a string
const nomesDeAlunos = "Cristian Camila Clotilde Frederico Madruguinha";

const nomesDeAlunosSplit = nomesDeAlunos.split(" ");

console.log(nomesDeAlunosSplit);

console.log(nomesDeAlunos.toLowerCase()); // todas minusculas
console.log(nomesDeAlunos.toUpperCase()); // todas maisuculas

console.log(nomesDeAlunos.includes("Frederico")); // procura e mostra se o texto se encontra na variavel

console.log(nomesDeAlunos.replaceAll("a", "i")); // substituir caracteres

const conceitosLogica = "              inteiro real cadeia               ";
console.log(conceitosLogica.trim()); //limpar espaços exagerados no inicio e no final da variavel

let dataParaCortar = "05 de Abril";
console.log(dataParaCortar.slice(0, 2)); // pega do primeiro ao segundo caractere
