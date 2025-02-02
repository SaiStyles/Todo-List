import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addToDo = () => {
    if (toDo.trim()) {
      setToDos([...toDos, toDo]);
      setToDo('');
    }
  };

  const deleteToDo = (indexToDelete) => {
    setToDos(toDos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => (
          <div key={index} className="todo">
            <div className="left">
              <input type="checkbox" />
              <p>{value}</p>
            </div>
            <div className="right">
              <i onClick={() => deleteToDo(index)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
