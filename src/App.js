import React, {useCallback, useEffect, useState} from 'react';

function App() {
  
  const [clickCount, setClickCount] = useState(0);
  
  const addCount = useCallback(() => {
    setClickCount(prevState => prevState + 1);
  }, []);
  
  const forceReRender = useForceReRender();
  
  useEffect(() => {
    console.log('useEffect (with deps) -- clickCount', clickCount);
  }, [clickCount]);
  
  useEffect(() => {
    console.log('useEffect (without deps)-- clickCount', clickCount);
  });
  
  return (
    <>
      <button onClick={forceReRender}>Force Re-render</button>
      <button onClick={addCount}>Add count</button>
      <span>clockCount : {clickCount}</span>
    </>
  );
}

function useForceReRender() {
  const [, setBool] = useState(false);
  return useCallback(() => {
    setBool(bool => !bool);
  }, []);
}

export default App;
