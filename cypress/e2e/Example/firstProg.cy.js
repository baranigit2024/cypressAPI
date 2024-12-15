const navbarText = Cypress.env('navbartext');


context('Myfirstprog', () => {
  beforeEach(() => {

    cy.visit('https://example.cypress.io/commands/actions')
  })
  // it('findh1Elements', () => {
  //   cy.get('h1').should('exist');
  // })

  // it('renders the hidden element', () => {
  //   cy.findAllByText('Actions').first().click({ force: true })
  //   cy.url().should('include', '/commands/actions')
  // })

  // it('type in input field', () => {
  //   cy.visit('https://example.cypress.io/commands/actions');
  //   cy.findByPlaceholderText('Email').type('test').should('have.value', 'test')

  // })

  // it('clear in input field', () => {
  //   cy.visit('https://example.cypress.io/commands/actions');
  //   cy.findByLabelText('Describe:').type('Barani').should('have.value', 'Barani').clear()
  //     .should('have.value', '')
  // })

  it('read date from fixture', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.fixture('example').then(function(data)
    {
      this.data = data
      cy.log(this.data)
    })

  })

  // // it('render the correct h1 text',() =>{
  // //     cy.get('h1').should('contain.text','Actions');
  // // })

  // // it('renders the paragraph under h1',()=>{
  // //     cy.get('.container').eq(1).find('p').should('exist');
  // // })

  // // it('render section with correct elements',() =>
  // // {
  // //     cy.get('.container').eq('2').within(()=>
  // //     {
  // //         cy.get('h4').should('exist');
  // //         cy.get('p').should('exist');
  // //     })
  // })

  // it('renders the environment variable', () => {
  //   cy.findByText('cypress.io').should('exist');
  //   cy.wait(2000).then(() => {
  //     fetch('https://api.spacexdata.com/v3/missions')
  //     .then((res) => res.json)
  //     .then((data) => {
  //       console.log(data)
  //     })

  //   })
  // })
})