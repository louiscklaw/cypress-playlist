context('Actions', () => {
  beforeEach(() => {
    cy.intercept('https://sentry.io/*', {});

    cy.visit('https://whatismyviewport.com');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });

  it('whatismyviewport-desktop-render', () => {

    cy.viewport(1920, 1080);

    cy.wait(1*1000)

    cy.screenshot({ capture: 'viewport', overwrite: true });
  });

  // it('whatismyviewport-tablet-render', () => {

  //   cy.viewport(810, 1080);

  //   cy.wait(1*1000)

  //   cy.screenshot({ capture: 'viewport', overwrite: true });
  // });

  // it('whatismyviewport-mobile-render', () => {

  //   cy.viewport('iphone-x');

  //   cy.wait(1*1000)

  //   cy.screenshot({ capture: 'viewport', overwrite: true });
  // });
});
