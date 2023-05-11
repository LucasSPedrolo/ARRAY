//reduce é interessante utilizar para diminuir um array a um unico elemento passa por todo array


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); //entradas :  acumulador, valor, indice e array, da para adicionar um valor padrao na saida

console.log('acumula valores', total);

//retorne um array com os pares (filter)

const pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador.push(valor); //vai adicionar em um array o valor porem n usar com reduce , utilize filter
    }

    return acumulador;
}, []); //transforma a saida em um array vazio

console.log('numeros pares em um array', pares)

//retorne um array com o dobro dos valores (map)

const dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2) //não utilizar, preferencia usar map para essa ação
    return acumulador;
}, []);

console.log('o dobro dos numeros', dobro);

//retorne a pessoa mais velha

const pessoas = [
    { nome: 'lucas', idade: 21 },
    { nome: 'maria', idade: 56 },
    { nome: 'vanessa', idade: 29 },
    { nome: 'luan', idade: 10 },
    { nome: 'matheus', idade: 80 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => { //acumulador é o primeiro indice e o valor é o segundo
    if(acumulador.idade > valor.idade) return acumulador; //return impede que a linha abaixo seja executada
    return valor;
})

console.log('pessoa mais velha', pessoaMaisVelha);
