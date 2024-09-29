describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe('My First Test', () => {
    it('This test should pass', () => {
        expect(true).to.equal(true)
    })

//    it('This test should fail', () => {
//        expect(true).to.equal(false)
//    })
})

describe('First Real Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')
    })
})