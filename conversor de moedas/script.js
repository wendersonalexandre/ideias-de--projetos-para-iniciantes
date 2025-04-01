// Dados de entrada

const entradaInpt = document.getElementById('inValor');
const moedaOrigem = document.getElementById('moedaOrigem');
const moedasDestino = document.getElementById('moedaDestino');
const imprimirResultado = document.getElementById('resultado-op');

// Função para fazer a conversão

function converter() {

    limpar()
    
    let valorEntrada = parseFloat(entradaInpt.value); // Pegar o valor digitado e converter para número
    let moedaOrigemValor = moedaOrigem.value; // Pegar a moeda de origem selecionada
    let moedaDestinoValor = moedasDestino.value; // Pegar a moeda de destino selecionada
    let taxaDeConversao = 0;
    let resultado = 0;

    // Definir taxas de conversão (exemplo: 1 USD = 5 BRL)
    if (moedaOrigemValor === 'USD' && moedaDestinoValor === 'BRL') {
        taxaDeConversao = 5.70; 
        resultado = valorEntrada * taxaDeConversao;
    } 
    else if (moedaOrigemValor === 'BRL' && moedaDestinoValor === 'USD') {
        taxaDeConversao = 1 / 5.70; 
        resultado = valorEntrada * taxaDeConversao;
    } 
    else {
        imprimirResultado.innerHTML = "Selecione moedas válidas para conversão.";
        return;
    }

    imprimirResultado.innerHTML += ` O valor de ${valorEntrada} ${moedaOrigemValor} convertido para ${moedaDestinoValor} é ${resultado.toFixed(2)}`;
}

function limpar(){
    imprimirResultado.innerHTML = ''
}
