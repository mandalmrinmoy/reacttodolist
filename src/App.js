import './App.css';
import React,{useState} from 'react';
import TodoInput from './components/todoinput';
import Todolist from './components/todolist';

function App() {
  // add the task/item
  const [listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    if(inputText !=='')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    //delete the task/item
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            // delete the items
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
    
  
}

export default App;
