
describe ("Assertions Demo",()=>{

    it.only("explicit assertion",()=>{
        // expect and assert
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("span.oxd-userdropdown-tab > p").then((element)=>{
            // expect(element.text()).to.equal("Jeft Silva")
            assert.equal(element.text(),"Jeft Silva")
        })

     
       
    })


    it("implicit assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // should  and
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        cy.url()
        .should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')


        cy.url()
        .should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','orange145')

        cy.title().should('include','OrangeHRM')
        cy.get('div.orangehrm-login-branding >img')
        .should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length',5)

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")

    })
})