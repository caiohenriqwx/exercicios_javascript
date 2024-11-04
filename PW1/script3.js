document.getElementById("analiseBtn").addEventListener("click", function() {
    let numeros = [];
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(document.getElementById("num" + i).value);
        if (!isNaN(num)) {
            numeros.push(num);
        }
    }

    if (numeros.length !== 10) {
        alert("Por favor, insira 10 números.");
        return;
    }

    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    let media = soma / numeros.length;

    let maiorMedia = numeros.filter(num => num > media);

    let negativosQuantidade = numeros.filter(num => num < 0).length;

    document.getElementById("maiorMedia").innerText = maiorMedia.join(", ") || "Nenhum";
    document.getElementById("negativosQuantidade").innerText = negativosQuantidade;
});
