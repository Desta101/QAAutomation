Feature('Logout');

import {loginAndNavigateToContactList, logout} from './commonSetup';

Scenario('Logout from the system', async ({ I }) => {
    loginAndNavigateToContactList(I);
    await logout(I);
});
