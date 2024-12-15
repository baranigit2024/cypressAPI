describe('implcit and Explicit assertions',()=>{
    it("Alerts confirm", () => {

    cy.visit("https://the-internet.herokuapp.com/windows")

    cy.get('.example>a').invoke('removeAttr', 'target').click() // remove that target attribute

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

    cy.wait(5000)
    cy.go('back');
    })


    it.only("Alerts confirm", () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
    
        cy.get('.example>a').then((e) =>{
            let url = e.prop('href');  // use the href prop
            cy.visit(url)
        })
    
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    
        cy.wait(5000)
        cy.go('back');

})
})