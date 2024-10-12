describe("Check box and Radio Button",()=>{
    it("verifying radio button",()=>{
        cy.visit("https://freelance-learn-automation.vercel.app/signup")
        cy.get("input[value='Male']").should('be.visible')
        cy.get("input[value='Female']").should('be.visible')

        cy.get("input[value='Female']").check().should('be.checked')
        cy.get("input[value='Male']").should('not.be.checked')

    })

    it.only("verifying check boxes",()=>{
        cy.visit("https://freelance-learn-automation.vercel.app/signup")
        // to visible
        cy.get("input[name='6645751b07bdedf17a8769c7']").should('be.visible')
        //to select
        cy.get("input[name='6645751b07bdedf17a8769c7']").check().should('be.checked')
        //to unselect
        cy.get("input[name='6645751b07bdedf17a8769c7']").uncheck().should('not.be.checked')

        //selecting all checboxes
        cy.get("input[class='form-check-input']").check().should('be.checked')
        cy.get("input[class='form-check-input']").check().uncheck().should('not.be.checked')

        //select first and last checkboxes
        cy.get("input[class='form-check-input']").last().check().should('be.checked')
        cy.get("input[class='form-check-input']").first().check().should('be.checked')
    
    })
})