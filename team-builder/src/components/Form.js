import React, {useState} from 'react';

export default function Form(props) {
  const [team, setTeam] = useState({name:"", email:"", role:""});

  const handleChange = evt => {
    setTeam({...team, [evt.target.name]: evt.target.value});
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
          value={team.name} 
          onChange={handleChange} 
        />

      <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="text" 
          placeholder="Email" 
          value={team.email} 
          onChange={handleChange} 
        />

      <label htmlFor="role">Role:</label>
        {/* <input 
          id="role" 
          name="role" 
          type="text" 
          placeholder="Role" 
          value={team.role} 
          onChange={handleChange} 
        /> */}
        <select id="role" name="role" value={team.role} onChange={handleChange}>
          <option value="None"></option>
          <option value="Full Stack Web Developer">Full Stack Web Developer</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="iOS Developer">iOS Developer</option>
        </select>

      <button type="submit">Add Team Member</button>

    </form>
  );
}