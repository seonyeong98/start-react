import { useState, useMemo, useRef } from 'react'

const App = () => {
  return (
    <HelloLicat value={{name:"gary", id: "garyIsFree"}} />
  );
};

const HelloLicat = (props) => {
  const id = props.value.id;
  const name = props.value.name;
  return(
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{id, name}}/>
    </div>
  );
};

const HelloLicatTwo = (props) => {
  const id = props.value.id;
  const name = props.value.name;
  return(
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  )
}
export default App;