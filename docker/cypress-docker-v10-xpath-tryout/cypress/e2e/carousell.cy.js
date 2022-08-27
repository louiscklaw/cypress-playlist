import { onlyOn, skipOn } from '@cypress/skip-test';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('test xpath', { retries: { runMode: 3, openMode: 1 } }, () => {
  it('helloworld', () => {
    cy.visit('https://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 1);

    // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
    cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 代客打印');
    cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

    // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

    let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
    seller_list.contains('louiscklaw');

    // found with position
    seller_list.each(($el, index, $list) => {
      cy.debug(JSON.stringify({ index, text: $el.text() }));
      if ($el.text().search(/louiscklaw/) > 0) {
        expect(index).to.be.below(8);
      }
    });

    // cy.screenshot();
  });
});
