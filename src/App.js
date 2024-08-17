import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="App">
      {!clicked ? (
        <button onClick={handleClick}>Click here for the link!</button>
      ) : (
        <h1>Welcome!</h1>
      )}
    </div>
  );
}

export default App;
