document.getElementById("calculoBtn").addEventListener("click", function() {
    let metalEletrons = parseInt(document.getElementById("metalEletrons").value);
    let ametalEletrons = parseInt(document.getElementById("ametalEletrons").value);

    if (isNaN(metalEletrons) || isNaN(ametalEletrons)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let metalRatio = ametalEletrons;
    let ametalRatio = metalEletrons;

    document.getElementById("formula").innerText = `M${metalRatio > 1 ? metalRatio : ""}A${ametalRatio > 1 ? ametalRatio : ""}`;
});

document.getElementById("calculo2Btn").addEventListener("click", function() {
    let atom1Ligacao = parseInt(document.getElementById("atom1Ligacao").value);
    let atom2Ligacao = parseInt(document.getElementById("atom2Ligacao").value);

    if (isNaN(atom1Ligacao) || isNaN(atom2Ligacao)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let atom1Ratio = atom2Ligacao;
    let atom2Ratio = atom1Ligacao;

    document.getElementById("formula2").innerText = `A${atom1Ratio > 1 ? atom1Ratio : ""}B${atom2Ratio > 1 ? atom2Ratio : ""}`;
});
