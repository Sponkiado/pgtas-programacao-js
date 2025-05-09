/*
>   - maior que
>=  - maior ou igual que
<   - menor que
<=  - menor ou igual que
==  - igualdade somente de valores
!=  - diferença somente de valores
=== - igualdade de valores e tipo de dado
*/

console.log(`10 > 5 = ${ 10 > 5}`); // verdadeiro = true
console.log(`10 > 5 = ${10 > 5}`);      // true
console.log(`3 >= 7 = ${3 >= 7}`);       // false
console.log(`2 < 8 = ${2 < 8}`);         // true
console.log(`7 <= 7 = ${7 <= 7}`);       // true
console.log(`'5' == 5 = ${'5' == 5}`);   // true (só compara o valor)
console.log(`'5' === 5 = ${'5' === 5}`); // false (valor igual, mas tipo diferente)
console.log(`4 != '4' = ${4 != '4'}`);   // false (valor é igual, ignora o tipo)
console.log(`4 !== '4' = ${4 !== '4'}`); // true (valor igual, mas tipo diferente)


/**
  + adição
  - subtração
  * multiplicação
  / divisão
  % resto
  ** exponencial
 */

  console.log(1 + 1) // 2
  console.log(10 - 7) // 3
  console.log(2 * 2) // 4
  
  console.log(11 / 2)
  console.log(11 % 2)
  
  console.log(4 ** 4)
  
  console.log(2 + 3 * 4) //  precedencia - multiplicao, adicao
  console.log((2 + 3) * 4) //  precedência - dentro do parenteses, depois o que está fora
  
  // 3 * 4 == 12
  // 12 + 2 == 14
