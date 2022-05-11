import React, {useCallback, useState} from 'react';

function App() {
  
  const [name, setName] = useState('');
  
  const handleSubmit = useCallback(event => {
    event.preventDefault();
  
    if (name === '') {
      alert('Please write your name');
    } else {
      alert('Success');
    }
    
  }, [name]);
  
  const handleChange = useCallback(event => {
    setName(event.target.value);
  }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleChange} placeholder="Write your name"/>
    </form>
  );
}

export default App;
