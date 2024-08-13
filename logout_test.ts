Feature('Logout');

import {email, loginAndNavigateToContactList, logout, navigateToSignUpPage, password} from './commonSetup';

Scenario('Logout from the system', async ({ I }) => {
    loginAndNavigateToContactList(I);
    await logout(I);
});
