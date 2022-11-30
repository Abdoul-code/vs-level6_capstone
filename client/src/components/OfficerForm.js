import React, { useState } from "react";

export default function OfficerForm(props) {
  const initInputs = {
    firstName: props.firstName || " ",
    lastName: props.lastName || " ",
    status: props.status || " ",
    contact: props.contact || " ",
    imgUrl: props.imgUrl || "",
    gender: props.gender || " ",
    author:props.username
  };
  const [inputs, setInputs] = useState(initInputs);

  const { addOfficer } = props;

  function handleChange(e) {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addOfficer(inputs);
    setInputs(initInputs);
  }

  const { firstName, lastName, status, contact, imgUrl } = inputs;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Last name"
        />
      </label>
      <br />
      <label>
        Male:
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
      </label>

      <label>
        Female:
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={status}
          onChange={handleChange}
          placeholder="status"
        />
      </label>
      <br />
      <label>
        contact:
        <input
          type="tel"
          name="contact"
          value={contact}
          onChange={handleChange}
          placeholder="Number"
        />
        <br />
        <br />
        <button> Add Officer</button>
      </label>
    </form>
  );
}
