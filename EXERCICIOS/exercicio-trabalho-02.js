function contarVogais(texto) {
  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

const entrada = "programacao para automacao de testes com javascript";
const resultado = contarVogais(entrada);

console.log(resultado);
