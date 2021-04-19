import "./automaticLogin.js"
context('Create Routine', () => {
  it('Evening Routine', () => {
    cy.automaticLogin.login();
    cy.get('#idCreateRoutineButton').should('be.visible').click()
    cy.url().should('include', 'create-routine')
    cy.get('#select-routine').should('be.visible').click()
    cy.get('#evening-routine').should('be.visible').click()
    cy.get('[data-cy=cleanser').type('Sh')
    cy.get('[data-cy=cleanser-autocomplete]').should('be.visible').click()
  })

})
