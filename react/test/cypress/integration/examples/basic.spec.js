/// <reference types="cypress" />
import "./automaticLogin.js"

context('Basic', () => {
  it('Login', () => {
    cy.automaticLogin.login();
  })
  it('Registration', ()=>{
    cy.visit('http://localhost:3000/sign-up')
    cy.get('#name')
      .type('CypressTest')

    cy.get('#email')
      .type('cypres@cypres.com')

    cy.get('#password')
      .type('123456')

    cy.get('#submitButton')
      .click()
    cy.url().should('include', 'my-routine')

    cy.get('#idCreateRoutineButton').should('be.visible')
  })

})
