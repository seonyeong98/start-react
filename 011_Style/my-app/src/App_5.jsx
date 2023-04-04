import style from './app.module.css'
import Test from './Components/Test';

//css특징 마지막에 있는 걸 적용시킨다.
function App() {
  //css 특징 마지막에 있는 것을 적용시킴
  return (
    <div className="App">
      <div className={style.test}>Test 1</div>
      <Test/>
    </div>
  );
}

export default App;