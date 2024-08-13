
// Utility function to log in
// Generate a random number
const randomNumber = Math.floor(Math.random() * 10000); // Adjust the multiplier to increase the range if needed
export const email = `user${randomNumber}@gmail›.com`;
export const password = '12345678';

export const contacts = [
    { firstName: 'Alice', lastName: 'Johnson', birthdate: '1990-01-01', email: 'alice@gmail.com', phone: '1234567890', street: '123 Elm St', city: 'Anytown', state: 'State', postalCode: '12345', country: 'Country' },
    { firstName: 'Bob', lastName: 'Smith', birthdate: '1985-05-15', email: 'bob@gmail.com', phone: '0987654321', street: '456 Oak St', city: 'Othertown', state: 'AnotherState', postalCode: '54321', country: 'AnotherCountry' },
    { firstName: 'Carol', lastName: 'Davis', birthdate: '1975-07-20', email: 'carol@gmail.com', phone: '1122334455', street: '789 Pine St', city: 'Somewhere', state: 'ThirdState', postalCode: '67890', country: 'ThirdCountry' },
];
export const login = (I: CodeceptJS.I, email: string, password: string) => {
    I.fillField('#email', email);
    I.fillField('#password', password);
    I.click('#submit');
    I.seeInCurrentUrl('/contactList');
    I.see('Contact List', 'h1');
    I.seeElement('#add-contact');
};

// Utility function to add a contact
export const addContact = (I: CodeceptJS.I, contact: { firstName: string, lastName: string, birthdate: string, email: string, phone: string, street: string, city: string, state: string, postalCode: string, country: string }) => {
    I.click('#add-contact');
    I.fillField('#firstName', contact.firstName);
    I.fillField('#lastName', contact.lastName);
    I.fillField('#birthdate', contact.birthdate);
    I.fillField('#email', contact.email);
    I.fillField('#phone', contact.phone);
    I.fillField('#street1', contact.street);
    I.fillField('#city', contact.city);
    I.fillField('#stateProvince', contact.state);
    I.fillField('#postalCode', contact.postalCode);
    I.fillField('#country', contact.country);
    I.click('#submit');
    I.see(`${contact.firstName} ${contact.lastName}`, '.contactTable');
};

// Function to navigate and verify elements on the login page
export const navigateToLoginPage = (I: CodeceptJS.I) => {
    I.amOnPage('https://thinking-tester-contact-list.herokuapp.com/login');
    I.waitForElement('#email', 5);      // Wait up to 5 seconds for the email input to appear
    I.waitForElement('#password', 5);   // Wait for the password input
    I.waitForElement('#submit', 5);     // Wait for the submit button
    I.see('Contact List App', 'h1');
    I.seeInCurrentUrl('/login');
};


// Function to log in and navigate to the contact list
export const loginAndNavigateToContactList = (I: CodeceptJS.I) => {
    navigateToLoginPage(I);
    I.fillField('#email', email);
    I.fillField('#password', password);
    I.click('#submit');
    I.seeInCurrentUrl('/contactList');
    I.see('Contact List', 'h1');
    I.seeElement('#add-contact');
};

// Function to navigate and verify elements on the registration page
export const navigateToSignUpPage = (I: CodeceptJS.I) => {
    navigateToLoginPage(I);
    I.click('Sign up');
    I.seeInCurrentUrl('/addUser');
};

// Function to log out and verify logout success
export const logout = async (I: CodeceptJS.I) => {
    I.waitForElement('#logout', 5);  // Wait for the logout button to appear
    I.click('#logout');
    const currentUrl = await I.grabCurrentUrl();
    console.log('Current URL after logout:', currentUrl);
    I.seeInCurrentUrl('/');
    I.see('Log In');
};
