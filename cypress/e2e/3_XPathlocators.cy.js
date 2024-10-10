describe("XPath Locators",()=>{
    it("find Best seller product size",()=>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[contains(text(),'Best Sellers')]").click
        // cy.get("a.blockbestsellers").click
        // cy.get("li.ajax_block_product   ").should('have.length',6)
        cy.xpath("//ul[contains(@class,'product_list')]//li").should('have.length',6)
        
    })

    it("chained xpath",() =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[contains(text(),'Best Sellers')]").click
        // cy.get("a.blockbestsellers").click
        cy.get("li.ajax_block_product   ").should('have.length',6)
    })
})