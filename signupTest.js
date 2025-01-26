const { Builder, By, until } = require('selenium-webdriver');

(async function testSignup() {
  // Initialize the WebDriver for Firefox
  let driver = await new Builder().forBrowser('chrome').build();


  try {
    // Navigate to the signup page
    await driver.get('http://localhost:3000/signup'); 

    // Wait until the first name field is present and interactable
    await driver.wait(until.elementLocated(By.id('firstName')), 10000);
    await driver.findElement(By.id('firstName')).sendKeys('John');

    // Wait until the last name field is present and interactable
    await driver.wait(until.elementLocated(By.id('lastName')), 10000);
    await driver.findElement(By.id('lastName')).sendKeys('Doe');

    // Wait until the phone number field is present and interactable
    await driver.wait(until.elementLocated(By.id('phoneNumber')), 10000);
    await driver.findElement(By.id('phoneNumber')).sendKeys('0123456789');

    // Wait until the email field is present and interactable
    await driver.wait(until.elementLocated(By.id('email')), 10000);
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');

    // Wait until the password field is present and interactable
    await driver.wait(until.elementLocated(By.id('password')), 10000);
    await driver.findElement(By.id('password')).sendKeys('Password@123');

    // Wait until the submit button is present and interactable
    await driver.wait(until.elementLocated(By.name('submit')), 10000);
    await driver.findElement(By.name('submit')).click();

    // Wait for the success alert to appear (if the form is successfully submitted)
    await driver.wait(until.alertIsPresent(), 10000);
    const alertText = await driver.switchTo().alert().getText();

    // Assert the success message
    if (alertText.includes('Form submitted successfully')) {
      console.log('Signup test passed!');
    } else {
      console.log('Signup test failed: Unexpected alert message');
    }
  } catch (error) {
    console.error('Signup test failed:', error);
  } finally {
    // Quit the browser
    await driver.quit();
  }
})();
