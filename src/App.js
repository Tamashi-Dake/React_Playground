import "./styles.css";
import { useState, useReducer } from "react";

const Action = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

//useReducer cho counter
function reducer(state, action) {
  switch (action.type) { 
    case Action.INCREMENT:
      return { count: state.count + 1 };
    case Action.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function App() {
  // const [currentValue, setCurrentValue] = useState(0);
  const [input, setInput] = useState("");
  function handleIncClick() {
    dispatch({ type: Action.INCREMENT });
  }
  function handleDecClick() {
    dispatch({ type: Action.DECREMENT });
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <h1>Input</h1>
      <div>
        <input value={input} onChange={handleChange} />
      </div>
      <h1>Counter</h1>
      <div>
        <button id="inc" onClick={() => handleIncClick()}>
          +
        </button>
        {state.count}
        <button id="dec" onClick={() => handleDecClick()}>
          -
        </button>
      </div>
    </div>
  );
}
