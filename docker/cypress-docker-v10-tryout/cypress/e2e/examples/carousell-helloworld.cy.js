context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.carousell.com.hk')
  })

  it('helloworld cypress', () => {
    cy.log('helloworld')
    cy.screenshot()
  })
})
