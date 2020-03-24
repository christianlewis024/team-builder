import React, { useState } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeamMember(teamMember);
    setTeamMember({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Player Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={teamMember.name}
        onChange={handleChanges}
      />
      <br></br>
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={teamMember.email}
        onChange={handleChanges}
      />
      <br></br>
      <br></br>

      <label htmlFor="alignment">Alignment</label>
      <select
        id="alignment"
        type="select"
        name="alignment"
        value={teamMember.role}
        onChange={handleChanges}
      >
        <option value="">--Choose Your Alignment</option>
        <option value="Lawful-Good">Lawful Good</option>
        <option value="Neutral-Good">Neutral Good</option>
        <option value="Chaotic-Good">Chaotic Good</option>
        <option value="Lawful-Neutral">Lawful Neutral</option>
        <option value="Neutral">Neutral</option>
        <option value="Chaotic-Neutral">Chaotic Neutral</option>
        <option value="Lawful-Evil">Lawful Evil</option>
        <option value="Chaotic-Evil">Chaotic Evil </option>
        <option value="Neutral-Evil">Neutral Evil </option>
      </select>
      <br></br>
      <br></br>
      <label htmlFor="role">Role</label>
      <select
        id="role"
        type="select"
        name="role"
        value={teamMember.role}
        onChange={handleChanges}
      >
        <option value="">--Choose Your Fighter</option>
        <option value="Cleric">Cleric</option>
        <option value="Paladin">Paladin</option>
        <option value="Rogue">Rogue</option>
        <option value="Chun-Li">Chun-Li</option>
      </select>
      <br></br>
      <br></br>
      <label htmlFor="starting-weapon">Starting Weapon</label>
      <select
        id="role"
        type="select"
        name="role"
        value={teamMember.role}
        onChange={handleChanges}
      >
        <option value="">--choose your weapon</option>
        <option value="Rusty-Sword">Rusty Sword - Slashing</option>
        <option value="Gnarled Staff">2h Striking</option>
        <option value="Dagger">1h piercing</option>
        <option value="Potato">A potato!</option>
      </select>
      <br></br>
      <br></br>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default Form;
