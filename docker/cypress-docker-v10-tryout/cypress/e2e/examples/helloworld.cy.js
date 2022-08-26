context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://www.example.com')
  })

  it('helloworld cypress', () => {
    cy.log('helloworld')
  })
})
