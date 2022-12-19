context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });
});
