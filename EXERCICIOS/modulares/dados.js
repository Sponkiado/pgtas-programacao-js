// dados.js
const caes = ['Pantera', 'Luna', 'Thor'];

function entregarPetiscos(lista) {
  lista.forEach(cao => {
    console.log(`Entregando petisco para ${cao}`);
  });
}

export { caes, entregarPetiscos };
