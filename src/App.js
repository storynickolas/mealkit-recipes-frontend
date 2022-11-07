import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])
  const [page, setPage] = useState()
  const [test, setTest] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:9292/recipes`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
  }, [test])

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${page}`)
      .then((r) => r.json())
      .then((data) => setSpecial(data))
  }, [page])

  const handleClick = (item) => {
    setPage(item.id)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
        <div>
          {page && special.ingredients ? <h2>{special.name}</h2> : ''}
         {page && special.ingredients ? special.ingredients.map((item) => 
            <li key={item.id + item.name}>{item.name}</li>
          ) : ''}
        </div>
        {
        options.map((item) => 
        <div key={item.name}>
          <button onClick={() => handleClick(item)}><h4 >{item.name}</h4></button>
          {/* <h2 >{item.cook_time}</h2>
          <a href={item.instructions}>{item.name}</a> */}
        </div>
        )}
        <div>
    
        </div>
        
      </header>
    </div>
  );
}

export default App;
