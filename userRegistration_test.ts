Feature('User Registration');

import { navigateToSignUpPage } from './commonSetup';
import { email,password } from './commonSetup';




Scenario('Handle duplicate email registration', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'Shimon');
    I.fillField('#lastName', 'Desta');
    I.fillField('#email', 'ShimonDesta2@gmail.com');
    I.fillField('#password', 'securePass');
    I.click('#submit');
    I.see('Email address is already in use', '#error');
});
