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
      role: ""
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      email: teamMember.email,
      alignment: teamMember.alignment,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };
  return (
    <div className="App">
      <h1>Campaign Members:</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
