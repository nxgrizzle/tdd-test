import React from "react";
import { mount } from "enzyme";
import App, {
  RestaurantForm,
  RestaurantRow,
  RestaurantTable,
} from "../../src/App";

describe("RestaurantForm", () => {
  const addRestaurant = jest.fn();
  const wrapper = mount(<RestaurantForm addRestaurant={addRestaurant} />);
  it("has a button to add a restaurant", () => {
    expect(wrapper.find("[data-testid='addRestaurantButton']")).toHaveLength(1);
  });
  it("does not have a button to save a restaurant", () => {
    expect(wrapper.find("[data-testid='saveRestaurantButton']")).toHaveLength(
      0
    );
  });

  it("has a button to add a restaurant", () => {
    expect(wrapper.find("[data-testid='addRestaurantButton']")).toHaveLength(1);
    wrapper.find("[data-testid='addRestaurantButton']").simulate("click");
    expect(wrapper.find("[data-testid='saveRestaurantButton']")).toHaveLength(
      1
    );
  });
  it("calls addRestaurant when save is clicked and hides input", () => {
    wrapper.find("[data-testid='addRestaurantButton']").simulate("click");
    wrapper.find("[data-testid='newRestaurantName']").simulate("change", {
      target: { value: "Sushi Place" },
    });
    wrapper.find("[data-testid='saveRestaurantButton']").simulate("click");
    expect(addRestaurant).toHaveBeenCalledWith("Sushi Place");
    expect(wrapper.find('[data-testid="newRestaurantName"]')).toHaveLength(0);
  });
});

describe("RestaurantRow", () => {
  it("renders text given", () => {
    const wrapper = mount(<RestaurantRow restaurant="Sushi Place" />);
    expect(wrapper.find("[data-testid='restaurantName']").text()).toBe(
      "Sushi Place"
    );
  });
});

describe("RestaurantTable", () => {
  it('renders "No restaurants"', () => {
    const wrapper = mount(<RestaurantTable restaurants={[]} />);
    expect(wrapper.text()).toBe("No restaurants");
  });

  it("renders a single restaurant", () => {
    const wrapper = mount(
      <RestaurantTable restaurants={[{ id: 1, name: "Sushi Place" }]} />
    );
    expect(wrapper.find("[data-testid='restaurantName']")).toHaveLength(1);
  });

  it("renders multiple restaurants", () => {
    const wrapper = mount(
      <RestaurantTable
        restaurants={[
          { id: 1, name: "Sushi Place" },
          { id: 2, name: "Pizza Place" },
        ]}
      />
    );
    expect(wrapper.find("[data-testid='restaurantName']")).toHaveLength(2);
  });
});
