import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App'; // Import your main App component
import './index.css'; // Optional, for global styles

// Attach App component to the root div in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
