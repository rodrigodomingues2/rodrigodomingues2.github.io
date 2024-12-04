// URL da API DEISI Shop
const API_URL = "https://api.deisishop.com/products"; // Substituir pelo URL correto da API

// Inicializa a aplicação ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    obterProdutos();
    atualizaCesto();
});

// Obtem produtos usando AJAX (fetch)
function obterProdutos() {
    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro: ${response.statusText}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then((produtos) => {
            carregarProdutos(produtos); // Carrega os produtos na página
        })
        .catch((error) => {
            console.error("Erro ao obter os produtos:", error);
        });
}

// Função para carregar produtos na página
function carregarProdutos(produtos) {
    const secaoProdutos = document.querySelector("#produtos");
    secaoProdutos.innerHTML = ""; // Limpa os produtos antigos
    produtos.forEach((produto) => {
        const produtoElement = criarProduto(produto);
        secaoProdutos.appendChild(produtoElement);
    });
}

// Função para criar um elemento de produto
function criarProduto(produto) {
    const article = document.createElement("article");
    article.className = "produto";

    const title = document.createElement("h3");
    title.textContent = produto.title;
    article.appendChild(title);

    const img = document.createElement("img");
    img.src = produto.image;
    img.alt = produto.title;
    article.appendChild(img);

    const description = document.createElement("p");
    description.className = "descricao";
    description.textContent = produto.description;
    article.appendChild(description);

    const price = document.createElement("p");
    price.className = "preco";
    price.textContent = `Preço: $${produto.price}`;
    article.appendChild(price);

    const addButton = document.createElement("button");
    addButton.textContent = "+ Adicionar ao cesto";
    addButton.addEventListener("click", () => {
        const selectedProducts =
            JSON.parse(localStorage.getItem("produtos-selecionados")) || [];
        selectedProducts.push(produto);
        localStorage.setItem("produtos-selecionados", JSON.stringify(selectedProducts));
        alert(`${produto.title} foi adicionado ao cesto!`);
        atualizaCesto();
    });
    article.appendChild(addButton);

    return article;
}

// Atualiza o cesto
function atualizaCesto() {
    const selectedProducts = JSON.parse(
        localStorage.getItem("produtos-selecionados")
    ) || [];
    const cestoContainer = document.getElementById("cesto");
    cestoContainer.innerHTML = "";

    selectedProducts.forEach((produto) => {
        const article = criaProdutoCesto(produto);
        cestoContainer.appendChild(article);
    });

    atualizaPrecoTotal();
}

// Cria um produto dentro do cesto
function criaProdutoCesto(produto) {
    const article = document.createElement("article");

    const title = document.createElement("h4");
    title.textContent = produto.title;
    article.appendChild(title);

    const img = document.createElement("img");
    img.src = produto.image;
    img.alt = produto.title;
    article.appendChild(img);

    const price = document.createElement("p");
    price.textContent = `Preço: $${produto.price}`;
    article.appendChild(price);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", () => {
        let selectedProducts =
            JSON.parse(localStorage.getItem("produtos-selecionados")) || [];
        selectedProducts = selectedProducts.filter((p) => p.title !== produto.title);
        localStorage.setItem("produtos-selecionados", JSON.stringify(selectedProducts));
        atualizaCesto();
    });
    article.appendChild(removeButton);

    return article;
}

// Atualiza o preço total do cesto
function atualizaPrecoTotal() {
    const selectedProducts = JSON.parse(
        localStorage.getItem("produtos-selecionados")
    ) || [];
    const total = selectedProducts.reduce((acc, produto) => acc + produto.price, 0);
    const totalElement = document.getElementById("preco-total");
    totalElement.textContent = `Preço Total: $${total.toFixed(2)}`;
}
