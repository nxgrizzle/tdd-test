const restaurantName = "Sushi Place";
describe("adding a restaurante", () => {
  it("displays the restaurant in the list", () => {
    cy.visit("http://localhost:1234");
    cy.get('[data-testid="newRestaurantName"]').should("not.exist");
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveRestaurantButton"]').click();
    cy.contains(restaurantName);
    cy.get('[data-testid="newRestaurantName"]').should("not.exist");
  });
});
