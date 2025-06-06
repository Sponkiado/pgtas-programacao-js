// Definindo as informações do dog
var nome = "Rex"; // Nome do dog
var peso = 10; // Peso do dog em kg
var estoque = 3000; // Estoque de ração em gramas

// Calculando a quantidade de ração por dia
var racaoPorDia = peso * 30;

// Calculando quantos dias o estoque vai durar
var diasEstoque = estoque / racaoPorDia;

// Exibindo os resultados
console.log("Nome do dog: " + nome);
console.log("Peso: " + peso + " kg");
console.log("Quantidade de ração recomendada por dia: " + racaoPorDia + " g");
console.log(
  "Quantidade de dias que o estoque vai durar: " + diasEstoque + " dias",
);
