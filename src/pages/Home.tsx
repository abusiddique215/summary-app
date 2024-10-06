import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, FileText, BookOpen, BarChart2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to College Reading Tool</h1>
      <p className="text-xl mb-8">Enhance your studying experience with our powerful features</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Upload className="h-12 w-12 mb-4" />}
          title="Upload Documents"
          description="Upload PDFs, DOCs, or enter text manually"
          link="/upload"
        />
        <FeatureCard
          icon={<FileText className="h-12 w-12 mb-4" />}
          title="Get Summaries"
          description="Generate concise summaries of your texts"
          link="/summary"
        />
        <FeatureCard
          icon={<BookOpen className="h-12 w-12 mb-4" />}
          title="Create Study Plans"
          description="Organize your reading and study sessions"
          link="/study-plan"
        />
        <FeatureCard
          icon={<BarChart2 className="h-12 w-12 mb-4" />}
          title="Track Progress"
          description="View your study analytics and progress"
          link="/dashboard"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Home;