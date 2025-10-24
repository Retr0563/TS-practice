import { useReducer } from "react";
import reducer from "./reducer";
const Counters = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Counter: {state.count} </h3>
      <button onClick={() => dispatch({ type: "Increment" })}> + </button>
      <button onClick={() => dispatch({ type: "Decrement" })}> - </button>
    </div>
  );
};
export default Counters;
