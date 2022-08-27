import { onlyOn, skipOn } from '@cypress/skip-test';

before(() => {
  // root-level hook
  // runs once before all tests
});

beforeEach(() => {
  // root-level hook
  // runs before every test block
});

// afterEach(() => {
//   // runs after each test block
// });

after(() => {
  // runs once all tests are done
});

describe('test xpath', () => {
  before(() => {
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  // afterEach(() => {
  //   // runs after each test in the block
  // });

  after(() => {
    // runs once after all tests in the block
  });

  it('helloworld', () => {
    cy.visit('http://www.carousell.com.hk');
    cy.viewport(1920, 1080 * 10);
    cy.log('helloworld done');

    cy.xpath('.//*[@id="root"]');

    cy.screenshot();
  });
});
