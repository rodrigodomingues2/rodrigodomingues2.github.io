let counter = 0;
const heading = document.querySelector('h1');
const passaPorAqui = document.getElementById("passa-por-aqui");
const countDisplay = document.getElementById("count-display");
const submitButton = document.getElementById("submit-button");
const colorInput = document.getElementById("color-input");

// Função para contar
function count() {
    counter++;
    countDisplay.textContent = counter;
}

// Associar evento no HTML
// (Isso já está feito diretamente no HTML com onclick)

const countButton = document.getElementById("count-button");
// Associar evento no script com propriedade de evento
countButton.onclick = count;

// Associar evento no script usando addEventListener
countButton.addEventListener('click', count);

// Adiciona evento para mudar o texto ao passar o rato
passaPorAqui.addEventListener("mouseenter", function() {
    passaPorAqui.textContent = "Obrigado por passares!";
});

passaPorAqui.addEventListener("mouseleave", function() {
    passaPorAqui.textContent = "1. Passa por aqui!";
});

// Mudar a cor do texto ao clicar nos botões de cor
function changeColor(color) {
    passaPorAqui.style.color = color;
}

// Lidar com a escolha de cor em inglês
submitButton.addEventListener("click", function() {
    const chosenColor = colorInput.value.toLowerCase();
    if (chosenColor === "red" || chosenColor === "green" || chosenColor === "blue") {
        passaPorAqui.style.color = chosenColor;
    } else {
        alert("Por favor, escolha 'red', 'green' ou 'blue'.");
    }
});
