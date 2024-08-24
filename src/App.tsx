import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Education, Skills, WorkExperiencePage, ProjectsPage} from './pages';
import {MainLayout} from "./layouts";

const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work-experience" element={<WorkExperiencePage />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;