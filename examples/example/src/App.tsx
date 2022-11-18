import React from 'react';
import './App.css'
import { useToast } from 'edlesstoast';


function App() {
  const toast = useToast();
  return (
    <div className="App">
      <div className='ExampleText'>
        <h2>This is an example of a toast</h2>
        <button onClick={() => toast.openToast({ color: '#5cb85c', text: 'This is a toast!' })}>Open Toast</button>
      </div>
    </div>
  );
}

export default App;
