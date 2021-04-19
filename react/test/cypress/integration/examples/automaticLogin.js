//custom commands

cy.automaticLogin = {
  login: () => {
      cy.visit('http://localhost:3000/sign-in')
      cy.get('[data-cy=email]')
        .type('myuser@myuser.com')

      cy.get('[data-cy=password]')
        .type('123456')

      cy.get('[data-cy=submitButton]')
        .click()

      cy.url().should('include', 'my-routine')

  }
}


