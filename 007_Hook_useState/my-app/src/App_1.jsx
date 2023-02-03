import { useState } from "react";

function Resume(props) {
  //useState 변수의 값이 변경될 때마다 페이지를 업데이트 하도록 만들어 주는 것
  // like라는 변수를 선언 후 setLike로 값 변경해줌, useState에 들어가는 재료가 like의 초기값이 됨
  const [like, setLike] = useState(0);
  const [button, setButton] = useState(disabled);

  function clickLike() {
      setLike(like + 1); //like = like + 1
      console.log(like);
  }

  function clicked() {
    console.log("clicked");
    setButton(button)
  }

  return(
      <div>
          <h1>{props.name} 자기소개서</h1>
          <button onClick={clickLike}>like {like}</button>
          <button onClick={clicked}>display {button}</button>
      </div>
  )
}

function App() {
  return (
    <div className="App" name='박선영'>
      <Resume/>
    </div>
  );
}
export default Resume;