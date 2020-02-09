import React, { useState } from "react";
import * as yup from "yup";
import styled from "styled-components";

const FormWrap = styled.div`

color: white;
text-shadow: 2px 2px 2px #111;
width: 80%;
border-radius: 8px;

margin: 0 auto;
padding: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h4 {
    font-size: 2.2em;
    text-align: center;
    font-family: 'Gelasio', serif;
    
}
form {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        
        height: 2em;
        font-size: 1.3em;
        border-radius 8px;
        font-family: 'Gelasio', serif;
    }
    .userInput {
        margin: 1.5em 0;
    }
}
.setFarmDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: black;
  height: 2em;
  width: 5em;
  text-align: center;
  text-shadow: none;
  margin-bottom: 2em;

}
`;

const schema = yup.object().shape({
  name: yup.string().required()
});

const FarmForm = props => {
  const handleChange = e => {
    props.updateFarmDetails({
      ...props.farmDetails,
      [e.target.name]: e.target.value
    });
    console.log(props.farmDetails);
  };

  const submitHandler = e => {
    props.addNewFarms([props.farmDetails]);
    console.log(props.newFarms);
  };
  return (
    <div>
      <FormWrap>
        <h4>We are happy to have you! Fill out the form below!</h4>
        <input
          name="farm_name"
          className="userInput"
          value={props.farmDetails.farm_name}
          type="text"
          placeholder="Farm Name"
          onChange={handleChange}
        />

        <input
          name="address"
          className="userInput"
          value={props.farmDetails.address}
          type="text"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          name="city"
          className="userInput"
          value={props.farmDetails.city}
          type="text"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          name="state"
          className="userInput"
          value={props.farmDetails.state}
          type="text"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          name="zipcode"
          className="userInput"
          value={props.farmDetails.zipcode}
          type="text"
          placeholder="Zip"
          onChange={handleChange}
        />
        <input
          name="phone_number"
          className="userInput"
          value={props.farmDetails.phone_number}
          type="text"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          name="email"
          className="userInput"
          value={props.farmDetails.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="setFarmDetails" onClick={submitHandler}>
          <p>Done!</p>
        </div>
      </FormWrap>
    </div>
  );
};

export default FarmForm;
