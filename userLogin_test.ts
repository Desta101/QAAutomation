Feature('User Login');

import { navigateToLoginPage } from './commonSetup';

Scenario('Navigate to the login page and verify elements', ({ I }) => {
    // Use the existing navigateToLoginPage function
    navigateToLoginPage(I);
});


Scenario('Login with valid credentials', ({ I }) => {
    navigateToLoginPage(I);
    I.waitForElement('#email', 5);
    I.fillField('#email', 'ShimonDesta2@gmail.com'); // Use valid email
    I.fillField('#password', '12345678'); // Use valid password
    I.click('#submit');
    I.seeInCurrentUrl('/contactList');  // Verify successful login redirection
});

Scenario('Prevent login with invalid credentials', ({ I }) => {
    navigateToLoginPage(I);
    I.waitForElement('#email', 5);
    I.fillField('#email', 'ShimonDesta2@gmail.com');
    I.fillField('#password', 'wrongPassword');
    I.click('#submit');
    I.waitForElement('#error', 5); // Wait for error message to appear
    I.see('Incorrect username or password', '#error'); // Correct the error message
});

