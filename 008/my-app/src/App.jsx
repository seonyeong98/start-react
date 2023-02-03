import { useState } from "react";

function App() {
  const [message,setMessage] = useState("Attention here!");

  const handleOnMouseEnter = () => {
    setMessage("hi");
  };

  const handleOnMouseLeave = () => {
    setMessage("bye");
  }



    return (
      <div>
        <p
          onMouseOver={handleOnMouseEnter}
          //onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}>
            마우스를 올려보세요
        </p>
        <div>{message}</div>
      </div>
    );
  }
  
export default App;