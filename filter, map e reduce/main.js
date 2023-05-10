//filter - sempre retorna um array com a mesma quantidade de elementos ou menos
//retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores10 = numeros.filter(valor => valor > 10); //retorna apenas true (em nova array) e false(nao adiciona em um novo array)

console.log('numeros maiores que 10', numerosMaiores10);

//retorne as pessoas que tem o nome com 5 letras ou mais

const pessoas = [
    { nome: 'lucas', idade: 21 },
    { nome: 'maria', idade: 56 },
    { nome: 'vanessa', idade: 29 },
    { nome: 'luan', idade: 10 },
    { nome: 'matheus', idade: 80 },
]

const nomeGrande = pessoas.filter(obj => obj.nome.length > 5);

console.log('nomes maiores que 5 letras', nomeGrande);

//retorne as pessoas com mais de 50 anos

const idadeAlta = pessoas.filter(obj => obj.idade > 50);

console.log('idade maior que 50', idadeAlta);

//retorne as pessoas que termina o nome com a

const finalComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log('nome terminando com a', finalComA);
