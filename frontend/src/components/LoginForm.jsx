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
