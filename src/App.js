import React, {useCallback, useEffect, useState} from 'react';

function App() {
  
  const memoizedFunction = useCallback(() => {
  
  }, []);
  
  const generalFunction = () => {
  
  };
  
  const forceReRender = useForceReRender();
  
  useEffect(() => {
    console.log('The memoizedFunction is changed');
  }, [memoizedFunction]);
  
  useEffect(() => {
    console.log('The generalFunction is changed');
  }, [generalFunction]);
  
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
