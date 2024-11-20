// Seleciona o elemento <body> da página
const body = document.querySelector('body');

// Cria um novo elemento <h1> e define seu conteúdo de texto
const titulo = document.createElement('h1');
titulo.textContent = 'Viva o JavaScript!';
// Adiciona o título ao body
body.append(titulo);

// Cria o primeiro parágrafo <p> e define seu conteúdo
const paragrafo_1 = document.createElement('p');
paragrafo_1.textContent = 'O JavaScript permite manipular o DOM...';
// Adiciona o primeiro parágrafo ao body
body.append(paragrafo_1);

// Cria o segundo parágrafo <p> e define seu conteúdo
const paragrafo_2 = document.createElement('p');
paragrafo_2.textContent = 'Pode criar, alterar, remover e ordenar...';
// Adiciona o segundo parágrafo ao body
body.append(paragrafo_2);
