export const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const createNonZeroNumber = () => {
  const number = randomNumber();
  return number === 0 ? createNonZeroNumber() : number;
};

export const createRandomTwoNumber = () => {
  return {
    number1: randomNumber(),
    number2: createNonZeroNumber(),
  };
};

export const getAnswer = (state) => {
  return (
    Math.round(eval(state.number1 + state.calculation + state.number2) * 100) /
    100
  );
};

export const getdifferentNumber = (answer) => {
  const number = randomNumber();
  return number === answer ? getdifferentNumber(answer) : number;
};
