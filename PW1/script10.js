document.getElementById("calculadoraeBtn").addEventListener("click", function() {
    let inputValor = parseFloat(document.getElementById("inputValor").value);

    if (!isNaN(inputValor)) {
        let resultado = Math.exp(inputValor); 
        document.getElementById("resultado").innerText = `f(${inputValor}) = ${resultado.toFixed(4)}`; 
        alert("Por favor, insira um valor válido para x.");
    }
});
