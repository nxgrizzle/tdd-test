import React from "react";
import { mount } from "enzyme";
import App from "../../src/App";

describe("App", () => {
  it("renders hello world", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(".hello").text()).toBe("Hello World!");
    expect(wrapper.find(".counter").text()).toBe("0");
    expect(wrapper.find(".button").text()).toBe("Increment");
  });
  it("increments the counter when the button is clicked", () => {
    const wrapper = mount(<App />);
    wrapper.find(".button").simulate("click");
    expect(wrapper.find(".counter").text()).toBe("1");
  });
  it("decrements the counter when the button is clicked", () => {
    const wrapper = mount(<App />);
    wrapper.find(".decrement").simulate("click");
    expect(wrapper.find(".counter").text()).toBe("-1");
  });
});
