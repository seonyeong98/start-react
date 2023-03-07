function App() {
    return(
        <Hello/>
    );
}

function Hello(props) {
    const name = props.name;
    if(name) {
        return <One name={name}/>
    } else {
        return <Two/>
    }
}

function One(props) { //구조분해할당
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

function Two(props) {
    return (
        <div>
            <h1>name이 입력된 것이 없습니다.</h1>
        </div>
    )
}

export default App;