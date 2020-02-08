import React from "react";
import { mount } from "enzyme";
import Pizza from "../Pizza";

test("should contains all ingredients, aca debe contener el siguiente texto", () => {
  const ingredients = ["champinones", "tomate", "mozzarella", "pineapple"];
  const wrapper = mount(<Pizza ingredients={ingredients} />);
  ingredients.forEach(ingredient => {
    expect(wrapper.text()).toMatch('Pizza');
  });
});
