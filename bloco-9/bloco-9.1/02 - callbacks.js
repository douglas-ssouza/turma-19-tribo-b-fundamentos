// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;

// function calcular (operacao, n1, n2) {
//   console.log(operacao(n1, n2));
// }

// calcular(multiplicar, 2, 2);

// console.log([1, 2, 3].map((n) => n + 1));

function pedirPizza (...callbacks) {
  console.log('Pedi a pizza');
  callbacks[0](callbacks[1]);
}

function prepararPizza (entregar) {
  setTimeout(() => {
    console.log('Preparei a pizza');
    entregar()
  }, 5000);
}

function entregarPizza () {
  setTimeout(() => {
    console.log('Entreguei a pizza');
    comerPizza();
    lavar();
  }, 3000)
}

function comerPizza () {
  console.log('Comi a pizza');
}

function lavar () {
  console.log('Lavei a louça');
}

pedirPizza(prepararPizza, entregarPizza);
