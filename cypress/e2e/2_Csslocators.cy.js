describe("CSS Locators",()=>{
    it("css locators",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("input.search_query").type("T-shirts")
        cy.get("button[name='submit_search']").click()
        cy.get("span.lighter").contains("T-shirts")
       

    })
})