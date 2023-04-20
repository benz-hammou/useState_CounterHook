import React, { useState } from 'react';
import '../App.css';

function Count() {
    const [count, setCount] = useState(0);

    function decrement() {
        if (count >= 1) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Count