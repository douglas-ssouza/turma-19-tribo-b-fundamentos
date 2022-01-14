const tryber1 = {
  name: 'Rods',
  age: 20,
  address: {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    street: 'Avenida Pão de Queijo',
    number: 33,
  },
  favMovie: 'O Rei Leão'
};

const tryber2 = {
  name: 'Ellen',
  age: 20,
  address: {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    street: 'Avenida Pão de Queijo',
    number: 33,
  },
  favBand: 'Exaltasamba',
};

const tryber3 = {
  name: 'Fábio',
  age: 20,
  address: {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
    street: 'Avenida Pão de Queijo',
    number: 33,
  },
};

const newObject = Object.assign({}, {tryber1}, {tryber2}, {tryber3});
// console.table(newObject);

// Solução que encontrei para adicionar uma única chave
const newObject2 = Object.assign({}, tryber2, { favMovie: tryber1.favMovie } );
console.log(newObject2);