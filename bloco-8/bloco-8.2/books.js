const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// imprima na tela o nome de cada um dos livros

// Verifique se todos os livros tem o nome com mais de 10 caracteres

// Verifique se algum livro é do genero de Ficção Científica

// Encontre o primeiro item cujo autor é Isaac Asimov

// Ordene o array de acordo com a data de nascimento dos autores

// adicione uma chave rating em cada item do array
// Utilize o seguinte array:
// const ratings = [5, 5, 4, 4, 3, 3];

// Verifique se todos os livros tem o id menor do 8

// Encontre o primeitro item que o ano de lançamento menor que 1950

// Encontre o primeiro item que não seja de fantasia

// Orderne o array de acordo com a data de lançamento

// Verifique se algum livro tem o nome com 3 caracteres ou menos

// Ordene o array em ordem alfabetica de acordo com os nomes do livros


module.exports = books;