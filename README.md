# QA Automation Final Project

## Project Overview

This project is designed to test the functionality of the website [Thinking Tester Contact List](https://thinking-tester-contact-list.herokuapp.com) using CodeceptJS. The test suite includes the following key tests:

1. **User Registration**
2. **User Login**
3. **Contact Management**
4. **Logout Functionality**

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Details](#test-details)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:
1.  **Clone the Repository:**

   ```bash
   git clone https://github.com/Desta101/QAAutomation.git
   cd QAAutomation
```
2. **Install Dependencies:**
  npm install
3. **Run the Tests:**
    **To run all tests with detailed output, use:**
   ```bash
    npx codeceptjs run --steps
   ```
This command will execute all the tests in the project and provide detailed output for each step.


**Test Details**
1. **User Registration (userRegistration_test.ts)**
  This script tests the user registration process. It ensures that:
  A user can successfully register.
  Duplicate emails are not allowed.
  Passwords meet the minimum security requirements.

2. **User Login (userLogin_test.ts)**
  This script verifies the login functionality. It checks:
  Users can log in with valid credentials.
  Incorrect credentials prevent login.

3. **Contact Management (contactManagement_test.ts)**
  This script handles the creation and verification of contacts within the system. It tests:
  The addition of multiple contacts.
  Verification of contact details in the contact list.

4. **Logout (logout_test.ts)**
  This script verifies the logout functionality to ensure that:
  Users can log out successfully.
  The user is redirected to the correct page after logging out.

5. **Common Setup (commonSetup.ts)**
  This script contains common setup code used across different tests, such as initial configurations and reusable functions.





