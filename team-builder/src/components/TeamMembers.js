import React from 'react';

export default function TeamMembers(props) {
  return (
    <div className="team-list">
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
            <p><span className="title">Name:</span> <span className="name-outcome">{member.name}</span></p>
            <p><span className="title">Email:</span> <span className="email-outcome">{member.email}</span></p>
            <p><span className="title">Role:</span> <span className="role-outcome">{member.role}</span></p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}