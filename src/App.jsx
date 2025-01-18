import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Students from './pages/Students';
import Sales from './pages/Sales';
import VideoCourses from './pages/Courses';
import VideoSection from './components/videoSection/VideoSection';
import Loader from './components/loader/Loader';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/sales" element={<Sales />} />
              <Route path="/courses" element={<VideoCourses />} />
              <Route path='/textbooks' element={<VideoSection />}></Route>
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
