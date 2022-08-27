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

    // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
    cy.get('#root', { timeout: 15 * 1000 })
      // .get('input[placeholder="Search for an item"]')
      .xpath('.//input[starts-with(@placeholder,"Search")][1]')
      .type('thingiverse');
    cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();
    cy.wait(1000);
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
  });

  // it(`try search by 3D printing`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D printing');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3D 代印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 代印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3D 代客打印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 代客打印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3D 打印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 打印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3D 打印機`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 打印機');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3D 檔案打印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3D 檔案打印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by 3mf`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('3mf');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by cults3d`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('cults3d');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by FDM代印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('FDM代印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by step`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('step');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });

  // it(`try search by STL`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('STL');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
  // it(`try search by thingiverse`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('thingiverse');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
  // it(`try search by 打印委托`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('打印委托');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
  // it(`try search by 繪圖委托`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('繪圖委托');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
  // it(`try search by 繪圖服務`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('繪圖服務');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
  // it(`try search by 誠接打印`, () => {
  //   cy.visit('https://www.carousell.com.hk');
  //   cy.viewport(1920, 1080 * 1);

  //   // #root > div > div > div.D_aiF.D_aiJ > div > div.D_jk > div.D_jm > div > form > div.D_or > div > div > div > input
  //   cy.get('#root').get('input[placeholder="Search for an item"]').type('誠接打印');
  //   cy.xpath('(.//button[@data-testid="navbar-search-input-location-desktop-btn-search"])[1]').click();

  //   // // #root > div > div > div.D_aiF.D_aiJ > div > div.D__Z > div > div > div.D_Ae > a

  //   let seller_list = cy.xpath(`(.//div[(@data-testid!="listing-card") and starts-with(@data-testid,"listing-card")])`, { timeout: 30 * 1000 });
  //   seller_list.contains('louiscklaw');

  //   // found with position
  //   seller_list.each(($el, index, $list) => {
  //     cy.debug(JSON.stringify({ index, text: $el.text() }));
  //     if ($el.text().search(/louiscklaw/) > 0) {
  //       expect(index).to.be.below(8);
  //     }
  //   });
  // });
});
