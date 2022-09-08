import { onlyOn, skipOn } from '@cypress/skip-test';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('test xpath', { retries: { runMode: 3, openMode: 1 } }, () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.wait(1000);
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.wait(1000);
  });

  it(`try search by thingiverse`, () => {
    cy.visit('https://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 1);
    cy.screenshot();
  });
});
