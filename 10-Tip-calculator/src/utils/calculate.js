export const calculateTip = (amount, quality, guests) => {
  return (+amount * (+quality / 100)) / +guests;
};
