const produtos = [];
const cesto = [];

function renderProdutos(produtosFiltrados) {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

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

    document.querySelectorAll('.produto button').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.dataset.id, 10);
            const produto = produtos.find(p => p.id === id);
            adicionarAoCesto(produto);
        });
    });
}

function adicionarAoCesto(produto) {
    cesto.push(produto);
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

    document.querySelectorAll('.remover').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index, 10);
            cesto.splice(index, 1);
            atualizarCesto();
        });
    });
}

function inicializar() {
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

    fetch('https://deisishop.pythonanywhere.com/products/')
        .then(res => res.json())
        .then(data => {
            produtos.push(...data);
            renderProdutos(produtos);
        });

    document.getElementById('aplicar-filtro').addEventListener('click', () => {
        const categoriaSelecionada = document.getElementById('categorias').value;
        const textoProcurar = document.getElementById('pesquisar').value.toLowerCase();
        const ordenarPor = document.getElementById('ordenar').value;

        let produtosFiltrados = produtos.filter(p =>
            (categoriaSelecionada === 'all' || p.category === categoriaSelecionada) &&
            (p.title.toLowerCase().includes(textoProcurar) || 
             p.description.toLowerCase().includes(textoProcurar))
        );

        if (ordenarPor === 'asc') {
            produtosFiltrados.sort((a, b) => a.price - b.price);
        } else if (ordenarPor === 'desc') {
            produtosFiltrados.sort((a, b) => b.price - a.price);
        } else if (ordenarPor === 'reviews-asc') {
            produtosFiltrados.sort((a, b) => a.rating.count - b.rating.count);
        } else if (ordenarPor === 'reviews-desc') {
            produtosFiltrados.sort((a, b) => b.rating.count - a.rating.count);
        }

        renderProdutos(produtosFiltrados);
    });

    document.getElementById('remover-tudo').addEventListener('click', () => {
        cesto.length = 0;
        atualizarCesto();
    });

    document.getElementById('menos-info').addEventListener('click', () => {
        document.querySelectorAll('.produto .descricao').forEach(descricao => {
            descricao.style.display = 'none';
        });
    });

    document.getElementById('comprar').addEventListener('click', () => {
        const nome = document.getElementById('nome-cliente').value;

        fetch('https://deisishop.pythonanywhere.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nome,
                cart: cesto 
            })
        })
        .then(res => res.json())
        .then(data => {
            const messageElement = document.createElement('p');
            messageElement.textContent = data.message;
            document.body.appendChild(messageElement);
        });
    });
}
inicializar();
