import React, {useState} from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
