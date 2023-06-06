"use strict";
const a = 'Olá';
console.log(a);
const chave = '3520032576926600071055000005116055121545955'.trim();
const vetorChave = chave.split('');
console.log(chave + calculaDigito(calculaSomatoria(vetorChave, gerarVetorFatorMultiplicador(vetorChave.length))));
console.log(geradoraNumeroNFe());
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
function geradoraNumeroNFe() {
    const dataHoje = new Date();
    const dataChave = ('0' + dataHoje.getDate()).slice(-2) + ('0' + dataHoje.getMonth()).slice(-2);
    console.log(dataChave);
    return '';
}
//# sourceMappingURL=calculadora_nfe.js.map