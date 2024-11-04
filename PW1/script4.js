document.getElementById("calculadoraBtn").addEventListener("click", function() {
    let quilometragem = parseFloat(document.getElementById("quilometrosInput").value);
    let fuelPrice = parseFloat(document.getElementById("precoInput").value);

    if (isNaN(quilometragem) || isNaN(fuelPrice)) {
        alert("Por favor, insira valores válidos para quilometragem e preço do combustível.");
        return;
    }

    const kmLitro = 8;

    let consumoLitros = quilometragem / kmLitro;

    let gasolinaCusto = consumoLitros * fuelPrice;

    document.getElementById("custoResultado").innerText = `R$ ${gasolinaCusto.toFixed(2)}`;
});
