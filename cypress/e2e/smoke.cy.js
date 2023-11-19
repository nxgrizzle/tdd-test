describe("Smoke Test", () => {
  it("Makes sure that the welcome message comes up", () => {
    cy.visit("http://localhost:63335").contains("Hello World!");
  });
});
