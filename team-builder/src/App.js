import React, { useState } from "react";
import Form from "./Components/Form";
import TeamMembers from "./Components/TeamMembers";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: "",
      name: "",
      email: "",
      alignment: "",
      role: "",
      weapon: "",
      race: "",
      health: "",
      experience: "",
      gold: ""
    }
  ]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: "Player Name: " + teamMember.name,

      email: "Email: " + teamMember.email,
      alignment: "Alignment: " + teamMember.alignment,
      role: "Role: " + teamMember.role,
      weapon: "Weapon: " + teamMember.weapon,
      race: "Race: " + teamMember.race,
      health: "health: " + teamMember.health,
      experience: "XP: " + teamMember.experience,
      gold: "Gold: " + teamMember.gold
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  const editMember = memberEditted => {
    const edittedTeam = teamMembers.map(teamMember => {
      if (teamMember.id === memberEditted.id) {
        return memberEditted;
      } else {
        return teamMember;
      }
    });
    setTeamMembers([...edittedTeam]);
    setMemberToEdit(null);
  };
  return (
    <div className="App">
      <h1>Campaign Members:</h1>
      <Form
        addNewTeamMember={addNewTeamMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <TeamMembers
        teamMembers={teamMembers}
        setMemberToEdit={setMemberToEdit}
      />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
