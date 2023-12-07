document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".container");
  const resultDiv = document.querySelector(".result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const avp1 = parseFloat(document.getElementById("avp1").value) || 0;
    const avp2 = parseFloat(document.getElementById("avp2").value) || 0;
    const tde1 = parseFloat(document.getElementById("tde1").value) || 0;
    const tde2 = parseFloat(document.getElementById("tde2").value) || 0;
    const tde3 = parseFloat(document.getElementById("tde3").value) || 0;
    const tde4 = parseFloat(document.getElementById("tde4").value) || 0;

    const mf = 0.4 * avp1 + 0.4 * avp2 + 0.05 * (tde1 + tde2 + tde3 + tde4);
    const mediaFinalArredondada = arredondarMediaFinal(mf);

    let situacao = "";
    if (mediaFinalArredondada >= 7) {
      situacao = "Aprovado";
    } else if (mediaFinalArredondada >= 4) {
      situacao = "Avaliação Final (AVF)";
    } else {
      situacao = "Reprovado";
    }

    resultDiv.textContent = `Média Final: ${mediaFinalArredondada.toFixed(
      2
    )} - Situação: ${situacao}`;
  });

  form.addEventListener("reset", function () {
    resultDiv.textContent = "Informe suas notas no formulário ao lado!";
  });

  function arredondarMediaFinal(mediaFinal) {
    const decimal = mediaFinal - Math.floor(mediaFinal);

    if (decimal === 0) {
      return Math.floor(mediaFinal);
    } else if (decimal >= 0 && decimal < 0.2) {
      return Math.floor(mediaFinal) + 0.1;
    } else if (decimal >= 0.2 && decimal < 0.6) {
      return Math.floor(mediaFinal) + 0.5;
    } else if (decimal >= 0.6 && decimal < 0.7) {
      return Math.floor(mediaFinal) + 0.6;
    } else {
      return Math.ceil(mediaFinal);
    }
  }
});
