function 개인정보({name, phone, github}) {
    //console.log(props);
    console.log("구조분해 할당: ", name, phone, github );
  return(
    <section>
      <p>개인정보</p>
      <p>이름 : {name}</p>
      <p>전화번호 : {phone}</p>
      <p>github : {github}</p>
    </section>
    // <section>
    //     <p>개인정보</p>
    //     <p>이름 : {props.name}</p>
    //     <p>전화번호 : {props.phone}</p>
    //     <p>github : {props.github}</p>
    // </section>
  )
}

function 자격증과학력({title, contents}) {
  return(
    <section>
        <h2>{title}</h2>
        <p>{contents}</p>
    </section>
  )
}



function 수상경력() {
  return(
    <section>
      <h2>수상경력</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam posuere, justo ac dignissim convallis, felis diam rhoncus arcu, congue posuere augue mauris quis metus.
          Sed a velit eget purus vestibulum blandit nec vitae sem.
        </p>
    </section>
  )
}

function 경력() {
  return(
    <section>
      <h2>경력</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam posuere, justo ac dignissim convallis, felis diam rhoncus arcu, congue posuere augue mauris quis metus.
          Sed a velit eget purus vestibulum blandit nec vitae sem.
        </p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <수상경력/>
      <경력/>
      <자격증과학력
        title='자격증'
        contents='자격증 내용'/>
      <자격증과학력
        title='학력'
        contents='학력 내용'/>
      <개인정보 name='박선영' github='seonyeong'phone='01012341234'/>
    </div> 
  );
}

export default App;
