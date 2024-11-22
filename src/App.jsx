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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Private Route Component to protect routes
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <Router basename = "CU-Advance-BellSystem">
      {/* Render the Header on every page */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Login route */}
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        
        {/* Protected Routes */}
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
        
      </Routes>
    </Router>
  );
}

export default App;
