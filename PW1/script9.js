let valorArray = [];

document.getElementById("addValorBtn").addEventListener("click", function() {
    let inputValor = parseFloat(document.getElementById("inputValor").value);

    if (!isNaN(inputValor)) {
        valorArray.push(inputValor);
        document.getElementById("inputValor").value = ''; 
        alert("Valor adicionado com sucesso!");
    } else {
        alert("Por favor, insira um valor válido.");
    }
});

document.getElementById("mostrarTodosBtn").addEventListener("click", function() {
    if (valorArray.length > 0) {
        document.getElementById("resultado").innerText = valorArray.join(", ");
    } else {
        document.getElementById("resultado").innerText = "Nenhum valor foi inserido.";
    }
});

document.getElementById("mostrarMaiorBtn").addEventListener("click", function() {
    if (valorArray.length > 0) {
        let maiorValor = Math.max(...valorArray);
        document.getElementById("resultado").innerText = "Maior valor: " + maiorValor;
    } else {
        document.getElementById("resultado").innerText = "Nenhum valor foi inserido.";
    }
});

document.getElementById("mostrarMenorBtn").addEventListener("click", function() {
    if (valorArray.length > 0) {
        let menorValor = Math.min(...valorArray);
        document.getElementById("resultado").innerText = "Menor valor: " + menorValor;
    } else {
        document.getElementById("resultado").innerText = "Nenhum valor foi inserido.";
    }
});
