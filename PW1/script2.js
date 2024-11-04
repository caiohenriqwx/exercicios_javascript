document.getElementById("conversaoBtn").addEventListener("click", function() {
    let temperatura = parseFloat(document.getElementById("temperaturaInput").value);
    let conversaoType = document.getElementById("conversaoType").value;

    if (isNaN(temperatura)) {
        alert("Por favor, insira um valor numérico válido para a temperatura.");
        return;
    }

    let resultado;
    
   
    if (conversaoType === "paraCelsius") {
        resultado = (temperatura - 32) / 1.8;
        document.getElementById("resultadoTexto").innerText = `${temperatura}°F é igual a ${resultado.toFixed(2)}°C`;
    } else if (conversaoType === "paraFahrenheit") {
        resultado = (temperatura * 1.8) + 32;
        document.getElementById("resultadoTexto").innerText = `${temperatura}°C é igual a ${resultado.toFixed(2)}°F`;
    }
});
