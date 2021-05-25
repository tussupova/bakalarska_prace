// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('automaticLogin', ()=>{
  cy.visit('http://localhost:3000/sign-in')
  cy.get('[data-cy=email]')
    .type('myuser@myuser.com')

  cy.get('[data-cy=password]')
    .type('123456')

  cy.get('[data-cy=submitButton]')
    .click()

  cy.url().should('include', 'my-routine')

  cy.get('#idCreateRoutineButton').should('be.visible')
})
