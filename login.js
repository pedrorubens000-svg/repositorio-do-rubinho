
const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (email.trim() === "" || senha.trim() === "") {

        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos!";

        return;
    }

    mensagem.style.color = "green";

    mensagem.textContent =
        "Dados validados! Login demonstrativo.";

});
