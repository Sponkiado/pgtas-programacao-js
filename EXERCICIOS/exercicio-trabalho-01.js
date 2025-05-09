function removeStrings(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  const entrada = [536, "pedra", 2.6, "papel", 3, 999, "tesoura"];
  const resultado = removeStrings(entrada);
  
  console.log(resultado);
  