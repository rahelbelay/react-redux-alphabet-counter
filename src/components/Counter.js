import React from 'react';

function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset

}) {
    console.log(handleReset)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;