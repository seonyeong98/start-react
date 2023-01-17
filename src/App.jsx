import Certificate from "./Components/Certificate";
import Privacy from "./Components/Privacy";
import Awards from "./Components/Awards";
import Career from "./Components/Career";

function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <Privacy 
        name='박선영' 
        github='seonyeong'
        phone='01012341234'
      />
      <Certificate
        title='자격증'
        contents='자격증 내용'
      />
      <Certificate
        title='학력'
        contents='학력 내용'
      />
      <Career/>
      <Awards />
    </div> 
  );
}

export default App;
