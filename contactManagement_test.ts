Feature('Contact Management');

import {addContact, contacts, email, navigateToSignUpPage, password} from './commonSetup';
import { loginAndNavigateToContactList } from './commonSetup';


Scenario('Verify successful user registration', ({ I }) => {
    navigateToSignUpPage(I);
    I.fillField('#firstName', 'John');
    I.fillField('#lastName', 'Doe');
    I.fillField('#email', email);
    I.fillField('#password', password);
    I.click('#submit');
    I.seeInCurrentUrl('/contactList');
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

Scenario('should add a new contact and update the database', ({ I }) => {
    loginAndNavigateToContactList(I);
    const contact = {
        firstName: 'Alice',
        lastName: 'Wonderland',
        birthdate: '1990-01-01',
        email: 'alice.wonderland@example.com',
        phone: '1234567890',
        street: '123 Wonderland St',
        city: 'Wonderland',
        state: 'Fantasy',
        postalCode: '12345',
        country: 'Wonderland'
    };
    addContact(I, contact);
    I.see('Alice Wonderland', '.contactTable');
});

Scenario('should validate all required fields when adding a new contact', ({ I }) => {
    loginAndNavigateToContactList(I);
    I.click('#add-contact');
    I.fillField('#firstName', '');
    I.fillField('#lastName', 'Wonderland');
    I.fillField('#phone', '1234567890');
    I.click('#submit');
    I.see('Contact validation failed: firstName: Path `firstName` is required.', '#error');
});

Scenario('should display the new contact correctly in the list after adding', ({ I }) => {
    loginAndNavigateToContactList(I);
    I.see('Alice Wonderland', '.contactTable');
});
