import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">College Reading Tool</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/upload" className="hover:text-blue-200">Upload</Link>
            <Link to="/summary" className="hover:text-blue-200">Summary</Link>
            <Link to="/study-plan" className="hover:text-blue-200">Study Plan</Link>
            <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;