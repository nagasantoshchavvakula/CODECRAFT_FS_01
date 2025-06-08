import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProtectedPage from './components/ProtectedPage';
import './App.css'; // Assuming you have some styles in App.css

function App() {
  return (
    <div>
      <h1>Authentication Appllication</h1>
      <RegisterForm />
      <LoginForm />
      <ProtectedPage />
    </div>
  );
}

export default App;
// This code defines the main App component for a React application.
// It imports and uses three components: RegisterForm, LoginForm, and ProtectedPage.