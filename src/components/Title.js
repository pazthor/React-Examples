import styled from 'styled-components'
// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// Use Title and Wrapper like any other React component – except they're styled!


export const Buttons = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  `;

  export const TomatoButton = styled(Buttons)`
  color: tomato;
  border-color: tomato;
  `;