import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Beim Öffnen der App wird direkt eure Login-Seite gerendert.
          Clerk und euer MUI-Theme versorgen die Seite vollautomatisch aus der main.jsx!
        */}
        <Routes>
          {/* weiterleiten zu login nach aufruf */}
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Routen für die Clerk-Komponenten */}
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/register/*" element={<RegisterPage />} />
          
          {/* Seite nach Login */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <LoginPage />
      </div>
    </BrowserRouter>
  );
}

export default App;