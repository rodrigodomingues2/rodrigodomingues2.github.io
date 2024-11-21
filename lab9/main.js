// Array de produtos com informações detalhadas
const produtos = [
    {
        nome: "Produto 1",
        preco: "€10.00",
        imagem: "https://via.placeholder.com/200x150",
        descricao: "Descrição do Produto 1.",
    },
    {
        nome: "Produto 2",
        preco: "€20.00",
        imagem: "https://via.placeholder.com/200x150",
        descricao: "Descrição do Produto 2.",
    },
    {
        nome: "Produto 3",
        preco: "€30.00",
        imagem: "https://via.placeholder.com/200x150",
        descricao: "Descrição do Produto 3.",
    },
];

// Função para renderizar produtos dinamicamente
const renderizarProdutos = () => {
    const container = document.getElementById("products-container");
    produtos.forEach((produto, index) => {
        const article = document.createElement("article");
        article.classList.add("product");

        article.innerHTML = `
            <img src="${produto.imagem}" alt="Imagem de ${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">Preço: <strong>${produto.preco}</strong></p>
            <button onclick="adicionarAoCesto(${index})">Adicionar ao Cesto</button>
        `;

        container.appendChild(article);
    });
};

// Função para adicionar produtos ao cesto
const adicionarAoCesto = (indiceProduto) => {
    const produto = produtos[indiceProduto];
    const cartItems = document.getElementById("cart-items");

    const item = document.createElement("li");
    item.classList.add("cart-item");
    item.textContent = `${produto.nome} - ${produto.preco}`;
    cartItems.appendChild(item);
};

// Renderizar produtos ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarProdutos);
