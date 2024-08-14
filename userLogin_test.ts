Feature('User Login');

import {email, navigateToLoginPage, password} from './commonSetup';

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

Scenario('should fail login with incorrect password', ({ I }) => {
    navigateToLoginPage(I);
    I.fillField('#email', 'validuser@example.com');
    I.fillField('#password', 'wrongpassword');
    I.click('#submit');
    I.see('Incorrect username or password', '#error');
});

Scenario('should fail login with incorrect username', ({ I }) => {
    navigateToLoginPage(I);
    I.fillField('#email', 'wronguser@example.com');
    I.fillField('#password', 'correctpassword');
    I.click('#submit');
    I.see('Incorrect username or password', '#error');
});

Scenario('should login successfully with correct credentials', ({ I }) => {
    navigateToLoginPage(I);
    I.waitForElement('#email', 5);
    I.fillField('#email', email); // וודא שכתובת האימייל והסיסמה נכונים
    I.fillField('#password', password);
    I.click('#submit');
    I.seeInCurrentUrl('/contactList'); // זה מה שנצפה לראות אם ההתחברות מצליחה
});

