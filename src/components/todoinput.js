import { useState } from "react";

function TodoInput(props) {
    const [inputText, setInputText] = useState('');
    return (
        <div className="inpur-container">
            {/* Input the task */}
            <input type="text" className="input-box-todo" placeholder="Eneter Your Todo"
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value)
                }}
            />
            <button className="add-btn" onClick={() => {
                // Add the task
                props.addList(inputText)
                setInputText("")
            }}>+</button>
            <div>{inputText}</div>
        </div>
    )
}
export default TodoInput