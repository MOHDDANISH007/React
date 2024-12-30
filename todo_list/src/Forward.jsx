import React, { useRef } from 'react';
import MyInput from './MyInput';

const Forward = () => {
  const usernameRef = useRef(); // Ref for the username input
  const passwordRef = useRef(); // Ref for the password input

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing the input values using refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    clearForm(); // Clear the form after submission
  };

  const clearForm = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Pass the ref explicitly as a prop */}
        <MyInput
          type="text"
          required
          placeholder="Username"
          inputRef={usernameRef}
        />
        <MyInput
          type="password"
          required
          placeholder="Password"
          inputRef={passwordRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forward;
