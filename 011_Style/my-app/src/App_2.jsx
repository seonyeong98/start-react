import styled from "styled-components"

//css-in-js, 글로벌 스타일 적용 가능
//styled.div div 태그에 스타일을 적용하겠다는 뜻
const ContentDiv = styled.div`
  margin: 40px;
  border: 1px solid black;
`

const ContentH2 = styled.h2`
  color: ${({name})=>(name === 'hello'? 'red' : 'black')};
  width: 20px;
  margin: 0 auto;
  text-align: center;
`

function App() {
  return (
    <>
    <ContentDiv>
      <ContentH2 name='hello'>Q&A</ContentH2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         In quaerat modi labore laborum, nesciunt, molestias delectus 
         doloribus iste et rem quis! Aliquid ratione alias perferendis omnis,
         obcaecati maxime dolorem ad?</p>
    </ContentDiv>
    </>
  );
}

export default App;