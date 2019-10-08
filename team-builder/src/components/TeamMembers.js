import React from 'react';

export default function TeamMembers(props) {
  return (
    <div className="team-list">
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
}