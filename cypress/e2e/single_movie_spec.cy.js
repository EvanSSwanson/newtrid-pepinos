describe('Single Movie Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/539885');
      })
    it('Should have a title', () => {
      cy.contains('h1', 'Putrid Pepinos')
      cy.contains('h1', 'Ava')
    })
    it('Should show all the movie details', () => {
        cy.get('.movie-details').should('contain', 'Overview')
            .and('contain', 'assassin')
        cy.get('.movie-details').should('contain', 'Genres')
            .and('contain', 'Action')
            .and('contain', 'Crime')
            .and('contain', 'Drama')
            .and('contain', 'Thriller')
        cy.get('.movie-details').should('contain', 'Budget')
            .and('contain', '$0')
        cy.get('.movie-details').should('contain', 'Revenue')
            .and('contain', '$152812')
        cy.get('.movie-details').should('contain', 'Runtime')
            .and('contain', '96 minutes')
        cy.get('.movie-details').should('contain', 'Tagline')
            .and('contain', 'Kill. Or be killed.')
        cy.get('.movie-details').should('contain', 'Release Date')
            .and('contain', '2020-07-02')
        cy.get('.movie-details').should('contain', 'Rating')
            .and('contain', '5.9')
        cy.get('.movie-details').within(() => {
            cy.get('.poster').should('be.visible')
            cy.get('.backdrop').should('be.visible')
      })
    })
  })