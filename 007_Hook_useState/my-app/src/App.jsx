import { useState } from "react";

function App() {

  //방법1
  // const [like, setLike] = useState(0);
  // let heart = like%2  === 0 ? '❤️' : ''

  // function clickLike() {
  //     setLike(like + 1); //like = like + 1
  //     console.log(like);
  // }

  //방법2
  const [like, setLike] = useState(false);
  let heart = like ? '❤️' : ''

  

  function clickLike() {
    if(like){
      setLike(false)
    } else {
      setLike(true)
    }
    //setLike(!like)
  }
  

  return (
    <div>
      <button onClick={() => setLike(!like)}>like</button>
      <span>{heart ? heart : ''}</span>
    </div>
  );
}
export default App;