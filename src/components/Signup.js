import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {newUserToDB} from '../redux/actions/user_actions';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: ''
  });

  // Controlled form functions
  const handleChange = e => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    console.log("Signup form", signupForm)
  }



  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(newUserToDB(signupForm));
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { username, password } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default Signup;