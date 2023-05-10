//treinando e testando o metodo splice

function retirandoUltimoValor() {
    //subtitui pop ao primeiro susbtitui shift

    const meuArray = ['lucas', 'samuel', 'pedrolo', 'maria', 'antonieta', 'matheus', 'luan'];
   
    const retirados = meuArray.splice(-1, 1) //ja retorna array

    console.log(meuArray, retirados);

};

function colocandoValorPrimeiro(){
    //substitui unshift 

    const meuArray = ['lucas', 'samuel', 'pedrolo', 'maria', 'antonieta', 'matheus', 'luan']; 

    meuArray.splice(0,0,'Julia');

    console.log(meuArray)
}

function colocandoValorUltimo(){
    //vale mais a pena utilizar push

    const meuArray = ['lucas', 'samuel', 'pedrolo', 'maria', 'antonieta', 'matheus', 'luan'];
    
    meuArray.splice(meuArray.length, 0 ,'Andriele', 'pedrolo');

    console.log(meuArray)
}
