// Funções já existentes
function muda_texto() {
    document.querySelector("#h2mudatexto").textContent = "Obrigado por passares aqui!";
}

function restauraTexto() {
    document.querySelector("#h2mudatexto").textContent = "1. Passa por aqui!";
}

function changeColor(color) {
    document.querySelector("#colorDisplay").style.color = color;
}

function submitColor() {
    const colorSelect = document.getElementById("colorSelect");
    const color = colorSelect.value;
    document.body.style.backgroundColor = color;
}

function alternateTextColor() {
    const colors = ["yellow", "red", "blue"];
    let colorIndex = 0;
    const textInput = document.getElementById("textInput");
    textInput.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

let clickCount = 0;
function incrementCounter() {
    clickCount++;
    document.getElementById("counter").textContent = clickCount;
}

// Função para exibir a mensagem no passo 6
function displayMessage() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const messageElement = document.getElementById("message");
    if (name && age) {
        messageElement.textContent = `Olá, o ${name} tem ${age} anos!`;
    } else {
        messageElement.textContent = "Por favor, insira um nome e uma idade.";
    }
}

// Função para o contador automático no passo 7
let autoCounter = 0;
function startAutoCounter() {
    setInterval(() => {
        autoCounter++;
        document.getElementById("autoCounter").textContent = autoCounter;
    }, 1000); // Incrementa a cada 1000 ms (1 segundo)
}

// Inicia o contador automático quando a página é carregada
startAutoCounter();
