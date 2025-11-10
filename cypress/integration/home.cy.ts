/// <reference types="Cypress" />

describe('Text Compare App', () => {
  beforeEach(() => {
    cy.visit('https://text-compare.netlify.app/');
  });

  it('should display the app name on the home page', () => {
    cy.visit('/');
    cy.contains('Text Compare');
    cy.contains('Netlify');
    cy.get('h1').should('contain.text', 'Text Compare');
  });

  it('should display two text boxes and a compare button', () => {
    cy.visit('/');
    cy.get('#editor1').should('be.visible');
    cy.get('#editor2').should('be.visible');
    cy.contains('button', 'Compare').should('be.visible');
  });

  it('should compare two text inputs', () => {
    const left = 'Hello World';
    const right = 'Hello world';

    cy.get('#editor1').clear().type(left);
    cy.get('#editor2').clear().type(right);

    cy.contains('button', 'Compare').click();
    cy.get('#diffeditor').should('be.visible');
  });
});
