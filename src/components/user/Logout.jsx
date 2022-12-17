import React from 'react';

function Logout() {
  const handleLogout = () => {
    // Send a request to the logout route
    fetch('/logout', { method: 'POST' })
      .then(response => {
        if (response.ok) {
          // If the logout was successful, redirect the user to the login page
          window.location.href = '/login';
        }
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
