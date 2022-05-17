import React, {useCallback, useMemo, useState} from 'react';

function App() {
  
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);
  const [c, setC] = useState(10000);
  
  const memoizedValue = useMemo(() => {
    console.log('Called the useMemo callback');
    return a + b;
  }, [a, b]);
  
  const increaseA = useCallback(() => {
    setA(prevState => prevState + 1);
  }, []);
  
  const decreaseB = useCallback(() => {
    setB(prevState => prevState - 1);
  }, []);
  
  const decreaseC = useCallback(() => {
    setC(prevState => prevState - 100);
  }, []);
  
  return (
    <>
      <h2>a = {a}</h2>
      <h2>b = {b}</h2>
      <h2>c = {c}</h2>
      <h2>memoizedValue = {memoizedValue}</h2>
      <button onClick={increaseA}>Increase A</button>
      <button onClick={decreaseB}>decrease B</button>
      <button onClick={decreaseC}>decrease C</button>
    </>
  );
}
export default App;
