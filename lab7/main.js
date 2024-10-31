const passaPorAqui = document.querySelector("#passa-por-aqui");

// Função para mudar o texto ao passar o rato
function mudaTextoPassar() {
    passaPorAqui.textContent = "Obrigado por passares!";
}

// Função para restaurar o texto ao retirar o rato
function mudaTextoSair() {
    passaPorAqui.textContent = "1. Passa por aqui!";
}

// Função para mudar a cor do texto
function changeColor(color) {
    passaPorAqui.style.color = color;
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

// Adicionando eventos para passar e sair do rato
passaPorAqui.addEventListener("mouseenter", mudaTextoPassar);
passaPorAqui.addEventListener("mouseleave", mudaTextoSair);

// Adicionando evento para o botão de submeter
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", submeterCor);
