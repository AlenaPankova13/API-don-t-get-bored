import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    getAdvice();
  }, [])

  const getAdvice = async () => {
    const response = await fetch (`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
  }
  
  return (
    <div className='container'>
        <h1>Click the button and get advice on what to do when you're bored!</h1>

        <h3>"{advice}!"</h3>

        <button onClick={getAdvice}>Click me</button>
    </div>
  );
}

export default App;
