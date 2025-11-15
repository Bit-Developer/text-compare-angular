/// <reference types="cypress" />

describe('Text Compare App', () => {
  const delay = 1000; // 1 second

  beforeEach(() => {
    cy.visit('/');
    cy.wait(delay); // wait 1 second before running each test
  });

  it('should display the app name on the home page', () => {
    cy.contains('Text Compare');
    cy.contains('Netlify');
    cy.get('h1').should('contain.text', 'Text Compare');
  });

  it('should display two text boxes and a compare button', () => {
    cy.get('#editor1').should('be.visible');
    cy.get('#editor2').should('be.visible');
    cy.contains('button', 'Compare').should('be.visible');
  });

  it('should compare two text inputs', () => {
    const left = 'Hello World';
    const right = 'Hello world';

    cy.get('#editor1').clear().type(left, { delay: 200 }); // 200ms between keystrokes
    cy.get('#editor2').clear().type(right, { delay: 200 });

    cy.contains('button', 'Compare').click();
    cy.get('#diffeditor').should('be.visible');
  });
});
