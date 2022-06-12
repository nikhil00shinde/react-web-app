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
     cy.visit("https://codedamn.com/playground/20vgjpQgTAVcZEfTGubF6")
    //  cy.pause()

    cy.log("Checking for test in right sidebar")
    // cy.get(".command-message-text").then((d)=>{
    //    cy.log(d)
    // })
    // cy.get("").then((el)=>{
    //   expect(el.text()).to.eg("...")
    // })
    // cy.get("").should("contain.text","e")'



    cy.contains("Saved").should("exist")
    cy.debug() 
    cy.get(".xterm-screen > canvas").eq(3).then((l)=>{
      cy.log(l)
    })


    // cy.contains("Drop files from your device to upload.").should("have.text")
    // freeze your js thread

  })

  it.only("New program to test",()=>{
    // 
    cy.visit("https://codedamn.com/playground/20vgjpQgTAVcZEfTGubF6")
    //  cy.pause()

    cy.log("Checking for test in right sidebar")
    cy.contains("Saved").should("exist")
    cy.contains("Manage Collaborators").should("exist")
    
    cy.wait(1000*10).then(()=>{
      cy.get("[data-testid=xterm]")
      .type("{ctrl}{c}")
      .type("touch test1.js{enter}");
      cy.contains("test1.js").rightclick();

      cy.contains("Rename File").click();
      cy.get('[data-fullid="test1.js"]')
      .type("{selectAll}{backspace}")
      .type("nikhil.js{enter}")
    })
  })



})