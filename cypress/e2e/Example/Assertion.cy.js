
describe('implcit and Explicit assertions',()=>{
  it("assetions",() =>{
       
   cy.visit("https://practicetestautomation.com/practice-test-login/")
   cy.get("#username").type("student")
   cy.get("#password").type("Password123")
   cy.get("#submit").click()

   let expname = "Logged In Successfully";

   cy.get('.post-title').then((x) =>
   
  {
    //BDD STYLE
    let actName = x.text();
    expect(actName).to.equal(expname)
      //TDD Style
      assert.equal(actName,expname)

  })

       
  })
})