import { onlyOn, skipOn } from '@cypress/skip-test';

describe('test xpath', () => {
  it('helloworld', () => {
    cy.visit('http://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 10);
    cy.log('helloworld done');

    cy.xpath('.//div');

    cy.screenshot();

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.wait(3000);
  });
});
