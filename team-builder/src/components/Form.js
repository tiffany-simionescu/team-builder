import React, {useState} from 'react';

export default function Form(props) {
  const [team, setTeam] = useState({name:"", email:"", role:""});

  const handleChange = evt => {

  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.addTeamFn(team);
    setTeam({name:"", email:"", role:""});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Name" 
          // value={team.name} 
          onChange={handleChange} 
        />

      <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="text" 
          placeholder="Email" 
          // value={team.email} 
          onChange={handleChange} 
        />

      <label htmlFor="role">Role:</label>
        <input 
          id="role" 
          name="role" 
          type="text" 
          placeholder="Role" 
          // value={team.role} 
          onChange={handleChange} 
        />

      <button type="submit">Add Team Member</button>
      
    </form>
  );
}