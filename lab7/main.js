console.log("JavaScript carregado com sucesso");

// Seletores de elementos
const passaPorAqui = document.querySelector("#passa-por-aqui");
const countDisplay = document.querySelector("#count-display");
const colorInput = document.querySelector("#color-input");
const submitButton = document.querySelector("#submit-button");
const inputText = document.querySelector("#input-text");
let counter = 0; // Inicializa o contador

// Função 1: Mudar o texto ao passar e sair o rato
function mudaTextoPassar() {
    passaPorAqui.textContent = "Obrigado por passares!";
}

function mudaTextoSair() {
    passaPorAqui.textContent = "1. Passa por aqui!";
}

// Função 2: Mudar a cor do texto ao clicar nos botões de cor
function mudaCor(cor) {
    passaPorAqui.style.color = cor;
}

// Função 3: Mudar a cor de fundo do campo de texto enquanto escreve
function mudaCorInput() {
    inputText.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Gera uma cor aleatória
}

// Função 4: Aplicar a cor escolhida no campo de entrada de cor ao fundo da página
function submeterCor() {
    const chosenColor = colorInput.value.toLowerCase();
    document.body.style.backgroundColor = chosenColor;
}

// Função 5: Contador ao clicar no botão "Conta!"
function contar() {
    counter++;
    countDisplay.textContent = counter; // Atualiza o contador exibido
}

// Associando os eventos usando funções dedicadas
function inicializarEventos() {
    // Verifica se todos os elementos necessários estão presentes
    if (!passaPorAqui || !countDisplay || !colorInput || !submitButton || !inputText) {
        console.error("Alguns elementos não foram encontrados na página. Verifique o HTML.");
        return;
    }

    // Evento para passar e sair o rato na primeira funcionalidade
    passaPorAqui.addEventListener("mouseenter", mudaTextoPassar);
    passaPorAqui.addEventListener("mouseleave", mudaTextoSair);

    // Eventos para mudar a cor do texto
    document.querySelector("#red-button").onclick = () => mudaCor('red');
    document.querySelector("#green-button").onclick = () => mudaCor('green');
    document.querySelector("#blue-button").onclick = () => mudaCor('blue');

    // Evento para mudar a cor de fundo do input enquanto escreve
    inputText.addEventListener("input", mudaCorInput);

    // Evento para aplicar a cor escolhida ao fundo da página
    submitButton.onclick = submeterCor;

    // Evento para incrementar o contador
    document.querySelector("#count-button").onclick = contar;
}

// Inicializa os eventos ao carregar a página
document.addEventListener("DOMContentLoaded", inicializarEventos);
