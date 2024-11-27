import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';  
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Midsem from './components/Midsem/DESKTOP/midsem';
import Endsem from './components/Endsem/DESKTOP/endsem';
import Holiday from './components/Holiday/DESKTOP/holiday';
import Emergency from './components/Emergency/Emergency';
import Display from './components/Display/Display';
import Schedule from './components/Schedule/schedule';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Determine the basename dynamically
  const basename =
    process.env.NODE_ENV === 'production' ? '/CU-Advance-BellSystem' : '/';

  // Private Route Component to protect routes
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <Router basename={basename}>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/midsem"
          element={
            <PrivateRoute>
              <Midsem />
            </PrivateRoute>
          }
        />
        <Route
          path="/endsem"
          element={
            <PrivateRoute>
              <Endsem />
            </PrivateRoute>
          }
        />
        <Route
          path="/holiday"
          element={
            <PrivateRoute>
              <Holiday />
            </PrivateRoute>
          }
        />
        <Route
          path="/emergency"
          element={
            <PrivateRoute>
              <Emergency />
            </PrivateRoute>
          }
        />
        <Route
          path="/display"
          element={
            <PrivateRoute>
              <Display />
            </PrivateRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <PrivateRoute>
              <Schedule />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
