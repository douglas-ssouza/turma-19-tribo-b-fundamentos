const estados = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goías' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraíma' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

const SELECT_ESTADO = document.querySelector('#select-estado');

for (let index = 0; index < estados.length; index += 1) {
  const option = document.createElement('option');
  option.value = estados[index].value;
  option.innerText = estados[index].label;

  SELECT_ESTADO.appendChild(option);
}

const validate = new window.JustValidate('#form');

validate
  .addField('#input-name', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório',
    },
    { 
      rule: 'minLength', 
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#input-last-name', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório',
    },
    { 
      rule: 'minLength', 
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido!',
    },
  ])
  .addField('#text-about', [
    {
      validator: (value) => {
        return value[0] === '!';
      },
    },
  ]);

const datePickerObj = {
  mondayFirst: false,
  format: 'D dd/mm/yyyy',
  minDate: '01/01/2022',
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
}

document.getElementById('input-data-nasc').DatePickerX.init(datePickerObj);

document.querySelector('#btn-change').addEventListener('click', () => {
  document.getElementById('input-data-nasc').DatePickerX.remove();
  datePickerObj.mondayFirst = true;
  document.getElementById('input-data-nasc').DatePickerX.init(datePickerObj);
});