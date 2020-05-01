import React, { useState, useEffect } from "react";
import "./search.css";

import SearchPage from './components/Search';

const initList={
  Name:"",
  followers:"",
  following:"",
  public_repos:""
}  

function App() {

  const [list,setList]=useState(initList)

  async function getGitRecord(val){

    try {
      const result=await fetch(`https://api.github.com/users/${val}`);
      const json= await result.json();
      setList({
        Name:json.name,
        followers:json.followers,
        following:json.following,
        public_repos:json.public_repos
      })
    } catch (error) {
      console.log(error);
      
    }

  }


  function handleOnChange(e){
    if(e.key === "Enter"){
      getGitRecord(e.target.value);
      
    }
    
  }



    return (
      <div className="App">
        <header className="App-header">
          <h1>GITHUB User Name details</h1>
            <SearchPage
            onKeyPress={handleOnChange}
            />
            <table className="table table-hover">
              <thead>
              <tr>
                <th  scope="col">Name</th>
                <th scope="col">followers</th>
                <th scope="col">following</th>
                <th scope="col">public_repos</th>
              </tr>
              </thead>
              <tbody>
                <tr  className="table-active">
                  <td>{list.Name}</td>
                  <td>{list.followers}</td>
                  <td>{list.following}</td>
                  <td>{list.public_repos}</td>
                </tr>
                
              </tbody>
            </table>

        </header>
      </div>

  );
}

export default App;
