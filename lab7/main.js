let counter = 0;
const passaPorAqui = document.getElementById("passa-por-aqui");
const countDisplay = document.getElementById("count-display");
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const countButton = document.getElementById("count-button");
const colorInput = document.getElementById("color-input");
const submitButton = document.getElementById("submit-button");

// Adiciona um evento para mudar o texto ao passar o rato
passaPorAqui.addEventListener("mouseenter", function() {
    passaPorAqui.textContent = "Obrigado por passares!";
});

passaPorAqui.addEventListener("mouseleave", function() {
    passaPorAqui.textContent = "1. Passa por aqui!";
});

// Mudar a cor do texto ao clicar nos botões de cor
redButton.addEventListener("click", function() {
    passaPorAqui.style.color = "red";
});
greenButton.addEventListener("click", function() {
    passaPorAqui.style.color = "green";
});
blueButton.addEventListener("click", function() {
    passaPorAqui.style.color = "blue";
});

// Contar cliques no botão "Conta!"
countButton.addEventListener("click", function() {
    counter++;
    countDisplay.textContent = counter;
});

// Lidar com a escolha de cor em inglês
submitButton.addEventListener("click", function() {
    const chosenColor = colorInput.value.toLowerCase(); // pega o valor do input e transforma em minúsculas
    if (chosenColor === "red" || chosenColor === "green" || chosenColor === "blue") {
        passaPorAqui.style.color = chosenColor; // muda a cor do texto
    } else {
        alert("Por favor, escolha 'red', 'green' ou 'blue'.");
    }
});
