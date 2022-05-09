function App() {
  
  const isLoggedIn = false;
  
  return (
    <h1>
      {isLoggedIn ? 'Welcome' : 'Please sign up'}
    </h1>
  );
}

export default App;
