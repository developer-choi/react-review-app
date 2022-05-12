import React, {useCallback, useEffect, useState} from 'react';

function App() {
  
  const forceReRender = useForceReRender();
  
  const [state1] = useState(0);
  
  console.log('re-rendering');
  
  const [state2] = useState(() => {
    console.log('initial state 2');
    return 2;
  });
  
  useEffect(() => {
    console.log(state1);
    console.log(state2);
  });
  
  return (
    <button onClick={forceReRender}>Force Re-render</button>
  );
}

function useForceReRender() {
  const [, setBool] = useState(false);
  return useCallback(() => {
    setBool(bool => !bool);
  }, []);
}

export default App;
