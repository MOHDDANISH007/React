import React, { memo, useReducer, useRef } from "react";

const ReducerHook = () => {
    const Reffere = useRef(0)

  // Initial state
  const initialState = {
    count: 0,
    name: "John",
    age: 25,
    height: 5.8,
    weight: 60,
    increment : 2,
    decrement : 2
  };

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.increment }; // Increment the state
      case "DECREMENT":
        return { ...state, count: state.count - state.decrement }; // Decrement the state
      case "RESET":
        return { ...state, count: 0 }; // Reset the state to 0
      default:
        return state; // Return the current state for unknown actions
    }
  };

  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-5xl ">Hello, I am Reducer</h1>

      <div>
        {/* Access count from the state object */}
        <h1 className="text-5xl text-center">{state.count}</h1>
        <div className="flex justify-center items-center mt-12">
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>

        <p className="text-2xl">renderCount {Reffere.current++} times</p>
      </div>
    </div>
  );
};

export default memo(ReducerHook);
