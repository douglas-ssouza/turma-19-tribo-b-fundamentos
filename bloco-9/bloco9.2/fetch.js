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
    return data;
  } catch (err) {
    return `Deu ruim \n${err}`;
  }
};

const fetchCard2 = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(`Deu ruim \n${err}`));
};

// fetchCard1();
console.log(fetchCard2());

// fetchCard1().then((data) => console.log(data));

// async function main() {
//   const card = await fetchCard1().cards[0];
//   console.log(card);
// }

// main();
