document.getElementById("verPredominancia").addEventListener("click", function() {
    let metalPorcentagem = parseFloat(document.getElementById("metalPorcentagem").value);
    let ametalPorcentagem = parseFloat(document.getElementById("ametalPorcentagem").value);

    if (isNaN(metalPorcentagem) || isNaN(ametalPorcentagem)) {
        alert("Por favor, insira valores válidos para as porcentagens.");
        return;
    }

    let totalPorcentagem = metalPorcentagem + ametalPorcentagem;
    if (totalPorcentagem !== 100) {
        alert("A soma das porcentagens deve ser igual a 100%. Por favor, ajuste os valores.");
        return;
    }

    let resultadoMensagem = "";
    if (metalPorcentagem > ametalPorcentagem) {
        resultadoMensagem = "A liga é predominantemente metálica.";
    } else if (ametalPorcentagem > metalPorcentagem) {
        resultadoMensagem = "A liga é predominantemente ametálica.";
    } else {
        resultadoMensagem = "A liga tem composição balanceada entre metal e ametal.";
    }

    document.getElementById("predominanciaResultado").innerText = resultadoMensagem;
});
