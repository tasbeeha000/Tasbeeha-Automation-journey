// const PageLoad = new Promise((resolve, reject) => {
//   let PageLoaded = true;
//   if (PageLoaded) {
//     resolve("Page Loaded Successfully");
//   } else {
//     reject("Page Failed to Load");
//   }
// });
// PageLoad.then((result) => console.log("Page loaded successfully")).catch(
//   (error) => console.log("Page failed to load"),
// );
//Promise 2 — you write this one yourself:
//Write a promise called submitForm. If formValid = true, resolve with "Form submitted!". If false, reject with "Error: Form is empty". Then call .then() and .catch() on it.
// const submitForm = new Promise((resolve, reject) => {
//   let formValid = true;
//   if (formValid) {
//     resolve("Form submitted!");
//   } else {
//     reject("Error: Form is empty");
//   }
// });
// submitForm
//   .then((msg) => console.log("Form submitted!"))
//   .catch((err) => console.log("Error: Form is empty"));
//Promise 3 — you write this one yourself:
//Write a promise called loginUser. If passwordCorrect = true, resolve with "Login successful". If false, reject with "Wrong password".
// const loginUser = new Promise((resolve, reject) => {
//   let passwordCorrect = true;
//   if (passwordCorrect) {
//     resolve("Login successful");
//   } else {
//     reject("Wrong password");
//   }
// });
// loginUser
//   .then((msg) => console.log("Login successful"))
//   .catch((err) => console.log("Wrong password"));
//settimeout

// const MessageAppears = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let AppearedMsg = true;
//     if (AppearedMsg) {
//       resolve("Message appeared after 2 seconds");
//     } else {
//       reject("Message failed to appear");
//     }
//   }, 2000);
// });

// MessageAppears.then((msg) => console.log(msg)).catch((err) => console.log(err));

//login chain
// const openBrowser = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Browser Opened");
//   }, 2000);
// });

// const NavigateTo = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Navigate to login page");
//   }, 1000);
// });

// const Login = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let passwordCorrect = false;
//     if (passwordCorrect) {
//       resolve("Succesgully login");
//     } else {
//       reject("Not Succesgully login");
//     }
//   }, 2000);
// });

// openBrowser
//   .then((msg) => {
//     console.log(msg);
//     return NavigateTo;
//   })
//   .then((msg) => {
//     console.log(msg);
//     return Login;
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("something went wrong", err);
//   });
//click login button

const OpenTheBrowser = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Chrome Opened Successfully");
  }, 1000);
});
const LoadWebsite = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Page Loaded successfully");
  }, 1000);
});

const fillLoginform = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Filled successfully");
  }, 1000);
});
const clickLoginButton = new Promise((resolve, reject) => {
  setTimeout(() => {
    let CorrectCredentials = false;
    if (CorrectCredentials) {
      resolve("Login Successfully");
    } else {
      reject("Incorrect Credentials");
    }
  }, 1000);
});

async function runAutomationTest() {
  try {
    const step1 = await OpenTheBrowser;
    console.log(step1);

    const step2 = await LoadWebsite;
    console.log(step2);

    const step3 = await fillLoginform;
    console.log(step3);
    const step4 = await clickLoginButton;
    console.log(step4);
  } catch (err) {
    console.log("Test failed", err);
  }
}
runAutomationTest();
// OpenTheBrowser.then((msg) => {
//   console.log(msg);
//   return LoadWebsite;
// })
//   .then((msg) => {
//     console.log(msg);
//     return fillLoginform;
//   })
//   .then((msg) => {
//     console.log(msg);
//     return clickLoginButton;
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
