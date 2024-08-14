Feature('User Registration');

import {email, navigateToSignUpPage} from './commonSetup';


Scenario('Handle duplicate email registration', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'Shimon');
    I.fillField('#lastName', 'Desta');
    I.fillField('#email', email);
    I.fillField('#password', 'securePass');
    I.click('#submit');
    I.see('Email address is already in use', '#error');
});
// Check that user registration fails if password is less than 7 characters
Scenario('should fail registration if password is less than 7 characters', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'Test');
    I.fillField('#lastName', 'User');
    I.fillField('#email', 'testuser@example.com');
    I.fillField('#password', '12345');
    I.click('#submit');
    I.see('User validation failed: password: Path `password`', '#error');

});

// Check that user registration fails if email is invalid
Scenario('should fail registration if email is invalid', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'Test');
    I.fillField('#lastName', 'User');
    I.fillField('#email', 'invalidemail.com');
    I.fillField('#password', 'securePass');
    I.click('#submit');
    I.see('User validation failed: email: Email is invalid', '#error');

});

// Check that user cannot register with the same email twice
Scenario('should fail registration if trying to register with an existing email', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'Test');
    I.fillField('#lastName', 'User');
    I.fillField('#email', email); // Assuming email is a previously registered email
    I.fillField('#password', 'securePass');
    I.click('#submit');
    I.see('Email address is already in use', '#error');

});

// Check that registration requires all fields
Scenario('should fail registration if any required field is missing', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', '');
    I.fillField('#lastName', 'User');
    I.fillField('#email', 'testuser@example.com');
    I.fillField('#password', 'securePass');
    I.click('#submit');
    I.see('User validation failed: firstName: Path `firstName` is required', '#error');

});
