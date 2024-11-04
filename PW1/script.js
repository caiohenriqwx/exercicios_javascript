document.getElementById("calculadoraBtn").addEventListener("click", function() {
    let input = document.getElementById("numerosInput").value;
    let numbersArray = input.split(',').map(num => parseInt(num.trim()));

    numbersArray = numbersArray.filter(num => !isNaN(num));

    if (numbersArray.length === 0) {
        alert("Por favor, insira números válidos!");
        return;
    }

    let soma = numbersArray.reduce((acc, curr) => acc + curr, 0);
    let media = sum / numbersArray.length;

    let paresQuantidade = numbersArray.filter(num => num % 2 === 0).length;
    let imparesQuantidade = numbersArray.length - evenCount;

    // Exibir os resultados
    document.getElementById("somaResultado").innerText = sum;
    document.getElementById("mediaResultado").innerText = average.toFixed(2);
    document.getElementById("paresQuantidade").innerText = evenCount;
    document.getElementById("imparesQuantidade").innerText = oddCount;
});
