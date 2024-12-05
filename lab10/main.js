const produtos = [];
const cesto = [];

function renderProdutos(produtosFiltrados) {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpar lista antes de renderizar novamente

    produtosFiltrados.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('produto');

        div.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}">
            <h3>${produto.title}</h3>
            <p class="preco">€${produto.price.toFixed(2)}</p>
            <p class="descricao">${produto.description}</p>
            <button data-id="${produto.id}">Adicionar ao Cesto</button>
        `;

        listaProdutos.appendChild(div);
    });

    // Adicionar o evento de click para adicionar ao cesto
    document.querySelectorAll('.produto button').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.dataset.id, 10);
            const produto = produtos.find(p => p.id === id);
            adicionarAoCesto(produto);
        });
    });
}

function adicionarAoCesto(produto) {
    const produtosSelecionados = document.getElementById('produtos-selecionados');
    const precoTotal = document.getElementById('preco-total');

    cesto.push(produto);

    // Atualizar o cesto na interface
    produtosSelecionados.innerHTML = cesto
        .map((item, index) => `
            <article>
                <img src="${item.image}" alt="${item.title}">
                <span>${item.title}</span>
                <span>€${item.price.toFixed(2)}</span>
                <button class="remover" data-index="${index}">Remover</button>
            </article>
        `)
        .join('');

    const total = cesto.reduce((sum, item) => sum + item.price, 0);
    precoTotal.textContent = `Preço Total: €${total.toFixed(2)}`;

    // Adicionar evento de remoção do item do cesto
    document.querySelectorAll('.remover').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index, 10);
            removerDoCesto(index);
        });
    });
}

function removerDoCesto(index) {
    cesto.splice(index, 1); // Remove o item do cesto
    atualizarCesto();
}

function atualizarCesto() {
    const produtosSelecionados = document.getElementById('produtos-selecionados');
    const precoTotal = document.getElementById('preco-total');

    produtosSelecionados.innerHTML = cesto
        .map((item, index) => `
            <article>
                <img src="${item.image}" alt="${item.title}">
                <span>${item.title}</span>
                <span>€${item.price.toFixed(2)}</span>
                <button class="remover" data-index="${index}">Remover</button>
            </article>
        `)
        .join('');

    const total = cesto.reduce((sum, item) => sum + item.price, 0);
    precoTotal.textContent = `Preço Total: €${total.toFixed(2)}`;

    // Atualiza os eventos de remoção
    document.querySelectorAll('.remover').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index, 10);
            removerDoCesto(index);
        });
    });
}

function inicializar() {
    // Fetch das categorias para o filtro
    fetch('https://deisishop.pythonanywhere.com/categories/')
        .then(res => res.json())
        .then(categorias => {
            const selectCategorias = document.getElementById('categorias');
            categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria;
                option.textContent = categoria;
                selectCategorias.appendChild(option);
            });
        });

    // Fetch dos produtos da API
    fetch('https://deisishop.pythonanywhere.com/products/')
        .then(res => res.json())
        .then(data => {
            produtos.push(...data); // Adicionar os produtos à lista
            renderProdutos(produtos); // Renderizar os produtos
        });

    // Adicionar evento ao botão de aplicar filtro
    document.getElementById('aplicar-filtro').addEventListener('click', () => {
        const categoriaSelecionada = document.getElementById('categorias').value;
        const textoProcurar = document.getElementById('pesquisar').value.toLowerCase();
        const ordenarPor = document.getElementById('ordenar').value;

        let produtosFiltrados = produtos.filter(p =>
            (categoriaSelecionada === 'all' || p.category === categoriaSelecionada) &&
            p.title.toLowerCase().includes(textoProcurar)
        );

        if (ordenarPor === 'asc') {
            produtosFiltrados.sort((a, b) => a.price - b.price);
        } else if (ordenarPor === 'desc') {
            produtosFiltrados.sort((a, b) => b.price - a.price);
        }

        renderProdutos(produtosFiltrados); // Atualizar a lista de produtos
    });
}

inicializar(); // Iniciar o processo
