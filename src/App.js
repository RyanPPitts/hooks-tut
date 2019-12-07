import React, { useState } from 'react'
import './App.css'


function Todo({todo, index, completeTodo}){
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    className="todo">
      { todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
          Complete
        </button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSummit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSummit}>
      <input type='text' 
      className='input' 
      value={value} 
      placeholder='Add Todo'
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react hooks',
      isCompleted: false
    },
    {
      text: 'Learn about Gasby',
      isCompleted: false
    },
    {
      text: 'Learn about D3',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const NewTodos = [...todos, { text }]
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
