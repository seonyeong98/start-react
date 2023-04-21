import styled from "styled-components"

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
  return (
    <>
      <CardDiv className={props.className}>
        <h3>{props.value}</h3>
        <hr />
        <div>{props.children}</div>
      </CardDiv>
    </>
  );
};

const SettingCard=()=>{
  return(
    <div>
      <button>초기화</button>
      <button>저장</button>
    </div>
  )
}

const ShareCard=()=>{
  return(
    <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odio quam quos accusamus itaque repellendus iste corporis laborum,
      nostrum eveniet id provident nesciunt repellat ipsa est eos consequuntur!
      Nobis,pariatur molestiae!
    </p>
    <div>
      <button>이미지 저장</button>
      <button>트위터</button>
      <button>페이스북</button>
    </div>
    </>
  )
}

function App() {
  return (
    <>
    {/* 컴포넌트 태그 사이(Card)의 컴포넌트의 값(SettingCard)을 조회하고 싶을 때 props.children 사용*/}
    <Card className="setting" value="챌린지 설정">
      <SettingCard/>
    </Card>
    <Card className="share" value="서비스 공유하기">
      <ShareCard/>
    </Card>
    </>
  );
}
export default App;