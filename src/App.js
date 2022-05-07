import {useEffect, useState} from 'react';

function App() {
  
  const [current, setCurrent] = useState(() => new Date());
  
  useEffect(() => {
    console.log('render');
  });
  
  useEffect(() => {
    setTimeout(() => {
      setCurrent(() => new Date());
    }, 1000);
  }, [current]);
  
  return (
    <h1>
      {current.toLocaleTimeString()}
    </h1>
  );
}

export default App;
