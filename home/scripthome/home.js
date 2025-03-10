document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carrosselImages = document.querySelector('.carrossel-images');
    const images = carrosselImages.querySelectorAll('img');
    let index = 0;

    // Função para atualizar a posição das imagens
    function updateCarrossel() {
        const offset = -index * 100; // 100% de largura para cada imagem
        carrosselImages.style.transform = `translateX(${offset}%)`;
    }

    // Função para mover para a imagem anterior
    prevButton.addEventListener('click', function () {
        if (index === 0) {
            index = images.length - 1; // Volta para a última imagem
        } else {
            index--;
        }
        updateCarrossel();
    });

    // Função para mover para a próxima imagem
    nextButton.addEventListener('click', function () {
        if (index === images.length - 1) {
            index = 0; // Volta para a primeira imagem
        } else {
            index++;
        }
        updateCarrossel();
    });
});
