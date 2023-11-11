let categoriaSelecionada = '';

function selecionarCategoria(categoria) {
    categoriaSelecionada = categoria;
    document.getElementById("categoriaDropdown").textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
}

function gerarDesculpa() {
    if (categoriaSelecionada === '') {
        console.log('Por favor, selecione uma categoria.');
        return;
    }

    fetch('./database.json')
        .then(response => response.json())
        .then(data => {
            const desculpasCategoria = data[categoriaSelecionada];
            const desculpaGerada = desculpasCategoria[Math.floor(Math.random() * desculpasCategoria.length)];
            document.getElementById("desculpaGerada").textContent = desculpaGerada;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));

        document.getElementById("secaoCopiar").style.display = "block";
}

function copiarDesculpa() {
  const desculpa = document.getElementById("desculpaGerada").innerText;

  // Cria um elemento de input para copiar o texto
  const input = document.createElement("input");
  input.value = desculpa;
  document.body.appendChild(input);

  // Seleciona e copia o texto
  input.select();
  document.execCommand("copy");

  // Remove o elemento de input
  document.body.removeChild(input);

  const copiadoMsg = document.getElementById("copiadoMensagem");
  copiadoMsg.style.display = "block";

  // Após alguns segundos, esconde a mensagem de sucesso
  setTimeout(function() {
      copiadoMsg.style.display = "none";
  }, 3000);
}

const h1 = document.getElementById('clickMe');
const imageDisplay = document.getElementById('imageDisplay');
let count = 0;

h1.style.cursor = 'pointer'; // Altera o cursor ao passar sobre o h1

const handleClick = () => {
    count++;
    if (count >= 10) {
        h1.removeEventListener('click', handleClick); // Remove o evento após 10 cliques
        const imgPath = 'img/barric-pill.jpg';
        imageDisplay.src = imgPath;
        imageDisplay.style.display = 'block';
    }
};

h1.addEventListener('click', handleClick);



