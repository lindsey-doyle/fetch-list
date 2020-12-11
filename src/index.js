import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState(null);

  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  // Function to make api request
  const fetchData = async () => {
    // make request
    const response = await axios.get(apiURL).then(response => {
      console.log(response.data);
      // set state variable to request data
      setBooks(response.data);
    }, error => {
      console.log(error);
    });
  };

  return (
    <div className="App">

      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} >Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
{books && 
        <div className="book">
          <h3>Book Number</h3>
          <h2>Book Name</h2>
          <div className="details">
            <p>👨: Author/Authors</p>
            <p>📖: Number of pages</p>
            <p>🏘️: Book Country</p>
            <p>⏰: Release date</p>
          </div>
        </div>
}
      </div>

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
