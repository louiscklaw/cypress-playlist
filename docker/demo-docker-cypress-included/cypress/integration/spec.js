// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('example.com-helloworld', () => {
  beforeEach(() => {
    cy.visit('https://www.example.com')
  })

  it('take screenshot', function () {
    cy.screenshot()
  })
})
