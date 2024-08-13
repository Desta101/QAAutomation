Feature('Contact Management');

import {addContact, contacts, email, navigateToSignUpPage, password} from './commonSetup';
import { loginAndNavigateToContactList } from './commonSetup';


Scenario('Verify successful user registration', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'John');
    I.fillField('#lastName', 'Doe');
    I.fillField('#email', email);
    I.fillField('#password', password); // Use variable
    I.click('#submit');
    I.seeInCurrentUrl('/contactList');  // Check for redirection to contact list page after registration
});

Scenario('Add multiple contacts', ({ I }) => {
    loginAndNavigateToContactList(I);
    contacts.forEach(contact => addContact(I, contact));
});

Scenario('Verify multiple contacts in the list', ({ I }) => {
    loginAndNavigateToContactList(I);
    ['Alice Johnson', 'Bob Smith', 'Carol Davis'].forEach(contactName => {
        I.see(contactName, '.contactTable');
    });
});
