/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Basic Testing",()=>{
  it("Page looks good",()=>{
    cy.viewport(1280,720)
    cy.visit("https://codedamn.com/")

    cy.contains("Start learning").should("exist")
    cy.contains("Playgrounds").should("exist")
    cy.contains("Pricing").should("exist")
    cy.contains("Contact Us").should("exist")

    cy.contains("Sign in").click()
    cy.contains("Forgot your password?").should("exist")
    cy.contains("Don't have an account? Create one").should("exist")
  })

  it.only("Login page looks",()=>{
    cy.viewport(1280,720)
    cy.visit("https://codedamn.com/")
   
    // 1. Sign in page
    cy.contains("Sign in").click()
   
    // 2. password reset page
    cy.contains("Forgot your password?").click({force: true})

    // 3. verify your page URL
    cy.url().should("include","/password-reset")

    cy.url().then(value => {
      cy.log("The current URL is: ",value)
    })

    // 4. go back, on the sign in page
    cy.go('back')
    
  })



})