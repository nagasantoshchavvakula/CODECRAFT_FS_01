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
