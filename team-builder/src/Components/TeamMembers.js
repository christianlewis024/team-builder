import React from "react";
const TeamMembers = ({ teamMembers, setMemberToEdit }) => {
  return (
    <>
      {teamMembers.map(teamMember => (
        <ul key={teamMember.id}>
          <h2> {teamMember.name}</h2>
          <p>{teamMember.email} </p>
          <p> {teamMember.role}</p>
          <p>{teamMember.alignment}</p>
          <p>{teamMember.weapon}</p>
          <p>{teamMember.race}</p>
          <p>{teamMember.health}</p>
          <p>{teamMember.experience}</p>
          <p>{teamMember.gold}</p>

          {teamMember.name ? (
            <>
              <button onClick={() => setMemberToEdit(teamMember)}>Edit</button>
            </>
          ) : null}
        </ul>
      ))}
    </>
  );
};

export default TeamMembers;
