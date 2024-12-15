const navbarText = Cypress.env('navbartext');


context('Myfirstprog', () =>
{
beforeEach(() =>{

    cy.visit('https://example.cypress.io/commands/actions')
})
it('findh1Elements',() =>
{
  cy.get('h1').should('exist');
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

it('renders the environment variable',()=>
{
    cy.get('navbarText').should(exist);
})
} )