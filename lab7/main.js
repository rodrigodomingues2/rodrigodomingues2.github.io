function muda_texto() {
    document.querySelector("#h2mudatexto").textContent = "Obrigado por passares aqui!";
}

function restauraTexto() {
    document.querySelector("#h2mudatexto").textContent = "1. Passa por aqui!";
}

function changeColor(color) {
    // Muda a cor do texto "Pinta-me!" de acordo com o botão clicado
    document.querySelector("#colorDisplay").style.color = color;
}

function submitColor() {
    const color = document.getElementById("colorInput").value.toLowerCase();
    const validColors = ["red", "green", "blue", "black", "purple", "white"];
    
    if (validColors.includes(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Cor inválida! Escolha entre red, green, blue, black, purple, ou white.");
    }
}

function alternateBackgroundColor() {
    // Muda a cor de fundo do campo de texto para uma cor aleatória sempre que há entrada
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Gera uma cor hexadecimal aleatória
    document.getElementById("textInput").style.backgroundColor = randomColor;
}

let clickCount = 0;

function incrementCounter() {
    clickCount++;
    document.getElementById("counter").textContent = clickCount;
}

// Adiciona um event listener para o campo de texto
document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    textInput.addEventListener("input", alternateBackgroundColor);
});
