describe('Cypress test', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.contains('Messages')
  })

  it('Posting and deleting msg', function () {
    cy.visit('http://localhost:8000')
    cy.get('a').click()
    cy.get('#message').clear()
    cy.get('#message').type('Cypress')
    cy.get('button').click()
    cy.get('li > button').click()
  })
})
