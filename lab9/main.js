document.addEventListener('DOMContentLoaded', function () {
    const produtosLista = document.querySelector('.produtos-lista');
    const cesto = document.querySelector('.cesto-items');
    
    // Exemplo de dados dos produtos
    const produtos = [
        {
            id: 1,
            nome: 'Produto 1',
            imagem: 'imagem1.jpg',
            preco: 'R$ 19,99',
            descricao: 'Descrição do Produto 1',
        },
        {
            id: 2,
            nome: 'Produto 2',
            imagem: 'imagem2.jpg',
            preco: 'R$ 29,99',
            descricao: 'Descrição do Produto 2',
        },
        {
            id: 3,
            nome: 'Produto 3',
            imagem: 'imagem3.jpg',
            preco: 'R$ 39,99',
            descricao: 'Descrição do Produto 3',
        },
        // Adicione mais produtos conforme necessário...
    ];

    // Função para adicionar os produtos à lista
    function exibirProdutos(produtos) {
        produtos.forEach(produto => {
            const produtoElemento = document.createElement('div');
            produtoElemento.classList.add('produto');
            
            produtoElemento.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="produto-info">
                    <h2>${produto.nome}</h2>
                    <p>${produto.descricao}</p>
                    <p class="preco">${produto.preco}</p>
                    <button class="adicionar-cesto" data-id="${produto.id}">Adicionar ao Cesto</button>
                </div>
            `;

            // Adiciona o produto à lista de produtos
            produtosLista.appendChild(produtoElemento);
        });
    }

    // Função para adicionar o produto ao cesto
    function adicionarAoCesto(event) {
        if (event.target.classList.contains('adicionar-cesto')) {
            const idProduto = event.target.getAttribute('data-id');
            const produtoSelecionado = produtos.find(produto => produto.id == idProduto);

            if (produtoSelecionado) {
                const cestoItem = document.createElement('li');
                cestoItem.textContent = `${produtoSelecionado.nome} - ${produtoSelecionado.preco}`;
                cesto.appendChild(cestoItem);
            }
        }
    }

    // Adiciona os produtos à página ao carregar
    exibirProdutos(produtos);

    // Evento para adicionar ao cesto
    produtosLista.addEventListener('click', adicionarAoCesto);
});
