import React, { useState } from 'react';


const Count = () => {
    const [count, setCount] = useState(0)

    function decrement() {
        if(count >= 1){
            setCount(prevCount => prevCount - 1)
        }
    }

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <header className="App-header">
            <button onClick={decrement}>-</button>
                <span>{count}</span>
            <button onClick={increment}>+</button>
        </header>
    )
}

export default Count