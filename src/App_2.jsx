function 개인정보() {
  return(
    <section>
      <h2>개인정보</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam posuere, justo ac dignissim convallis, felis diam rhoncus arcu, congue posuere augue mauris quis metus.
          Sed a velit eget purus vestibulum blandit nec vitae sem.
        </p>
    </section>
  )
}

function 자격증() {
  return(
    <section>
        <h2>자격증</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam posuere, justo ac dignissim convallis, felis diam rhoncus arcu, congue posuere augue mauris quis metus.
          Sed a velit eget purus vestibulum blandit nec vitae sem.
        </p>
    </section>
  )
}

function 학력() {
  return(
    <section>
      <h2>학력</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam posuere, justo ac dignissim convallis, felis diam rhoncus arcu, congue posuere augue mauris quis metus.
          Sed a velit eget purus vestibulum blandit nec vitae sem.
        </p>
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
      <학력/>
      <개인정보/>
      <자격증/>
    </div> 
  );
}

export default App;
