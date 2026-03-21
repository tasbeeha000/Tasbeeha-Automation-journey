//foreach
const product = ["laptop", "Phone", "tablet", "Watch"];
product.forEach((product) => {
  console.log("testing Products:", product);
});
const users = ["alex", "adam", "akam"];
users.forEach((users) => {
  console.log("Running test for:", users);
});
//map -  Loop and TRANSFORM into new array
const prices = [100, 200, 300, 400];
const discountedPrices = prices.map((prices) => {
  return prices * 0.9;
});
console.log(discountedPrices);

const upperCaseUsers = users.map((users) => {
  return users.toUpperCase();
});
console.log("Upper case :", upperCaseUsers);
//filter
const testResults = [
  { name: "login Test", passed: true },
  { name: "Checkout Test", passed: false },
  { name: "Search Test", passed: true },
  { name: "Payment Test", passed: false },
];
const failedTests = testResults.filter((test) => {
  return test.passed === false;
});
console.log(failedTests);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 400 },
  { name: "Tablet", price: 800 },
  { name: "Watch", price: 150 },
];
const highPriceProduct = products.filter((product) => {
  return product.price > 500;
});
console.log(highPriceProduct);
//find
const customers = [
  { id: 1, name: "jasmine", role: "admin" },
  { id: 2, name: "dino", role: "admin" },
  { id: 3, name: "lino", role: "admin" },
];
const adminUser = customers.find((user) => {
  return user.role === "admin";
});
console.log(adminUser);

const idUser = customers.find((customer) => {
  return customer.id === 2;
});
console.log(idUser);
