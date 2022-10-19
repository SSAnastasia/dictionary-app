import React, {useState} from "react";
import './App.css';
import Results from "./Results";
import axios from "axios";

export default function App() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  
  function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event){
    event.preventDefault();
     
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
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
          id = "form"
        role = "search"
        onSubmit = {search}
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
      <Results results={results} />
      </div>

        </div>

      </header>
    </div>
  );
}


