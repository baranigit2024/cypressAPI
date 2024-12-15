
describe('implcit and Explicit assertions',()=>{
    it("assetions",() =>{
         
     cy.visit("https://facehrm.orangehrmlive.com/login")
     cy.get("#username").type("Admin")
     cy.get("#password").type("admin123")
     cy.get("#_submit").click()

         
    })
})