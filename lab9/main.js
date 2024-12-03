// Certifique-se de que o DOM está completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos(produtos); // Chama a função carregarProdutos com a lista de produtos
    atualizaCesto(); // Atualiza o cesto ao carregar a página
});

if (!localStorage.getItem('produtos-selecionados')) {
    localStorage.setItem('produtos-selecionados', JSON.stringify([]));
}

// Função para carregar todos os produtos
function carregarProdutos(produtos) {
    const secaoProdutos = document.querySelector("#produtos");
    produtos.forEach((produto) => {
        const produtoElement = criarProduto(produto);
        secaoProdutos.appendChild(produtoElement);
    });
}

// Função para criar um elemento <article> para cada produto
function criarProduto(produto) {
    const article = document.createElement('article');
    article.className = 'produto';

    const title = document.createElement('h3');
    title.textContent = produto.title;
    article.appendChild(title);

    const img = document.createElement('img');
    img.src = produto.image;
    img.alt = produto.title;
    article.appendChild(img);

    const description = document.createElement('p');
    description.className = 'descricao';
    description.textContent = produto.description;
    article.appendChild(description);

    const price = document.createElement('p');
    price.className = 'preco';
    price.textContent = `Preço: $${produto.price}`;
    article.appendChild(price);

    const addButton = document.createElement('button');
    addButton.textContent = '+ Adicionar ao cesto';
    addButton.addEventListener('click', () => {
        const selectedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
        selectedProducts.push(produto);
        localStorage.setItem('produtos-selecionados', JSON.stringify(selectedProducts));
        alert(`${produto.title} foi adicionado ao cesto!`);
        atualizaCesto();
    });
    article.appendChild(addButton);

    return article;
}

function atualizaCesto() {
    const selectedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    const cestoContainer = document.getElementById('cesto');
    cestoContainer.innerHTML = '';

    selectedProducts.forEach(produto => {
        const article = criaProdutoCesto(produto);
        cestoContainer.appendChild(article);
    });

    atualizaPrecoTotal();
}

function criaProdutoCesto(produto) {
    const article = document.createElement('article');

    const title = document.createElement('h4');
    title.textContent = produto.title;
    article.appendChild(title);

    const img = document.createElement('img');
    img.src = produto.image;
    img.alt = produto.title;
    article.appendChild(img);

    const price = document.createElement('p');
    price.textContent = `Preço: $${produto.price}`;
    article.appendChild(price);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
        let selectedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
        selectedProducts = selectedProducts.filter(p => p.title !== produto.title);
        localStorage.setItem('produtos-selecionados', JSON.stringify(selectedProducts));
        atualizaCesto();
    });
    article.appendChild(removeButton);

    return article;
}

function atualizaPrecoTotal() {
    const selectedProducts = JSON.parse(localStorage.getItem('produtos-selecionados')) || [];
    const total = selectedProducts.reduce((acc, produto) => acc + produto.price, 0);
    const totalElement = document.getElementById('preco-total');
    totalElement.textContent = `Preço Total: $${total.toFixed(2)}`;
}
