import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Students from './pages/Students';
import VideoCourses from './pages/Courses';
import VideoSection from './components/VideoSection/VideoSection';
import Loader from './components/loader/Loader';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

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
            <Route path="/courses" element={<VideoCourses />} />
            <Route path="/textbooks" element={<VideoSection />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;