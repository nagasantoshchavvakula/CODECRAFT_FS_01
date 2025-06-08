import axios from 'axios';
import { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/register', form);
      alert("Registered successfully");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Username" />
      <input onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button>Register</button>
    </form>
  );
}
// This code defines a simple registration form component using React.
// It uses the useState hook to manage form state and axios for making HTTP requests.
// The form collects a username, email, and password, and submits them to the server for registration.
// The submit function handles the form submission, sending a POST request to the server.
// If the request is successful, it alerts the user that registration was successful.
// If the request fails, it alerts the user that registration failed.
// The form includes input fields for the username, email, and password, and a submit button.
// The submit function is called when the form is submitted, preventing the default behavior and sending the request to the server.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple registration form component using React.
// It allows users to register by entering their username, email, and password.
// The component uses the useState hook to manage the form state.
// It sends a POST request to the server at 'http://localhost:8080/auth/register' with the form data.
// If the registration is successful, it alerts the user that registration was successful.
// If the registration fails, it alerts the user that registration failed.
// The form includes input fields for the username, email, and password, and a submit button.
// The submit function handles the form submission, preventing the default behavior and sending the request to the server.
// The form is submitted using the onSubmit event handler, which calls the submit function.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple registration form component using React.
// It allows users to register by entering their username, email, and password.
// The component uses the useState hook to manage the form state.
// It sends a POST request to the server at 'http://localhost:8080/auth/register' with the form data.
// If the registration is successful, it alerts the user that registration was successful.
// If the registration fails, it alerts the user that registration failed.
// The form includes input fields for the username, email, and password, and a submit button.
// The submit function handles the form submission, preventing the default behavior and sending the request to the server.
// The form is submitted using the onSubmit event handler, which calls the submit function.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This code defines a simple registration form component using React.
// It allows users to register by entering their username, email, and password.
// The component uses the useState hook to manage the form state.
// It sends a POST request to the server at 'http://localhost:8080/auth/register' with the form data.
// If the registration is successful, it alerts the user that registration was successful.
// If the registration fails, it alerts the user that registration failed.
// The form includes input fields for the username, email, and password, and a submit button.
// The submit function handles the form submission, preventing the default behavior and sending the request to the server.
// The form is submitted using the onSubmit event handler, which calls the submit function.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.