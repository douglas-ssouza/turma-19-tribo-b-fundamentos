const student = {
  name: 'Douglas',
  lastName: 'Souza',
  grades: [7, 8, 9, 8],
  average: null,
}

const allNumeric = (grades) => {

}

const calculateGrade = (grades) => {

}

const getStudentSituation = (object) => {
  // Deve receber um objeto com nome, sobrenome, array de notas e média (definida como nulo)
  // Deve retornar a mensagem no seguinte formato:
  // <nome> <sobrenom>: Aprovado/Reprovado com média <média>
  // Caso a média seja maior ou igual a 7 Aprovado. Caso contrário retorna Reprovado

  // Deve lançar um erro caso não seja informado um aluno
  // Deve lançar um erro caso informe-se uma quantidade diferente de quatro notas
  // Deve lançar um erro caso alguma das notas não seja um valor numérico
}

module.exports = getStudentSituation;