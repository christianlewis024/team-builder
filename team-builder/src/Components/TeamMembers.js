import React from "react";
const TeamMembers = props => {
  return (
    <>
      {props.teamMembers.map(teamMember => (
        <>
          <h2> {teamMember.name}</h2>
          <p>{teamMember.email} </p>
          <p> {teamMember.role}</p>
          <p>{teamMember.alignment}</p>
          <p>{teamMember.weapon}</p>
          <p>{teamMember.race}</p>
          <p>{teamMember.health}</p>
          <p>{teamMember.experience}</p>
          <p>{teamMember.gold}</p>
        </>
      ))}
    </>
  );
};

export default TeamMembers;
