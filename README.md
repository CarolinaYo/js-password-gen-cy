# 03: JavaScript: Password Generator

## INRODUCTION 

Using JavaScript, the page to be created will generate new password for the user.  The application will run in the browser promtping user's input and then generate a password that satisfy user's selected criteria.

## REQUIREMENT

This application must be able to process inputs prompting:
* User's input of length desired for the password
* Certain criteria such as the inclusion of: **Upper case, lower case, numbers, special characters,** to build a strong password

Language used:
* Html
* CSS
* JavaScript

## STEPS

1. ### User will begin on a start page:

![Start page](/Assets/readme/startpage.png)

2. ### After clicking "Generate Password", user will be presented with a series of criteria prompts:

a. Requesting for length of password.
    ![Length input](/Assets/readme/p1_length.png)

_-   Invalid value or range warning_ will appear when user enter a length that is out of the range or a non numerical value.  User will be navigated back to the previous prompt before proceeding to the next option. ![Invalid input warning](/Assets/readme/invalid_warning1.png)

b. Requesting criteria selection uppercase. 
![Uppercase criteria](/Assets/readme/p2_uppercase.png) 

c. Requesting criteria selection lowecase. 
![Lowercase criteria](/Assets/readme/p3_lowercase.png) 

d. Requesting criteria selection numeric value. 
![Numeric criteria](/Assets/readme/p4_number.png) 

e. Requesting criteria selection number. 
![Special symbol criteria](/Assets/readme/p5_symbol.png)

_-  No selection warning_ will appear when no criteria was selected.  User will be navigated back to the selection of criteria prompts. 
![Invalid selection warning](/Assets/readme/invalid_warning2.png)

f. ### Password will be generated after user satisfied required input and criteria. 
![Generate Password](/Assets/readme/final.png)

## MAINTAINER 
This is an individual assignment created by Carolina Yoedhana.
* Github Link: https://github.com/CarolinaYo/js-password-gen-cy.git
* Gitpage Link: https://carolinayo.github.io/js-password-gen-cy/

