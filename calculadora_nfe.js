"use strict";
console.log(geradorNumeroNFe());
function gerarVetorFatorMultiplicador(tamanhoArray) {
    const arrayResultado = [];
    let arrayFatorMultiplicador = [9, 8, 7, 6, 5, 4, 3, 2];
    for (let index = 0; index < tamanhoArray; index++) {
        if (arrayFatorMultiplicador.length == 0)
            arrayFatorMultiplicador = [9, 8, 7, 6, 5, 4, 3, 2];
        arrayResultado.push(arrayFatorMultiplicador.pop());
    }
    return arrayResultado.reverse();
}
function calculaSomatoria(vetorChave, vetorFatorMultiplicador) {
    let somatoria = 0;
    for (let index = 0; index < vetorChave.length; index++) {
        somatoria = somatoria + (Number(vetorChave[index]) * vetorFatorMultiplicador[index]);
    }
    return somatoria;
}
function calculaDigito(somatoria) {
    const modulo = 11 - (somatoria % 11);
    if (modulo == 0 || modulo == 1)
        return 0;
    return modulo;
}
function geradorNumeroNFe() {
    const uf = getRandomUF().toString();
    const dataHoje = new Date();
    const dataChave = dataHoje.getFullYear().toString().slice(-2) + ('0' + dataHoje.getMonth()).slice(-2).toString();
    const cnpj = '07829401000106';
    const modelo = ('00' + getRandomIntInclusive(1, 99)).slice(-2);
    const serie = ('000' + getRandomIntInclusive(0, 999)).slice(-3);
    const numero = ('000000000' + getRandomIntInclusive(1, 999999999)).slice(-9);
    const tipo = '1';
    const codigo = ('00000000' + getRandomIntInclusive(1, 99999999)).slice(-8);
    const chave = (uf + dataChave + cnpj + modelo + serie + numero + tipo + codigo).trim();
    const vetorChave = chave.split('');
    return chave + calculaDigito(calculaSomatoria(vetorChave, gerarVetorFatorMultiplicador(vetorChave.length)));
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomUF() {
    const ufs = [11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53];
    return ufs[getRandomIntInclusive(0, ufs.length)];
}
//# sourceMappingURL=calculadora_nfe.js.map