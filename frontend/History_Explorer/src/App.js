import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';


function App() {
  // State variable to track whether user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  // Function to handle login
  const handleLogin = () => {
    // Logic to handle login, set isLoggedIn to true when login is successful
    setIsLoggedIn(true);
    console.log("User logged in");
  };

  return (
    <div>
      {/* Conditionally render LoginForm if user is not logged in */}
      {!isLoggedIn && <div><LoginForm onLogin={handleLogin} /></div>}
      
      {/* Redirect to "/history" if user is logged in */}
      {isLoggedIn && <Navigate to="/history" />}

    </div>
  );
}

export default App;