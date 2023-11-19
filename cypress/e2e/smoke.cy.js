describe("Smoke Test", () => {
  it("Makes sure that the welcome message comes up", () => {
    cy.visit("http://localhost:1234").contains("Hello World!");
    cy.get(".counter").contains("0");
    cy.get(".button").contains("Increment");
  });
  it("increments counter on button click", () => {
    cy.visit("http://localhost:1234");
    cy.get(".button").click();
    cy.get(".counter").contains("1");
  });
  it("decrements the counter on button click", () => {
    cy.visit("http://localhost:1234");
    cy.get(".decrement").click();
    cy.get(".counter").contains("-1");
  });
});
