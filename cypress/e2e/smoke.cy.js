describe("Smoke Test", () => {
  it("Makes sure that the welcome message comes up", () => {
    cy.visit("http://localhost:1234").contains("Hello World!");
  });
});
