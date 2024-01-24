import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState();

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h4 className="bg text-black p-3 rounded">{count}</h4>
        <button
          className="btn btn-warning my-2 "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-warning my-2 mx-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
            type="text"
            className="form-control text-black rounded text-center my-4 p-3 mx-8"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            placeholder="Enter amount"
         />

        <button
          className="btn btn-success my-4"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
