import React, {useReducer} from 'react';

function reducer(prevState: {count: number}, action: { type: 'increase' | 'decrease' }) {
  switch (action.type) {
    case 'decrease':
      return {count: prevState.count - 1};
    case 'increase':
      return {count: prevState.count + 1};
    default:
      return prevState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  
  return (
    <>
      <h2>value = {state.count}</h2>
      <button onClick={() => dispatch({type: 'increase'})}>Increase</button>
      <button onClick={() => dispatch({type: 'decrease'})}>decrease</button>
    </>
  );
}
export default App;
