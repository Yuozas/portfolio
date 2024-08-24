import React from 'react';
import {Navbar} from "../components/Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;