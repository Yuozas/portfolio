import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Education, Skills, WorkExperiencePage, ProjectsPage} from './pages';
import {MainLayout} from "./layouts";

const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/portfolio/work-experience" element={<WorkExperiencePage />} />
                    <Route path="/portfolio/education" element={<Education />} />
                    <Route path="/portfolio/skills" element={<Skills />} />
                    <Route path="/portfolio/projects" element={<ProjectsPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;