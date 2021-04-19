import "./automaticLogin.js"
context('Delete photo', () => {
  it('Evening Routine', () => {
    cy.automaticLogin.login();
    cy.get('[data-cy=album-navigation]').should('be.visible').click()
    cy.get('[data-cy=gallery]').click(50, 80)
  })

})
