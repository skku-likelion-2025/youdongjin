import { useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event)=> setKeyword(event.target.value)
  useEffect( ()=>{
    console.log("i run only once");
  },[]);
  useEffect(()=>{
      console.log("i run when keyword changes",keyword);
  },[keyword]);
  useEffect(()=>{
      console.log("i run when counter changes",keyword);
  },[counter]);
  useEffect(()=>{
      console.log("i run when keyword&counter changes",keyword);
  },[keyword,counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
function Hello(){
  useEffect(()=>{
    console.log("hi :)");
    return () => console.log("bye :(");
  },[]);
  return <h1>Hello</h1>
}
function Hello2(){
  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    };
  },[]);
}
function App2(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=>!prev);
  return(
    <div>
      {showing? <Hello2 />: null}
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
    </div>
  )
}
export default App2;
