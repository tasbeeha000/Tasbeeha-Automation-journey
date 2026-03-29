// main.js — named import
import { users, products } from "./testdata.js";
//1. Log every user name using forEach

users.forEach((user) => {
  console.log(user.name);
});
//2. Get all active users using filter
let activeUserList = users
  .filter((user) => user.active === true)
  .map((user) => user.name);
console.log("Active users:", activeUserList);
//3. Get all product names using map
let allProducts = products.map((product) => {
  return product.name;
});
console.log(allProducts);
//4. Find the product with id === 3
let Id3Product = products.find((product) => product.id === 3);
console.log(Id3Product);
//5. Get names of inStock products with price > 500
let affordables = products
  .filter((product) => product.price > 500)
  .map((product) => product.name);
console.log(affordables);
