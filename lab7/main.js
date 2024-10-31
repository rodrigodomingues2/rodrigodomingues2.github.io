const passaPorAqui = document.querySelector("#passa-por-aqui");
let counter = 0; // Inicializa o contador

// Função para mudar o texto ao passar o rato
function mudaTextoPassar() {
    passaPorAqui.textContent = "Obrigado por passares!";
}

// Função para restaurar o texto ao retirar o rato
function mudaTextoSair() {
    passaPorAqui.textContent = "1. Passa por aqui!";
}

// Função para mudar a cor do texto ao clicar em um botão de cor
function mudaCor(cor) {
    passaPorAqui.style.color = cor;
}

// Função para lidar com a escolha de cor em inglês
function submeterCor() {
    const colorInput = document.querySelector("#color-input");
    const chosenColor = colorInput.value.toLowerCase();
    if (chosenColor === "red" || chosenColor === "green" || chosenColor === "blue") {
        passaPorAqui.style.color = chosenColor;
    } else {
        alert("Por favor, escolha 'red', 'green' ou 'blue'.");
    }
}

// Função para contar
function contar() {
    counter++;
    document.querySelector("#count-display").textContent = counter; // Atualiza o contador exibido
}

// Associando os eventos usando funções dedicadas
function inicializarEventos() {
    // Adicionando eventos para passar e sair do rato
    passaPorAqui.addEventListener("mouseenter", mudaTextoPassar);
    passaPorAqui.addEventListener("mouseleave", mudaTextoSair);

    // Adicionando evento para o botão de submeter usando onclick
    document.querySelector("#submit-button").onclick = submeterCor;

    // Adicionando evento para o botão de contagem usando onclick
    document.querySelector("#count-button").onclick = contar;

    // Usando onclick para os botões de cor
    document.querySelector("#red-button").onclick = function() { mudaCor('red'); };
    document.querySelector("#green-button").onclick = function() { mudaCor('green'); };
    document.querySelector("#blue-button").onclick = function() { mudaCor('blue'); };
}

// Inicializa os eventos ao carregar a página
inicializarEventos();
