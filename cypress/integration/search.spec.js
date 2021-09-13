/// <reference types="cypress" />
import '@percy/cypress'

context('Visual Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/imghp?hl=en')
  })

  it('Results Screenshot 1', () => {
    // https://on.cypress.io/type
    cy.get('.tsf').within(() => {
      cy.get('input:first')
        .should('have.attr', 'role', 'combobox')
        .type('iphone')
        //.should('have.value', 'iphone')

      cy.get('button')
        .should('have.attr', 'aria-label', 'Google Search')
        .click()
      
        cy.percySnapshot();

    })
  })

  it('Results Screenshot 2', () => {
    // https://on.cypress.io/type
    cy.get('.tsf').within(() => {
      cy.get('input:first')
        .should('have.attr', 'role', 'combobox')
        .type('iphone')
        //.should('have.value', 'iphone')

      cy.get('button')
        .should('have.attr', 'aria-label', 'Google Search')
        .click()
      
        cy.percySnapshot();

    })
  })
})

