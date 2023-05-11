// retorne a somamdo dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(valor => valor % 2 === 0);  // -> filtrar pares
const dobrandoValores = numerosPares.map(valor => valor * 2);   // -> dobrar valores
const somaFinal = dobrandoValores.reduce((acumulador, valor) => acumulador += valor);   // -> reduzir(somar tudo)

console.log('de maneira "passo a passo"', somaFinal);

//de maneira mais curta (encadeando)

const paresDobroEReduce = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador += valor);

console.log('de maneira "encadeada"', paresDobroEReduce);