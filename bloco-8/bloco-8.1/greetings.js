const bomDia = (name) => `Bom dia, ${name}`;
const boaTarde = (name) => `Boa tarde, ${name}`;
const boaNoite = (name) => `Boa noite, ${name}`;

function greeting (name, callback) {
  console.log(callback(name));
}

greeting('Daniel', bomDia);
greeting('Rafella', boaTarde);
greeting('Janielle', boaNoite);
