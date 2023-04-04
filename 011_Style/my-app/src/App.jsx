import React from "react";
import styled, {css} from "styled-components";


const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`
const UniAfter = styled.div`
    &:after {
    color: orange;
    content: "!!";
}`


const App = () => {
	return (
    <>
    <Three>Lorem Ipsum dolor</Three>
    <UniAfter>style style style</UniAfter>
    </>
	);
};

export default App;