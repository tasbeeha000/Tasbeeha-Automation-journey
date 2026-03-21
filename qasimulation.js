const openBrowser = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Chrome Open successfully");
  }, 2000);
});
const Login = new Promise((resolve, reject) => {
  setTimeout(() => {
    let CorrectCredentials = true;
    if (CorrectCredentials) {
      resolve("Login successfully");
    } else {
      reject("Something Went Wrong");
    }
  }, 2000);
});
const Search = new Promise((resolve, reject) => {
  setTimeout(() => {
    let validSearch = false;
    if (validSearch) {
      resolve("Result showed successfully");
    } else {
      reject("Product Not found");
    }
  }, 2000);
});
const Checkout = new Promise((resolve, reject) => {
  setTimeout(() => {
    let ValidDetails = true;
    if (ValidDetails) {
      resolve("Checkout successfully");
    } else {
      reject("Valid error message");
    }
  }, 2000);
});

async function runnAutomationTest() {
  try {
    let step1 = await openBrowser;
    console.log(step1);
    let step2 = await Login;
    console.log(step2);
    let step3 = await Search;
    console.log(step3);
    let step4 = await Checkout;
    console.log(step4);
  } catch (err) {
    console.log("Test failed successfully");
  }
}
runnAutomationTest();
