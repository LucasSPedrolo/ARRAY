//da para utilizar para iterar um array

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let total = 0; //menos performatico ,vale mais apena utilizar reduce
a1.forEach(valor => {
    total += valor;
}) //recebe valor, indice, array

console.log(total);