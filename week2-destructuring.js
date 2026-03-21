const product = {
  id: 1,
  name: "laptop",
  price: "1200",
  instock: true,
};
const { id, name, price, instock } = product;
console.log(id);
console.log(name);
console.log(price);
console.log(instock);

const user = { id: 3, name: "jasmine", role: "admin", active: true };
const { role, active } = user;
console.log(role);
console.log(active);

const testSteps = ["open browser", "login", "search product"];
const [a, b, c] = testSteps;
console.log(a);
console.log(b);
console.log(c);

const users = [
  { id: 1, name: "jasmine", role: "admin" },
  { id: 2, name: "sara", role: "user" },
  { id: 3, name: "ali", role: "admin" },
];

users.forEach(({ name, role }) => {
  console.log(`${name} is a ${role}`);
});
