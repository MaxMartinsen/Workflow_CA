describe("Registration Test", () => {
    it("should allow a user to register", () => {
      // 1. Load the page with the user registration form
      cy.visit("../../index.html");
  
      // 2. The registration modal should be visible upon page load
      cy.get('#registerModal').should('be.visible');
  
      // 3. Fill in the registration form
      cy.get('#registerName').type('Exampel');
      cy.get('#registerEmail').type('Exampel@noroff.no');
      cy.get('#registerPassword').type('Password1234');
      cy.get('#registerAvatar').type('http://example.com/avatar.jpg');
  
      // 4. Click the 'Create Profile' button specifically inside the modal
      cy.get('#registerModal .btn.btn-success').click();
      
      // Add any additional assertions or interactions as needed
    });
  });