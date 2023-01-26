import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if(id === '') {
      alert("아이디를 입력하세요.");
    }
    if(pw === '') {
      alert("비밀번호를 입력하세요.")
    }
  }

  const handleIdInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디: <input type = "text" onChange={handleIdInput}/>
      </label>
      <br/>
      <label>
        비밀번호: <input type = "text" onChange={handlePasswordInput}/>
      </label>
      <br/>
      <button type="submit">로그인</button>
    </form>
  );
}
  
  export default App;