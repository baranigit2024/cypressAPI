describe('handling frames', () => {
    it("frames", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();
    })


    it.only("frames", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })


    
    it("frames", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getFrame('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();
    })

}) 