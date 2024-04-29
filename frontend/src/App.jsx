import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'; // Ensure the path is correct
import Home from './components/Home';
import Login from './components/Login';
import { AuthProvider } from './AuthContext';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';
// import Dashboard1 from './components/Dashboard1';

function App() {
  return (
    <AuthProvider>

<BrowserRouter>

  <Routes>
    {/* Default Route */}
    <Route
      path="/"
      element={<Home />}
    />  
    {/* Signup Route */}
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/dashboard1" element={<Dashboard1 />} /> */}

    {/* <Route path="/sidebar" element={<SideBar />} /> */}


  </Routes>
 
</BrowserRouter>
  </AuthProvider>
   
  

  );
}

export default App;
