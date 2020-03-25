import React, { useState, useEffect } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
    alignment: "",
    weapon: "",
    race: ""
  });
  useEffect(() => {
    if (props.memberToEdit) {
      setTeamMember(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    if (props.memberToEdit) {
      props.editMember(teamMember);
    } else {
      props.addNewTeamMember(teamMember);
    }

    setTeamMember({
      name: "",
      email: "",
      role: "",
      alignment: "",
      weapon: "",
      race: ""
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
        value={teamMember.alignment}
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
        <option value="">--Choose Your Class</option>
        <option value="Cleric">Cleric</option>
        <option value="Paladin">Paladin</option>
        <option value="Rogue">Rogue</option>
        <option value="Chun-Li">Chun-Li</option>
      </select>
      <br></br>
      <br></br>
      <label htmlFor="starting-weapon">Starting Weapon</label>
      <select
        id="weapon"
        type="select"
        name="weapon"
        value={teamMember.weapon}
        onChange={handleChanges}
      >
        <option value="">--choose your weapon</option>
        <option value="Rusty-Sword">Rusty Sword - Slashing</option>
        <option value="Gnarled Staff">Gnarled Staff - 2h Striking</option>
        <option value="Dagger">Dagger -1h piercing</option>
        <option value="Potato">A potato! - 1h bludgeoning</option>
      </select>
      <br></br>
      <h4>Choose your Race:</h4>

      <div class="races">
        Dwarf
        <input
          id="race"
          type="radio"
          name="race"
          value="Dwarf"
          onChange={handleChanges}
        />
        <br />
        Hobbit
        <input
          id="race"
          type="radio"
          name="race"
          value="Hobbit"
          onChange={handleChanges}
        />
        <br />
        Elf
        <input
          id="race"
          type="radio"
          name="race"
          value="Elf"
          onChange={handleChanges}
        />
        <br />
        Human
        <input
          id="race"
          type="radio"
          name="race"
          value="Human"
          onChange={handleChanges}
        />
        <br />
        Orc
        <input
          id="race"
          type="radio"
          name="race"
          value="Orc"
          onChange={handleChanges}
        />
        <br></br>
      </div>
      <div class="bottomthree">
        <label htmlFor="experience">XP</label>
        <input
          id="experience"
          type="text"
          name="experience"
          value={teamMember.experience}
          onChange={handleChanges}
        />

        <label htmlFor="gold">Gold</label>
        <input
          id="gold"
          type="text"
          name="gold"
          value={teamMember.gold}
          onChange={handleChanges}
        />

        <label htmlFor="health">Health</label>
        <input
          id="health"
          type="text"
          name="health"
          value={teamMember.health}
          onChange={handleChanges}
        />
      </div>

      <button type="submit">S U B M I T</button>
    </form>
  );
};

export default Form;
