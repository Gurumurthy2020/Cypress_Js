describe("For Verifying Dropdown",()=>{
    it.skip("dropdown with select",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("select[class='globalcountrycode']").select('Brazil')
        .should('have.value','Brazil')
    })

    it.skip("dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("span[aria-label='Country']").click()
        cy.get("input.select2-search__field").type("Italy").type('{enter}')
        cy.get("span[aria-label='Country']").should('have.text','Italy')
    })

    it.skip("Auto sujested dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get("[title='Search']").type("Cypress v")
        cy.get(".erkvQe")       
        .find('li span')
        .contains("Cypress vine")
        .click()    

    })

    it("Auto sujested dropdown_2",()=>{
        cy.visit("https://www.google.com/")
        cy.get("[title='Search']").type("cypress automation tool")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").each( ($el, index, $list) => {
            if($el.text() == "cypress automation tool")
                {
                    cy.wrap($el).click()
                }

        })
        cy.get("[title='Search']").should('have.value','cypress automation tool')
    })

})