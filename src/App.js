import React, {useState} from "react";
import './App.css';
import Results from "./Results";
import axios from "axios";

export default function App(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  
  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search(){
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }
  if(loaded){
  return (
    <div className="App">
      
        <div className = "container">
          <h1>Search&Find📖</h1>
          <div className = "searchingForm">
          <form className = "d-flex" 
          id = "form"
        role = "search"
        onSubmit = {handleSubmit}
         >
        <input className = "form-control me-2"
        type="search" 
        placeholder="What are you looking for... " 
        onChange={handleKeywordChange}/>
        <button className = "btn btn-outline-dark" type="submit" id="searching"
        onSubmit = {search}>
          Search
          </button>
      </form>
      <div className="hint">
        (sun, sea, wine...)
      </div>
      <Results results={results} />
      </div>

        </div>
    </div>
  );
  }else{
    load();
    return "Loading";
  }
}


