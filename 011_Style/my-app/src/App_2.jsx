import {react} from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`

const ContentTwo = styled.div`
  color: red;
`

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`

function App(){
  return(
    <div>
      <ContentOne>hello world1</ContentOne>
      <ContentTwo>hello world2</ContentTwo>
      <ContentThree>hello world3</ContentThree>
    </div>
  );
}

export default App;