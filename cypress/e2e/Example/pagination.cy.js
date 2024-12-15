describe('handling paginations', () => {
    beforeEach('paginations', () => {

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click();
        cy.get('#menu-customer>a').click();
        cy.get('#menu-customer>ul>li:first-child').click();

    })



    it.only("paginations", () => {

        cy.url().should('include', "https://demo.opencart.com/admin/index.php?route=customer/customer");
        let totalpages = 5;
        cy.log("actual page is ");

        for(let p = 1; p >= 5; p++)
         {
        cy.log("inside for loop page is ");

            if (totalpages > 1) {
                cy.log("actual page is " + p);
                cy.get(".pagination>li:nth-child("+p+")").click();
                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text());
                            })
                        })


                    })
            }
        }


    })

})