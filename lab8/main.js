const mudaTexto = () => {
    document.querySelector("#h2mudatexto").textContent = "Obrigado por passares aqui!";
};

const restauraTexto = () => {
    document.querySelector("#h2mudatexto").textContent = "1. Passa por aqui!";
};

const changeColor = (color) => {
    document.querySelector("#colorDisplay").style.color = color;
};

// Alterar a cor do fundo com base no dropdown
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#colorSelect').onchange = function() {
        document.querySelector('body').style.backgroundColor = this.value;
    };
});

// Função para o contador manual no passo 5
let clickCount = 0;
const incrementCounter = () => {
    clickCount++;
    document.getElementById("counter").textContent = clickCount;
};

// Função para exibir a mensagem no passo 6 (formulário)
document.querySelector('#userForm').onsubmit = (e) => {
    // Evitar o reload da página ao submeter o formulário
    e.preventDefault();

    // Obter o nome e a idade dos campos de entrada
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;

    // Exibir a mensagem
    document.getElementById("message").textContent = `Olá, o ${name} tem ${age} anos!`;
};

// Contador automático no passo 7
let autoCounter = 0;
const count = () => {
    autoCounter++;
    document.getElementById("autoCounter").textContent = autoCounter;
};

// Iniciar o contador automático (incrementa a cada 1 segundo)
setInterval(count, 1000);
