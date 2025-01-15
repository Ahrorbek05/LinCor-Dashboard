import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Settings from './pages/Settings';
import Students from './pages/Students';
import Sales from './pages/Sales';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/students" element={<Students />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
