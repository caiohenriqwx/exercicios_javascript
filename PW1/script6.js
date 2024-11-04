document.getElementById("calcularForcaResultanteBtn").addEventListener("click", function() {
    let massa = parseFloat(document.getElementById("massa1").value);
    let aceleracao1 = parseFloat(document.getElementById("aceleracao1").value);
    let aceleracao2 = parseFloat(document.getElementById("aceleracao2").value);

    let aceleracaoResultante = aceleracao1 - aceleracao2;

    let forcaResultante = massa * aceleracaoResultante;

    document.getElementById("resultadoForcaResultante").innerHTML = `<p><strong>Força resultante:</strong> ${forcaResultante.toFixed(2)} N</p>`;
});

document.getElementById("calcularAcaoReacaoBtn").addEventListener("click", function() {
    let massaObjeto1 = parseFloat(document.getElementById("massaObjeto1").value);
    let aceleracaoObjeto1 = parseFloat(document.getElementById("aceleracaoObjeto1").value);

    let massaObjeto2 = parseFloat(document.getElementById("massaObjeto2").value);
    let aceleracaoObjeto2 = parseFloat(document.getElementById("aceleracaoObjeto2").value);

    let forcaAcao = massaObjeto1 * aceleracaoObjeto1;

    let forcaReacao = massaObjeto2 * aceleracaoObjeto2;

    document.getElementById("resultadoAcaoReacao").innerHTML = `
        <p><strong>Força de Ação:</strong> ${forcaAcao.toFixed(2)} N</p>
        <p><strong>Força de Reação:</strong> ${forcaReacao.toFixed(2)} N</p>
        <p>As forças possuem a mesma magnitude e sentidos opostos.</p>`;
});

