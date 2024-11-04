
function calcularExponencial(x) {
    return Math.exp(x); 
}

document.getElementById("calcularBtn").addEventListener("click", function() {
    let valorDeX = document.getElementById("inputX").value;
    valorDeX = parseFloat(valorDeX); 

    if (isNaN(valorDeX)) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido!";
        return;
    }

    let resultado = calcularExponencial(valorDeX);

    document.getElementById("resultado").innerText = "O valor de e^" + valorDeX + " é: " + resultado.toFixed(4);
});

