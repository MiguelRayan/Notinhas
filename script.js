let notinhas = [];

function adicionarNotinha() {
    const tituloInput = document.getElementById('tituloInput');
    const textoInput = document.getElementById('textoInput');
    const titulo = tituloInput.value.trim();
    const texto = textoInput.value.trim();

    if (titulo !== '' && texto !== '') {
        notinhas.push({ titulo, texto });
        tituloInput.value = '';
        textoInput.value = '';
        exibirNotinhas(notinhas);
    }
}

// Função para exibir as notinhas na tela
function exibirNotinhas(notinhasFiltradas) {
    const listaNotinhas = document.getElementById('listaNotinhas');
    listaNotinhas.innerHTML = '';

    notinhasFiltradas.forEach((notinha) => {
        const notinhaElemento = document.createElement('div');
        notinhaElemento.classList.add('notinha');

        const tituloElemento = document.createElement('h3');
        tituloElemento.innerText = notinha.titulo;

        const textoElemento = document.createElement('p');
        textoElemento.innerText = notinha.texto;

        notinhaElemento.appendChild(tituloElemento);
        notinhaElemento.appendChild(textoElemento);
        listaNotinhas.appendChild(notinhaElemento);
    });
}

// Função para pesquisar as notinhas por palavras-chave
function pesquisarNotinhas() {
    const pesquisaInput = document.getElementById('pesquisaInput').value.toLowerCase();
    const notinhasFiltradas = notinhas.filter(notinha => {
        return (
            notinha.titulo.toLowerCase().includes(pesquisaInput) ||
            notinha.texto.toLowerCase().includes(pesquisaInput)
        );
    });

    exibirNotinhas(notinhasFiltradas);
}