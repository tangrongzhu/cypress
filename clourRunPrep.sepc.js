/// <reference types="Cypress" />

describe('login BSSH', () => {
    beforeEach(() => {
        cy.visit('https://ilum.cloud-test.illumina.com/cloud-run-prep/')
        cy.get('[name="email"]').type('basespaceuser2@illumina.com')
        cy.get('[name="password"]').type('DataTest16!')
        cy.get('input.btn').click()
        cy.server()
        cy.route('GET','/v1/sequencing/*').as('getAllElement')
        cy.wait('@getAllElement').its('status').should('eq', 200)
        cy.get('h4.mb-3').should('contain.text','Run Information')
    })

    it('End to end workflow for OLA', () => {
        cy.get('input[name="runName"]').type('Cypress Test OLA')
        cy.get('input[name="analysisLocation"]').last().check()
    })



})