export const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const createNonZeroNumber = () => {
  const number = randomNumber();
  return number === 0 ? createNonZeroNumber() : number;
};

export const createRandomTwoNumber = () => {
  return {
    number1: createNonZeroNumber(),
    number2: randomNumber(),
  };
};
