const fetch = require('node-fetch');

// const fetchCard = () => {
//   const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';

//   const response = fetch(url);

//   console.log(response);
// }

const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';

const fetchCard1 = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Deu ruim \n${err}`);
  }
};

const fetchCard2 = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(`Deu ruim \n${err}`));
};

fetchCard1();
fetchCard2();
