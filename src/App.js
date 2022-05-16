import React, {useCallback, useRef} from 'react';

function App() {
  
  const inputRef = useRef(null);
  
  const handleClick = useCallback(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <>
      <input ref={inputRef} placeholder="Please enter your name"/>
      <button onClick={handleClick}>Force the input</button>
    </>
  );
}
export default App;
