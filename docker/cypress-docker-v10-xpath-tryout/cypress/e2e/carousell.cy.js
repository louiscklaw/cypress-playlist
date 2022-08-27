import { onlyOn, skipOn } from '@cypress/skip-test';

describe(
  'test xpath',
  {
    retries: {
      runMode: 3,
      openMode: 1,
    },
  },
  () => {
    it('helloworld', () => {
      cy.visit('https://www.carousell.com.hk');

      cy.log('helloworld done');

      cy.xpath('.//div');

      cy.screenshot();
    });
  },
);
