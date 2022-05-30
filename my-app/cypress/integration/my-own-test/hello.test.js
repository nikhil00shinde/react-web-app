/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Empty",()=>{
  it("test one",()=>{
    cy.visit("http://localhost:3000/")

    cy.contains("Learn Testing and Dev").should("exist")

    cy.get("p").should(($div)=>{
      
      expect($div.get(0).innerText).contains("Edit")
    })
    cy.log("adfaesf")
    cy.log(cy.get("p"))
    cy.log("adfaesf")

    cy.get("div.App-header").should("not.exist")
    cy.location('host') 
    cy.location().should((loc) => {
      expect(loc.hash).to.eq('')
      expect(loc.host).to.eq('localhost:3000')
      expect(loc.hostname).to.eq('localhost')
      expect(loc.href).to.eq(
        'http://localhost:3000/'
      )
     expect(loc.origin).to.eq('http://localhost:3000')
      expect(loc.port).to.eq('3000')
      expect(loc.protocol).to.eq('http:')
    })



  })
})