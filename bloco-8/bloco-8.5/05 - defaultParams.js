// Escreva uma função que imprima 'Hello, World' caso o não seja passado parametro e 'Hello, ${name}' caso contrario
const sayHello = (name = 'World') => {
  console.log(`Hello, ${name}`);
}

// Escreva uma função que some dois valores. Assuma um valor como zero caso ele não seja passado.
const sumNumbers = (n1 = 0, n2 = 0) => n1 + n2;

console.log(sumNumbers());
