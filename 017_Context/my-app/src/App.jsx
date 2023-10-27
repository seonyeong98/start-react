import React, {createContext} from "react";

const UserInfo = createContext({ name: "seonyeong", id:"garyIsFree"})

const App = () => {
  return (
    <HelloLicat value={{name:"gary", id: "garyIsFree"}} />
  );
};

const HelloLicat = ({name, id}) => {
  return(
    <UserInfo.Consumer>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{id, name}}/>
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = ({name, id}) => {
  return(
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  )
}
export default App;