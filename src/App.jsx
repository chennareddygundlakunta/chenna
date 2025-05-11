// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { ProjectProvider } from './context/ProjectContext';
import Login from './pages/login';

export default function App() {
  return (
    <Router>
      <ProjectProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </ProjectProvider>
    </Router>
  );
}
