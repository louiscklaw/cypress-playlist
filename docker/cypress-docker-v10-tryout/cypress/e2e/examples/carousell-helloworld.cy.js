context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.carousell.com.hk')
  })

  it('helloworld carousell', () => {
    cy.log('helloworld')
    cy.screenshot()
  })
})
