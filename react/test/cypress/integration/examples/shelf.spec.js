import "./automaticLogin.js"
context('Delete product', () => {
  it('Evening Routine', () => {
    cy.automaticLogin.login();
    cy.get('[data-cy=shelf-navigation]').should('be.visible').click()
    cy.get('[data-cy=delete-icon]').should('be.visible').click({ multiple: true, force: true })
  })

})
