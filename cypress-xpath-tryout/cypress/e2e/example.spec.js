describe('viewports', () => {
  it('cy.xpath helloworld', () => {
    cy.visit('http://www.example.com');
    cy.xpath('/html/body/div/h1');
  });
});
