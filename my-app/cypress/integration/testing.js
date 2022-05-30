/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Empty",()=>{
  it("test one",()=>{
    cy.visit("https://nikhilshinde-portfolio.netlify.app/")

    cy.contains("Projects").should("exist")

    cy.get("h1").should(($div)=>{
      
      expect($div.get(1).innerText).contains("Experience")
    })
    cy.log("adfaesf")
    cy.log(cy.get("h1"))
    cy.log("adfaesf")

    cy.get("div.App-header").should("not.exist")
    cy.location('host') 
    // project
    cy.get("h1").eq(0).click()
    cy.go('back')

    //experience
    cy.get("h1").eq(1).click()
    cy.go('back')

    // skill
    cy.wait(2000);
    cy.get("h1").eq(2).click()
    cy.get(".left-div").click()

    // contact
    cy.wait(2000);
    cy.get("h1").eq(3).click();
    cy.get("#fname").type("Nikhil Shinde")
    cy.get("#email").type("shinden523@gmail.com")
    cy.get("#phone").type("8329634377");
    cy.get("#comment").type("ksjfb;kjsnefk;jn;lksjne;gfj;kjr g;kj;aksr jg',;m s;r,gf")
    cy.get(".back-button").click()

  })
})