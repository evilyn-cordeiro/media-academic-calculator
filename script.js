document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".container");
  const resultDiv = document.getElementById("result");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close");
  const gifElement = document.getElementById("gif");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter as notas do formulário
    const avp1 = parseFloat(document.getElementById("avp1").value) || 0;
    const avp2 = parseFloat(document.getElementById("avp2").value) || 0;
    const tde1 = parseFloat(document.getElementById("tde1").value) || 0;
    const tde2 = parseFloat(document.getElementById("tde2").value) || 0;
    const tde3 = parseFloat(document.getElementById("tde3").value) || 0;
    const tde4 = parseFloat(document.getElementById("tde4").value) || 0;

    let srcGif = "";

    // Calcular a média com base na fórmula fornecida
    const mediaFinal =
      0.4 * avp1 + 0.4 * avp2 + 0.05 * (tde1 + tde2 + tde3 + tde4);

    // Arredondar a média conforme a regra estabelecida
    const mediaFinalArredondada = arredondarMediaFinal(mediaFinal);

    // Determinar a situação do aluno
    let situacao = "";
    if (mediaFinalArredondada >= 7) {
      situacao = "Aprovado";
      srcGif =
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjFkNTl3djdkZzhjbWVodjVheXczOTJob3JlbHl2OHVlZGJ0aXZucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pWO49XP9L7TxbgQVib/giphy.gif";
    } else if (mediaFinalArredondada >= 4) {
      situacao = "Avaliação Final (AVF)";
      srcGif =
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU0ZjdicDRzbzQ1NGRpYm16OGhoOXQ4azRjbnpnanB4Z3owaHZjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xSM46ernAUN3y/giphy.gif";
    } else {
      situacao = "Reprovado";
      srcGif =
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjdwdXJzM3ByaXA0NHVsYWx0cnFvNDA5N3pxdzB3a3I2bjdnZG1rOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/otP85UTRethni/giphy.gif";
    }

    // Exibir o resultado no modal
    resultDiv.textContent = `Média Final: ${mediaFinalArredondada.toFixed(
      2
    )} - Situação: ${situacao}`;

    gifElement.src = srcGif;

    // Exibir o modal
    modal.style.display = "block";
  });

  // Fechar o modal quando o botão de fechar for clicado
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Fechar o modal quando o usuário clicar fora do conteúdo do modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Resetar a tela
  form.addEventListener("reset", function () {
    resultDiv.textContent = "Informe suas notas no formulário ao lado!";
    modal.style.display = "none";
  });

  // Função para arredondar a média final
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
