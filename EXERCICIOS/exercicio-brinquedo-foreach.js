const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino'];

function entregarBrinquedos(lista) {
  lista.forEach(brinquedo => {
    console.log(`Entregando o brinquedo: ${brinquedo}`);
  });
}
entregarBrinquedos(brinquedos);
