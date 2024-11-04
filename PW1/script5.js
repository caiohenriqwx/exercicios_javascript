document.getElementById("calculadoraBtn").addEventListener("click", function() {
    let altura = parseFloat(document.getElementById("alturaInput").value);
    let largura = parseFloat(document.getElementById("larguraInput").value);

    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        alert("Por favor, insira valores válidos para o comprimento e a largura.");
        return;
    }

    const preco = 36.00;

    let area = altura * largura;

    let custo = area * preco;

    document.getElementById("pisoResultado").innerText = `R$ ${custo.toFixed(2)}`;
});
