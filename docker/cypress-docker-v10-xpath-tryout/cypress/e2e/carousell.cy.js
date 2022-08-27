import { onlyOn, skipOn } from '@cypress/skip-test';

describe('test xpath', () => {
  it('helloworld', () => {
    cy.visit('http://www.carousell.com.hk');
    cy.log('helloworld done');
  });
});
