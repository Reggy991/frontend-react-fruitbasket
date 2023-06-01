import React from 'react';

function Fruit({name, counter, setCounter}) {

    const minusFruit = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const addFruit = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="fruit">
            <h2>{name}</h2>
            <div className="fruit-button">
            <button onClick={minusFruit}>-</button>
            <span>{counter}</span>
            <button onClick={addFruit}>+</button>
            </div>
        </div>
    )
}

export default Fruit;