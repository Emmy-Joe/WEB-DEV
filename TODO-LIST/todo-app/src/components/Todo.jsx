import { useEffect, useRef, useState } from 'react';
import './Todo.css';

function Todo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    function add() {
        setTodos([...todos, { no: count, text: inputRef.current.value, display: "" }]);
        setCount(count + 1);
        inputRef.current.value = "";
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <>
            <div className="todo">
                <div className="todo-header">TO-DO LIST</div>
                <div className="todo-add">
                    <input type="text" className='todo-input' placeholder='Enter Your Task' ref={inputRef} />
                    <div onClick={add} className="todo-add-btn">ADD</div>
                </div>
                <div className="todo-list">
                    {todos.map(todo => (
                        <div key={todo.no} className="todo-item">
                            {todo.text}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Todo;