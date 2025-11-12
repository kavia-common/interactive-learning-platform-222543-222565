import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const RootApp = () => {
  return (
    <BrowserRouter>
      <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 10000 }}>
        <Link to="/login" style={{ fontSize: 14, textDecoration: 'underline' }} aria-label="Go to Login page">
          Go to Login
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
