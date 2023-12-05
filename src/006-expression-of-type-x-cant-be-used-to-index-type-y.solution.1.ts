const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: keyof typeof productPrices) => {
  return productPrices[productName];
};

getPrice("Apple");

// @ts-expect-error
getPrice("Pear");
