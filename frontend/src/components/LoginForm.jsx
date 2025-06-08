import axios from 'axios';
import { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Username" />
      <input type="password" onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
// This code defines a simple login form component using React.
// It uses the useState hook to manage form state and axios for making HTTP requests.
// The submit function is called when the form is submitted, and it sends a POST request to the server with the username and password.
// If the login is successful, it stores the received token in localStorage and alerts the user.
// If the login fails, it alerts the user that the login failed.
// The form includes two input fields for the username and password, and a submit button.
// The form is submitted using the onSubmit event handler, which prevents the default form submission behavior and calls the submit function instead.
// This code is a React component for a login form.
// It allows users to log in by entering their username and password.
// The component uses the useState hook to manage the form state.
// It sends a POST request to the server at 'http://localhost:8080/auth/login' with the form data.
// If the login is successful, it stores the received token in localStorage and alerts the user.
// If the login fails, it alerts the user that the login failed.
// The form includes input fields for the username and password, and a submit button.
// The submit function handles the form submission, preventing the default behavior and sending the request to the server.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple login form component using React.
// It uses the useState hook to manage form state and axios for making HTTP requests.
// The form collects a username and password, and submits them to the server for authentication.
// If the login is successful, it stores the received token in localStorage and alerts the user.
// If the login fails, it alerts the user that the login failed.
// The form includes input fields for the username and password, and a submit button.
// The submit function handles the form submission, sending a POST request to the server.
// The form is submitted using the onSubmit event handler, which prevents the default form submission behavior and calls the submit function instead.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple login form component using React.
// It allows users to log in by entering their username and password.
// The component uses the useState hook to manage the form state.
// It sends a POST request to the server at 'http://localhost:8080/auth/login' with the form data.
// If the login is successful, it stores the received token in localStorage and alerts the user.
// If the login fails, it alerts the user that the login failed.
// The form includes input fields for the username and password, and a submit button.
// The submit function handles the form submission, preventing the default behavior and sending the request to the server.
// The form is submitted using the onSubmit event handler, which calls the submit function.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple login form component using React.