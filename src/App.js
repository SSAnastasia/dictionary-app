import React, {useState} from "react";
import './App.css';
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function App(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response){
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }

  function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelsApiKey = "563492ad6f917000010000011721c8bfba1e42fb98f754df04d3cdb7";
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers: headers }).then(handlePexelsResponse)

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
            onSubmit = {handleSubmit}>
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
           <Photos photos={photos} />
           </div>

        </div>
        <footer className="footer">
      This project was created by 
      <a href = "https://www.instagram.com/nastassia_strybajlo/" 
      target="_blank"
      rel="noopener noreferrer"> Anastasiia Strybailo</a>
      Posted on 
      <a href = "https://github.com/shecodesio/dictionary"
      target="_blank"
      rel="noopener noreferrer"> GitHub</a>
    </footer>
    </div>
  );
  }else{
    load();
    return "Loading";
  }
}


