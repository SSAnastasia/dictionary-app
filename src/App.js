
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "container">
          <h1>Search&Find📖</h1>
          <div className = "searchingForm">
          <form class = "d-flex" 
        role = "search" >
        <input class = "form-control me-2"
        type="search" 
        placeholder="What are you looking for... " 
        />
        <button class = "btn btn-outline-success" type="submit" id="searching">
          Search
          </button>
      </form>
      </div>


        </div>

      </header>
    </div>
  );
}


