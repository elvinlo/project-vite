import { useState } from 'react';
import Modal from './components/Modal.tsx'

function App() {
  // DONE: fix the state of this `todos`
  const [todos, setTodos] = useState([
    { id: Date.now(), text: 'Do the dishes.' }, // key using timestamps
    { id: Date.now() + 1, text: 'Finish this project.' },
  ]);

  // DONE: make components needed for TODO
  const [inputItem, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItem.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputItem,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handleDelete = (id) => {
    // const element = document.getElementById(id);
    // if (element?.parentNode){
    //   element.parentNode.removeChild(element);
    // }
    setTodos(todos.filter(todo => todo.id !== id));
  }

  

  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '0 auto', // centering
      padding: '20px', // padding
      fontFamily: 'Arial'
    }}>
      <h1>To do</h1>
      <hr />

      <ul style={{ listStyleType: 'none'}}>
        {/* DONE: use `map` to render tasks from `todos` remember about `keys` prop! */}
        {todos.map((todo, index) => (
          <li key={`${todo.id}-${todos.length}`} style={{ 
            marginBottom: '10px', 
            fontSize: '20px', 
          }}>
            <input 
              type="checkbox" 
              onChange={() => handleDelete(todo.id)} 
              style={{ marginRight: '20px', transform: 'scale(1.5)', transformOrigin: 'center' }}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      <form
        style={{
          marginTop: '60px',
          display: 'flex',
        }}
        onSubmit={handleSubmit}
      >
        {/* DONE: lift input text into a state so you can
        handle it and add to `todos` array */}
        <input 
          value={inputItem}
          onChange={handleInputChange}
          style={{ 
            marginRight: '7px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
            width: '580px',
            fontSize: '18px',
          }}
        />
        <button type='submit' 
          style={{
            fontSize: '18px',
            width: '200px',
            border: '1px solid #555',
            borderRadius: '5px',
            padding: '5px',
          }}
        >
          Create Task
        </button>
      </form>

      <Modal />
    </div>
  )
}

export default App
