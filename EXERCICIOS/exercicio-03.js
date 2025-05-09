// Definindo as informações do dog
let nomeDog = "Bolt";
let idadeDog = 1; // idade em anos
let porteDog = "medio"; // pode ser "pequeno", "médio" ou "grande"

// Definindo idade mínima
const idadeMinima = 2;

// Verificando se pode ser adotado
let podeSerAdotado = (idadeDog >= idadeMinima) || (porteDog === "pequeno");

// Exibindo as informações
console.log(`Nome do dog: ${nomeDog}`);
console.log(`Idade: ${idadeDog} ano(s)`);
console.log(`Apto para adoção: ${podeSerAdotado ? "Sim" : "Não"}`);
