/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe("Basic Authenticated Testing",()=>{

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pY2toaWxsIiwiX2lkIjoiNjI5ZTM2MjEwOWJhMTEwMDA5MWY3YjYyIiwibmFtZSI6Ik5pY2sgSGlsbCIsImlhdCI6MTY1NDUzNTcxNSwiZXhwIjoxNjU5NzE5NzE1fQ.I7fcVwq7udWDyz41CyLaNCu4pPOlSoUPA3-rf0Ty2DM'
  
  before(()=>{
    cy.then(()=>{
      window.localStorage.setItem("__auth__token",token)
    })
  })


  beforeEach(()=>{
    // bootstrapping external things
    cy.viewport(1280,720)
    cy.visit("https://codedamn.com/")
  })


  it("Should pass",()=>{
     cy.visit("https://codedamn.com/dashboard")
     cy.get('[data-content="playgrounds"]').click()
     cy.get("#playgrounds a").eq(0).click()
     cy.get('[data-testid="create-snippet-btn"]').click()

  })



})