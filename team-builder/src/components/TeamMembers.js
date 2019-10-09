import React from 'react';

export default function TeamMembers(props) {
  return (
    <div className="team-list">
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
            <h3>Name: {member.name}</h3>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
}