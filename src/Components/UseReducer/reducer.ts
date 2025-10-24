type State = { count: number };
type Action = { type: "Increment" } | { type: "Decrement" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 5 };
    case "Decrement":
      return { count: state.count - 5 };

    default:
      return state;
  }
};

export default reducer;
