# 03: JavaScript: Password Generator

## INRODUCTION

Using JavaScript, this application generates a password for user. The application will run in the browser prompting a series of user's input and generate a password that satisfy user's selected criteria.

## REQUIREMENT

This application must be able to process inputs from the following criteria:

- User's input of length desired for the password
- The selected inclusion of: **uppercase, lowercase, numbers, special characters,** to build a strong password.

Language used:

- Html
- CSS
- JavaScript

## STEPS

### 1. User will begin on the start page:

![Start page](/Assets/readme/startpage.PNG)

### 2. After clicking "Generate Password" button, user will be presented with a series of criteria prompts:

a. Requesting for length of password.

- ![Length input](/Assets/readme/p1_length.png)

_- Invalid value or range warning_ will appear when user enter a length that is out of the range or a non numerical value. User will be navigated back to the previous prompt before proceeding to the next option.

- ![Invalid input warning](/Assets/readme/invalid_warning1.png)

b. Requesting criteria selection for uppercase.

- ![Uppercase criteria](/Assets/readme/p2_uppercase.png)

c. Requesting criteria selection for lowercase.

- ![Lowercase criteria](/Assets/readme/p3_lowercase.png)

d. Requesting criteria selection for numeric value.

- ![Numeric criteria](/Assets/readme/p4_number.png)

e. Requesting criteria selection for special character.

- ![Special symbol criteria](/Assets/readme/p5_symbol.png)

_- No selection warning_ will appear when no criteria was selected. User will be navigated back to the selection of criteria prompts.

- ![Invalid selection warning](/Assets/readme/invalid_warning2.png)

### 3. Password will be generated after user satisfy required inputs.

![Generate Password](/Assets/readme/Final.PNG)

## MAINTAINER

This is an individual assignment created by Carolina Yoedhana.

- Github Link: https://github.com/CarolinaYo/js-password-gen-cy.git
- Gitpage Link: https://carolinayo.github.io/js-password-gen-cy/
