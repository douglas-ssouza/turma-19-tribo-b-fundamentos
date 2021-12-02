const pessoa = {
  nome: 'Tassio',
  idade: 20,
  altura: 1.75,
  peso: 70,
  status: 'oxe',
  cidade: 'Teresina',
  endereco: {
    rua: 'Avenida Brasil',
    numero: 123,
  },
  irmaos: [
    { 
      nome: 'João',
      idade: 12
    },
    {
      nome: 'Maria',
      idade: 23
    }
  ],
}


function mudaValor(chave, valor) {
  pessoa[chave] = valor;
}

mudaValor('idade', 50);

console.table(pessoa);
