describe('Personal Website Tests', () => {
    beforeEach(() => {
        cy.visit('https://wooyeoup-rho.github.io/website/');
    });

    it('should load the page and verify the title', () => {
        cy.title().should('eq', 'Document');
    });

    it('should display the correct main heading text', () => {
        cy.get('h1').should('contain.text', "Hi, I'm Wooyeoup");
    });

    it('should display personal photo', () => {
        cy.get('.profile-picture').should('have.attr', 'src').and('include', 'wooyeoup_rho.jpg');
    });

    it('should navigate to Resume page', () => {
        cy.get('a[href="./public/resume.html"]').click();
        cy.url().should('include', '/public/resume');
    });
});