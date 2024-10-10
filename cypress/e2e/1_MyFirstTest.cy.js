
describe("My First Suite ",() => {
    it ("verify positive",() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
        cy.title().should('eq','OrangeHRM')

    }) 
    it ("verify negative",() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
        cy.title().should('eq','Orange123')

    })
})

// describe("my first suite ",function()  {
//     it ("verify positive",function()  {
//         cy.visit("https://opensource-demo.orangehrmlive.com/auth/login")
//         cy.title().should('eq','OrangeHRM')

//     }) 
// })

