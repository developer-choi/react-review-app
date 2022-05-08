import {useCallback} from 'react';

function App() {
  
  const eventListener = useCallback(() => {
    alert('clicked');
  }, []);
  
  return (
    <h1>
      <button onClick={eventListener}>Click Me</button>
    </h1>
  );
}

export default App;
