describe('carousell', () => {
  it('helloworld ', { retries: 3 }, () => {
    cy.visit('https://www.carousell.com.hk');
    cy.log('helloworld');
    cy.screenshot();
  });
});
