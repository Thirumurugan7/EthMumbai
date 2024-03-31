import React, { useState } from 'react';
import { Register } from '../inegration';

const FormComponent = () => {
  // State to store the username and address
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit action
    console.log('Username:', username, 'Address:', address);
    const res = await Register({name:username,useradd:address})
    console.log(res);

    // You can also do more with the username and address here, like sending them to an API
  };

  // Function to update the username and address state
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required // Makes the field required for form submission
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required // Makes the field required for form submission
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;