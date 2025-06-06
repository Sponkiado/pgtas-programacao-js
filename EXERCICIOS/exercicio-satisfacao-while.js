function passearComDog(voltasNecessarias) {
  let volta = 1;

  while (volta <= voltasNecessarias) {
    console.log(`Volta ${volta}: passeando com o cachorro`);
    volta++;
  }

  console.log("Dog satisfeito após " + voltasNecessarias + " voltas");
}

// Executando a função
passearComDog(5);
