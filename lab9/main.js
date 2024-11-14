// Array de produtos para exibição
const produtos = [
    { nome: "Produto 1", preco: "€10.00", imagem: "produto1.jpg" },
    { nome: "Produto 2", preco: "€20.00", imagem: "produto2.jpg" },
    { nome: "Produto 3", preco: "€30.00", imagem: "produto3.jpg" }
];

// Função para renderizar produtos dinamicamente
const renderizarProdutos = () => {
    const container = document.getElementById("products-container");
    produtos.forEach(produto => {
        const article = document.createElement("article");
        article.classList.add("product");

        article.innerHTML = `
            <img src="${produto.imagem}" alt="Imagem de ${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: ${produto.preco}</p>
            <button onclick="adicionarAoCesto('${produto.nome}')">Adicionar ao Cesto</button>
        `;

        container.appendChild(article);
    });
};

// Função para adicionar produtos ao cesto
const adicionarAoCesto = (nomeProduto) => {
    const cartItems = document.getElementById("cart-items");
    const item = document.createElement("li");
    item.classList.add("cart-item");
    item.textContent = nomeProduto;
    cartItems.appendChild(item);
};

// Chamada para renderizar produtos ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarProdutos);
