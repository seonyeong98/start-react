import { useState } from "react"
import One from "./Componenets/One"
import Two from "./Componenets/Two"
import Three from "./Componenets/Three"

function ContentsContainer({listName}){
    if(listName === 'one'){
        return <One/>
    } else if(listName === 'two'){
        return <Two/>
    } else if(listName === 'three'){
        return <Three/>
    }
    return null
}

function App(){
    const [listName, setListName] = useState('one') //초기값 one
    const handleCheckId = (e) => { //event가 들어오면 화살표 함수를 setListName으로 값을 변경
        setListName(e.target.id)
    }

    return (
        <>
            <nav>
                <ul>
                    <li
                        id ='one'
                        style = {listName === 'one'? {color:'red'}: {color:'black'}}
                        onMouseOver = {handleCheckId}
                    >One
                    </li>
                    <li
                        id ='two'
                        style = {listName === 'two'? {color:'red'}: {color:'black'}}
                        onMouseOver = {handleCheckId}
                    >Two
                    </li>
                    <li
                        id ='three'
                        style = {listName === 'three'? {color:'red'}: {color:'black'}}
                        onMouseOver = {handleCheckId}
                    >Three
                    </li>
                </ul>
            </nav>
            <ContentsContainer listName={listName}/>
        </>
    )
}

export default App;