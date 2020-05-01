import React,{useState,useEffect} from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const [count,setCount]=useState(0);
  const [time,setTime]=useState(Date());

  useEffect(()=>{
    const time=setInterval(() => {
      return setTime(Date());
    }, 1000);
    
    return ()=>{
      clearInterval(time);
    }


  });


  function onClickHandle(e){
    //console.log(e.target.name);
    if(e.target.name === "plus"){
      return setCount(count +1);
    }

    if(e.target.name === "minus" && count > 0){
      return setCount(count -1);
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld text="Start Count increament"/>
        <h3>Count: {count}</h3> 
        <button onClick={onClickHandle} name="plus">Increament(+)</button>
        <button onClick={onClickHandle} name="minus">Decrement(-)</button>
        <h3>Time : {time}</h3>

      </header>
    </div>
  );
}

export default App;
