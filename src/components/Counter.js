import React from 'react';


const Counter = ({ count, onDecrement, onIncrement, count1, onChangeNumber, onInput, numberInputted }) => {


    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <br/>
          <h3>Times the increment/decrement buttons have been clicked: {count1}</h3>
          <input type="number" onChange={event => onChangeNumber(event.target.value)} value={numberInputted}></input>
          <button onClick={onInput}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;