// Object property shorthand

const name = "Bastien";
const userAge = 26;

const user = {
  name,
  age: userAge,
  location: "Sydney",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("Order:", product);

// To further have errors handled if we didnt provide product to transaction(), The function would crash
// as it would try to destructure undefined, We have assigned a default parameter if for example transaction,
// Does not contain an object as an argument during call then it will try to destructure an empty object, Thus
// Handling the previous crash with a destructuring outcome of label = undefined, stock = undefined
// The same idea goes for the keys within the destructured object "stock = 0", we can prefix the value with the above code.
