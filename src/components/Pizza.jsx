import React from "react";
import PropTypes from "prop-types";

const Pizza = ({ ingredients }) => {
  return (
    <>
      <h1>Pizza</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
};

export default Pizza;
