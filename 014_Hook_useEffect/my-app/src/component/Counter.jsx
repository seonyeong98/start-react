import React, {useState, useEffect} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(false)

    const countUp =(e)=>{
        setCount(count+1)
    }

    useEffect(()=>{
        if(bool){
            if(count % 2 == 0){
                alert('홀수')
            }else{
                alert('짝수')
            }
        } 
        setBool(true) //useEffect가 실행되면 true로 바꿈
    },[count]) //변수 count가 변할 때마다 체크하겠다.  변수 여러개 체크 가능

  return (
    <>
    {<div>{count}</div>}
    <button onClick={countUp}>up!</button>
    </>
  )
}