document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const sucessoMensagem = document.getElementById('mensagem-sucesso');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Exibe a mensagem de sucesso
        sucessoMensagem.style.display = 'block';

        // Limpa os campos do formulário
        form.reset();

        // Esconde a mensagem de sucesso após 3 segundos
        setTimeout(function () {
            sucessoMensagem.style.display = 'none';
        }, 3000);
    });
});
