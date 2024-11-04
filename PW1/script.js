document.getElementById("calculadoraBtn").addEventListener("click", function() {
    let input = document.getElementById("numerosInput").value;
    let numerosLista = input.split(',').map(num => parseInt(num.trim()));

    numerosLista = numerosLista.filter(num => !isNaN(num));

    if (numerosLista.length === 0) {
        alert("Por favor, insira números válidos!");
        return;
    }

    let soma = numerosLista.reduce((acc, curr) => acc + curr, 0);
    let media = soma / numerosLista.length;

    let paresQuantidade = numerosLista.filter(num => num % 2 === 0).length;
    let imparesQuantidade = numerosLista.length - paresQuantidade;

    document.getElementById("somaResultado").innerText = soma;
    document.getElementById("mediaResultado").innerText = media.toFixed(2);
    document.getElementById("paresQuantidade").innerText = paresQuantidade;
    document.getElementById("imparesQuantidade").innerText = imparesQuantidade;
});
