import React from "react";
import { mount } from "enzyme";
import Pizza from "../Pizza";

test("should contains all ingredients", () => {
  const ingredients = ["champinones", "tomate", "mozzarella", "pineapple"];
  const wrapper = mount(<Pizza ingredients={ingredients} />)
  ingredients.forEach(ingredients => {
    expect(wrapper.text().toMatch('Pizza'))
  })
});
