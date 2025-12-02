import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the main Voting App component

// Create the React root and target the 'root' element in your index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
