/*

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
 // código aqui
}
pares(32, 321);

*/

function pares(x, y) {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(32, 321);
