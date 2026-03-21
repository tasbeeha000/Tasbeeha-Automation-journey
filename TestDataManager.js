const TestData = [
  { name: "Login Test", passed: false, priority: "high" },
  { name: "Checkout Test", passed: false, priority: "low" },
  { name: "Search Test", passed: true, priority: "high" },
  { name: "Payment Test", passed: false, priority: "high" },
  { name: "Logout Test", passed: true, priority: "low" },
];
const criticalFailures = TestData.filter(
  (test) => test.passed === false && test.priority === "high",
).map((test) => test.name);

console.log(criticalFailures);

const users = [
  { id: 1, name: "jasmine", role: "admin", active: true },
  { id: 2, name: "sara", role: "user", active: false },
  { id: 3, name: "ali", role: "user", active: true },
  { id: 4, name: "ahmed", role: "admin", active: false },
  { id: 5, name: "zara", role: "user", active: true },
];

const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 400, inStock: false },
  { id: 3, name: "Tablet", price: 800, inStock: true },
  { id: 4, name: "Watch", price: 150, inStock: false },
  { id: 5, name: "Headphones", price: 600, inStock: true },
];
// Log every user's name using forEach
users.forEach((user) => {
  console.log(user.name);
});

//get an array of ALL user names in UPPERCASE
const nameOfUsers = users.map((user) => {
  return user.name.toUpperCase();
});
console.log(nameOfUsers);
//3. Filter only ACTIVE users
const activeUsers = users
  .filter((user) => user.active === true)
  .map((user) => user.name);
console.log(activeUsers);

//4. Filter only ADMIN users

const adminUsers = users
  .filter((user) => user.role === "admin")
  .map((user) => user.name);
console.log(adminUsers);

//5. Find the user with id === 3
const idUsers = users.find((user) => user.id === 3);
console.log("User Id with 3", idUsers);
//6. Filter only products that are IN STOCK
const inStockProducts = products
  .filter((product) => product.inStock === true)
  .map((product) => product.name);
console.log(inStockProducts);
//7. Filter only products with price LESS than 500
const highPricedProduct = products
  .filter((product) => product.price <= 500)
  .map((product) => {
    return { name: product.name, price: product.price };
  });
console.log(highPricedProduct);

//8. Get an array of just the product NAMES using map

products.map((product) => {
  console.log(product.name);
});
//9. Find the product with id === 4
const newId = products.find((product) => product.id === 4);
console.log("Product with ID 3 ", newId);
//10. COMBINE filter + map — get names of all inStock products with price greater than 500

const inStockItems = products
  .filter((product) => product.inStock === true && product.price > 500)
  .map((product) => {
    return { name: product.name, price: product.price };
  });
console.log(inStockItems);
