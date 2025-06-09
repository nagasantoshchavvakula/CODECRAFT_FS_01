import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/protected', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setMsg("Protected content"))
      // .catch(() => setMsg("Access denied"));
  }, []);

  return <div>{msg}</div>;
}
// This code defines a React component that fetches protected content from a server.
// It uses the useEffect hook to make an HTTP GET request to a protected endpoint when the component mounts.
// The request includes an Authorization header with a token stored in localStorage.
// If the request is successful, it sets a message indicating that protected content is available.
