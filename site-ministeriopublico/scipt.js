 
    // Aguardar o carregamento completo do DOM
    document.addEventListener('DOMContentLoaded', function () {
        const logo = document.getElementById('logo');

        // Definindo as imagens para cada estado
        const originalImage = 'img/Novo Projeto.png';
        const hoverImage = 'img/Novo Projeto hover.png';  // Substitua pelo caminho correto da imagem para hover

        // Alterando a imagem ao passar o mouse
        logo.addEventListener('mouseenter', () => {
            logo.src = hoverImage;
        });

        // Retornando à imagem original ao sair com o mouse
        logo.addEventListener('mouseleave', () => {
            logo.src = originalImage;
        });
    });