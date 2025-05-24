// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formularioContato");
  const message = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;

    enviarDadosParaFirebase(name, email)
      .then(() => {
        console.log('Dados enviados com sucesso!');
        message.style.display = "block"; // Mostra a mensagem
        setTimeout(() => {
          message.style.display = "none"; // Esconde após 3s
        }, 3000);
        form.reset(); // Limpa os campos
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  });
});

// Função para enviar dados ao Firebase
function enviarDadosParaFirebase(name, email) {
  return database.ref("contatos").push({ name, email });
}