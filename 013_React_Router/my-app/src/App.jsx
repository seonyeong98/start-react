import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/one">one</Link>
        <Link to="/two">two</Link>
        <Link to="/three">three</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='nyeong' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          <Route path="nyeongone/" element={ThreeIndex}/>
          <Route path="nyeongtwo/" elemnet={ThreeOne}/>
          <Route path="nyeongthree/" element={ThreeTwo}/>
        </Route>
        <Route></Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
  const location = useLocation()
  console.log(location)
  return <h1>hello blog</h1>
}

function ThreeIndex(){
  return <h1>hello Blog</h1>
}

function ThreeOne(){
  return <h1>hello Blog</h1>
}

function ThreeTwo(){
  return <h1>hello Blog</h1>
}

export default App;