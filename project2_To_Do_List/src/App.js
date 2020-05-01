import React, { useState, useEffect } from "react";
import "./App.css";
import InputItem from "./components/InputTxt";
import itemList from "./Hooks/UseList";
import ToDoItem from './components/ListItem';

let initList=[];
function App() {
  const [textVal, setTextVal] = useState(null);
  const item=itemList(initList);

  function onchangeHandle(e) {
    //console.log(e.target.value);
    setTextVal(e.target.value);
  }

  function SaveItem(){
    item.saveItem(textVal); 
  }

  function removeItem(i){
    //console.log(i);
    item.removeItem(i);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST Using React Js</h1>
        <InputItem onChange={onchangeHandle} onClick={()=>{
          SaveItem();
          setTextVal("");
        }} 
        value={textVal}

        />
        <h3>Item Lists</h3>  
        <ul>
        <ToDoItem 
        item={item}
        onClick={removeItem}  
        />
        </ul>

      </header>
    </div>
  );
}

export default App;
