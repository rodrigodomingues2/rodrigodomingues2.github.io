let counter = 0;
const heading = document.querySelector('h1'); // P 1 VEZ
const button = document.getElementById("button");
const countButton = document.getElementById("count-button");
const countDisplay = document.getElementById("count-display");

countButton.addEventListener("click", function() {
    counter++;
    countDisplay.textContent = counter;
});

// Event listener para o botão
button.addEventListener("click", function() {
    counter++;
    heading.textContent = counter; // Atualiza o conteúdo do h1
});

// Seleciona o elemento com o texto "Passa por aqui!"
const passaPorAqui = document.getElementById("passa-por-aqui");

// Adiciona um evento para mudar o texto ao passar o rato
passaPorAqui.addEventListener("mouseenter", function() {
    passaPorAqui.textContent = "Obrigado por passares!";
});

passaPorAqui.addEventListener("mouseleave", function() {
    passaPorAqui.textContent = "1. Passa por aqui!";
});

// Mudar a cor do texto ao clicar nos botões de cor
const redButton = document.getElementById("red-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");

redButton.addEventListener("click", function() {
    passaPorAqui.style.color = "red";
});
greenButton.addEventListener("click", function() {
    passaPorAqui.style.color = "green";
});
blueButton.addEventListener("click", function() {
    passaPorAqui.style.color = "blue";
});
countButton.addEventListener("click", function() {
    counter++;
    countDisplay.textContent = counter;
});
