// Certifique-se de que o script está carregando após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o array 'produtos' está disponível no escopo global
    if (typeof produtos !== 'undefined' && Array.isArray(produtos)) {
        exibirProdutos();
    } else {
        console.error('A variável "produtos" não foi encontrada ou não é um array.');
    }
});

// Função para exibir os produtos na página
function exibirProdutos() {
    const containerProdutos = document.getElementById('produtos');

    // Limpa qualquer conteúdo anterior no contêiner
    containerProdutos.innerHTML = '';

    // Loop para adicionar cada produto ao HTML
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto'); // Adiciona uma classe para estilização

        const imagem = document.createElement('img');
        imagem.src = produto.image;
        imagem.alt = produto.title;
        produtoDiv.appendChild(imagem);

        const titulo = document.createElement('h3');
        titulo.textContent = produto.title;
        produtoDiv.appendChild(titulo);

        const descricao = document.createElement('p');
        descricao.textContent = produto.description;
        produtoDiv.appendChild(descricao);

        const preco = document.createElement('p');
        preco.textContent = `R$ ${produto.price.toFixed(2)}`;
        produtoDiv.appendChild(preco);

        const categoria = document.createElement('p');
        categoria.textContent = produto.category;
        produtoDiv.appendChild(categoria);

        // Adiciona o produto à seção de produtos
        containerProdutos.appendChild(produtoDiv);
    });
}
