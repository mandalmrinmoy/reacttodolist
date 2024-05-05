import React from 'react';
function Todolist(props){
    return(
        // items are deposited here
        <li className="list-item">{props.item}
        <span clasName="icons">
        <i className="fa-solid fa-trash" 
        onClick={e=>{
            // items are deleted here
            props.deleteItem(props.index)
        }}></i>
        </span>
        </li>
    )
}
export default Todolist