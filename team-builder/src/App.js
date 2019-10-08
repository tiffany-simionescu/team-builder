import React, {useState} from 'react';
import './App.css';

import Form from './components/Form.js';
import TeamMembers from './components/TeamMembers.js';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Tiffany Simionescu",
      email: "tiffany.simionescu@gmail.com",
      role: "Full Stack Web Developer"
    }
  ]);

  const addTeamMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Teammates!</h1>
        <Form addTeamFn={addTeamMember} />
        <TeamMembers memberList={teamMembers} />
      </header>
    </div>
  );
}

export default App;
