import React, {useState} from "react";
import './App.css';
import Result from "./Result";
import axios from "axios";

export default function App() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState({});
  
  function handleResponse(response){
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event){
    event.preventDefault();
     
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <h1>Search&Find📖</h1>
          <div className = "searchingForm">
          <form className = "d-flex" 
        role = "search"
         >
        <input className = "form-control me-2"
        type="search" 
        placeholder="What are you looking for... " 
        onChange={handleKeywordChange}/>
        <button className = "btn btn-outline-success" type="submit" id="searching"
        onSubmit = {search}>
          Search
          </button>
      </form>
      <Result results={result} />
      </div>

        </div>

      </header>
    </div>
  );
}


