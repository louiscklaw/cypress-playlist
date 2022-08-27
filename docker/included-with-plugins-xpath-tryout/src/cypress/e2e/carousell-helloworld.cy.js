context('carousell', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('helloworld ', { retries: 5 }, () => {
    cy.visit('https://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 10);
    cy.get('select', { timeout: 10000 }).should('be.visible');
    // cy.wait(5000);

    cy.log('helloworld');

    cy.screenshot();
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});

// context('Actions', () => {
//   it('helloworld cypress', () => {
//     cy.visit('http://www.example.com');
//     cy.log('helloworld');
//   });
// });
