Feature('User Login');

import { email,navigateToLoginPage } from './commonSetup';

Scenario('Navigate to the login page and verify elements', ({ I }) => {
    navigateToLoginPage(I);
});


Scenario('Login with valid credentials', ({ I }) => {
    navigateToLoginPage(I);
    I.waitForElement('#email', 5);
    I.fillField('#email', email); 
    I.fillField('#password', '12345678'); 
    I.click('#submit');
    I.seeInCurrentUrl('/contactList'); 
});

Scenario('Prevent login with invalid credentials', ({ I }) => {
    navigateToLoginPage(I);
    I.waitForElement('#email', 5);
    I.fillField('#email', email);
    I.fillField('#password', 'wrongPassword');
    I.click('#submit');
    I.waitForElement('#error', 5); 
    I.see('Incorrect username or password', '#error'); 
});

