//map 

//dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(num => num * 2); //retorna valor diferente

console.log('dobra os numeros', numerosDobrados);

//retorne apenas uma string com o nome da pessoa

const pessoas = [
    { nome: 'lucas', idade: 21 },
    { nome: 'maria', idade: 56 },
    { nome: 'vanessa', idade: 29 },
    { nome: 'luan', idade: 10 },
    { nome: 'matheus', idade: 80 },
];

const apenasString = pessoas.map(obj => obj.nome).join(', ');

console.log('apenas string nome : ', apenasString);

//remova apenas a chave 'nome' do objeto

const removendoNome = pessoas.map(obj => ({ idade: obj.idade })); //evita que o obj se torne a chave da função

console.log('apenas a idade ', removendoNome);


//adicione uma chave id em cada objeto

const adicionaId = pessoas.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
});

//uma forma para não alterar o valor original é criar um novo obj

const adicionaIdNewObject = pessoas.map(obj => {
    const newObject = { ...obj };
    return newObject;
});

const novoIdNewObject = adicionaIdNewObject.map((obj, indice) => {
    obj.id = indice + 10;
    return obj;
})

console.log('adicionando uma nova chave id', adicionaId);
console.log('objeto original', pessoas)
console.log('novo objeto', novoIdNewObject);