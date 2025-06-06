/*
Sintaxe CommonJS:
module.exports = {} / require ('')

ESM - Ecmascript Stantard Modules

*/

function exibirNomePet(nomePet) {
  console.log(`O nome do pet é ${nomePet}`);
}
exibirNomePet(`Pipoca`);
exibirNomePet(`Pantera`);

export { exibirNomePet };
