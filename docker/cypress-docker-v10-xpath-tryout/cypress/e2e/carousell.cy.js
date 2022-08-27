import { onlyOn, skipOn } from '@cypress/skip-test';

describe('test xpath', { retries: { runMode: 3, openMode: 1 } }, () => {
  it('helloworld', () => {
    cy.visit('https://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 10);

    cy.xpath('(.//input[@placeholder="Search for an item"])[1]').type('3D 代客打印');

    cy.intercept('/search/*').as('searchText');
    cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();
    cy.wait('@searchText').then(interception => {
      // we can now access the low level interception
      // that contains the request body,
      // response body, status, etc
      cy.log('search done');
    });

    // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a
    cy.get('main').then($el => {
      cy.log($el.text());
    });

    // cy.screenshot();
  });
});
