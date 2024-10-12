
describe("Alerts Using JS",()=>{
    it.skip("Javascript Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsAlert()']").click()
        cy.on('window:alert',(basicalert)=>{
            expect(basicalert).to.contains("I am a JS Alert")
        })
        cy.get("[style='color:green']").should('have.text','You successfully clicked an alert')

    })

    // js confirmation alert

    it.skip("Javascript confirmation lert using ok",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(basicalert)=>{
            expect(basicalert).to.contains("I am a JS Confirm")
        })
        cy.get("[style='color:green']").should('have.text','You clicked: Ok')

    })

    it.skip("Javascript confirmation alert using cancel",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click()
        // cy.on('window:confirm',(basicalert)=>{
        //     expect(basicalert).to.contains("I am a JS Confirm")
        // })

        // cypress close alert using cancel
        cy.on('window:confirm',()=>false)
        cy.get("[style='color:green']").should('have.text','You clicked: Cancel')

    })

    it.skip("Javascript confirmation alert using prompt",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("hiiiii")
        })
        cy.get("[onclick='jsPrompt()']").click()
        cy.get("[style='color:green']").should('have.text','You entered: hiiiii')
    })

   
    it.skip("Authenticated alert_1 ",()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin',password:'admin'}})
        cy.get("div[class='example']>p").should('have.contain','Congratulations')
     
    })

    it("Authenticated alert_2 ",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']>p").should('have.contain','Congratulations')
     
    })
})  