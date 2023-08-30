// App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import { AuthProvider } from './Providers/AuthProvider';
import { RequireAuth } from './Providers/Auth';
import Layout from './components/Layout';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/search"
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}



export default App;
