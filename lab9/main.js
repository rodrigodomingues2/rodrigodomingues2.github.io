document.addEventListener("DOMContentLoaded", () => {
    const produtosContainer = document.getElementById('produtos');
  
    // Função para exibir os produtos
    function exibirProdutos(produtos) {
      produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        
        produtoElement.innerHTML = `
          <img src="${produto.image}" alt="${produto.title}">
          <div class="produto-info">
            <h2>${produto.title}</h2>
            <p>${produto.description}</p>
            <p class="preco">R$ ${produto.price.toFixed(2)}</p>
            <div class="rating">
              <span>⭐ ${produto.rating.rate}</span> | <span>${produto.rating.count} avaliações</span>
            </div>
          </div>
        `;
        
        produtosContainer.appendChild(produtoElement);
      });
    }
  
    // Exibir todos os produtos
    exibirProdutos(produtos);
  });
  