const cards = [
  {
    image: 'https://magazine.zarpo.com.br/wp-content/uploads/2018/09/25-pontos-turisticos-do-brasil-para-conhecer-agora-mesmo-2.jpg',
    place: 'Rio de Janeiro',
  },
  {
    image: 'https://images.memphistours.com/xlarge/65094cbeec90465cb35e3508df73a9d3.jpg',
    place: 'Roma',
  },
  {
    image: 'https://www.segurospromo.com.br/blog/wp-content/uploads/2020/01/o-que-fazer-na-franca-750x360.jpg',
    place: 'Paris',
  },
  {
    image: 'https://www.fuiserviajante.com/wp-content/uploads/2020/02/estatua-da-liberdade-estados-unidos-pontos-turisticos.jpg',
    place: 'Nova York',
  },
  {
    image: 'https://www.daninoce.com.br/wp-content/uploads/2018/02/os-pontos-turisticos-mais-interessantes-de-moscou-dani-noce-imagem-destaque-1.jpg',
    place: 'Moscou',
  },
  {
    image: 'https://i0.wp.com/pisa.tur.br/blog/wp-content/uploads/2019/02/egito-2.jpg?fit=1024%2C448&ssl=1',
    place: 'Egito',
  },
];

let index = 0;

// 1 pegar o elemento pai/mãe
const imageContainer = document.querySelector('.image-container');

// 2 Criar o elemento
const title = document.createElement('h1');
title.innerText = cards[index].place;

const card = document.createElement('img');
card.src = cards[index].image;
card.classList.add('post-card');

// 3 Anexar o novo elemento no elemento pai/mãe
imageContainer.appendChild(title);
imageContainer.appendChild(card);

const previousArrow = document.querySelector('.previous-container');
const nextArrow = document.querySelector('.next-container');

function goToNextImage() {
  index += 1;
  if (index === cards.length) {
    index = 0;
  }

  title.innerText = cards[index].place;
  card.src = cards[index].image;
}
nextArrow.addEventListener('click', goToNextImage);

function goToPreviousImage() {
  index -= 1;
  if (index === -1) {
    index = cards.length - 1;
  }

  title.innerText = cards[index].place;
  card.src = cards[index].image;
}
previousArrow.addEventListener('click', goToPreviousImage);
