
describe('Alerts', () => {
    it("Alerts", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:Alert', (t) => {
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })

    it("Alerts confirm", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()


        cy.on('window:Confirm', (t) => { 
            expect(t).to.contains("I am a JS Alert");
        })
        cy.on('window:Confirm', () => false);
        cy.get("#result").should('have.text', 'You clicked: Cancel')

    })


    it("Alerts confirm", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.window().then((win) =>
    {
        cy.stub(win,'prompt').returns('welcome Barani');
    })
    cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', () => false);
       
        cy.get("#result").should('have.text', 'You entered: welcome Barani')

    })

    it.only("Automatic Alerts confirm", () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{
                                                                           username: "admim",
                                                                           password: "admin"                                                  
        }});
      
  
  
        cy.get("div[class='example']p").should('have.text', 'Congratulations! You must have the proper credentials.')
    })

})