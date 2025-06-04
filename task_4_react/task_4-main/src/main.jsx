import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// אפשר להשאיר את index.css לצורך reset וסגנון בסיס
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);