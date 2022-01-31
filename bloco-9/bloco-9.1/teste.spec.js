let numbers = [1, 2, 3, 4, 5];

const incluirNoArray = (array, number) => {
  array.push(number);
};

// beforeEach();

afterEach(() => {
  numbers = [1, 2, 3, 4, 5];
});

test('', () => {
  incluirNoArray(numbers, 10);
  expect(numbers).toEqual([1, 2, 3, 4, 5, 10]);
});

test('', () => {
  incluirNoArray(numbers, 11);
  expect(numbers).toEqual([1, 2, 3, 4, 5, 11]);
})