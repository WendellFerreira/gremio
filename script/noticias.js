document.addEventListener('DOMContentLoaded', function () {
    const noticiasLista = document.getElementById('noticias-lista');
    const carregarMaisBtn = document.getElementById('carregarMais');
    const categoriaSelect = document.getElementById('categoria');
    const dataInput = document.getElementById('data');

    let noticias = [
        { titulo: "Evento de Integração Escolar", categoria: "eventos", data: "2025-02-20", conteudo: "O Grêmio Estudantil convida todos os alunos para o evento de integração escolar..." },
        { titulo: "Comunicado Importante sobre as Regras de Convivência", categoria: "comunicados", data: "2025-02-15", conteudo: "O Grêmio Estudantil lembra a todos sobre as novas regras de convivência..." },
        { titulo: "Reunião do Grêmio Estudantil", categoria: "eventos", data: "2025-02-18", conteudo: "Estudantes interessados em participar das decisões do Grêmio Estudantil..." },
        { titulo: "Novo Informe de Atividades Extra-curriculares", categoria: "informes", data: "2025-02-10", conteudo: "Confira as novas opções de atividades extracurriculares para os alunos..." },
    ];

    let noticiasExibidas = 0;

    // Função para carregar as notícias
    function carregarNoticias(filtroCategoria = "todos", filtroData = "") {
        noticiasLista.innerHTML = ''; // Limpa as notícias anteriores
        let noticiasFiltradas = noticias;

        if (filtroCategoria !== "todos") {
            noticiasFiltradas = noticiasFiltradas.filter(noticia => noticia.categoria === filtroCategoria);
        }

        if (filtroData) {
            noticiasFiltradas = noticiasFiltradas.filter(noticia => noticia.data >= filtroData);
        }

        // Limite de notícias a serem exibidas
        noticiasFiltradas = noticiasFiltradas.slice(0, noticiasExibidas + 3);
        noticiasExibidas = noticiasFiltradas.length;

        // Exibe as notícias
        noticiasFiltradas.forEach(noticia => {
            const div = document.createElement('div');
            div.classList.add('noticia');
            div.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.conteudo}</p>
                <span>Data: ${noticia.data} | Categoria: ${noticia.categoria}</span>
            `;
            noticiasLista.appendChild(div);
        });
    }

    // Carregar as notícias iniciais
    carregarNoticias();

    // Evento de filtro por categoria
    categoriaSelect.addEventListener('change', function () {
        const categoria = categoriaSelect.value;
        const data = dataInput.value;
        carregarNoticias(categoria, data);
    });

    // Evento de filtro por data
    dataInput.addEventListener('change', function () {
        const categoria = categoriaSelect.value;
        const data = dataInput.value;
        carregarNoticias(categoria, data);
    });

    // Carregar mais notícias
    carregarMaisBtn.addEventListener('click', function () {
        noticiasExibidas += 3;
        carregarNoticias(categoriaSelect.value, dataInput.value);
    });
});
