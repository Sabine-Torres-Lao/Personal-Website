// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import About from '../components/about';
import Resume from '../components/resume';
import Projects from '../components/projects';
import Extracurriculars from '../components/extracurriculars';

function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
      </Routes>
    </Layout>
  );
}

export default AppRouter;
