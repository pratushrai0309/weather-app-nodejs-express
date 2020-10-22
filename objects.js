
//Object Destructuring
const product = {
  label: 'Blue notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  brand: 'classmate'
}

// const {label:productLabel, stock, price, salePrice, rating = 5} = product

// console.log(productLabel);
// console.log(stock);
// console.log(price);
// console.log(salePrice);
// console.log(rating);

const transaction = (type, { label, stock, price }) => {
   console.log(`Your product is ${label}`);
   console.log(`We have currently ${stock} pieces of them`);
   console.log(`It's price is ${price} bucks`);
}

transaction('order', product)