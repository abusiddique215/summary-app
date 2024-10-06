import React from 'react';
import { BarChart2, BookOpen, FileText, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const studyStats = {
    totalReadingTime: 1200, // in minutes
    documentsRead: 15,
    summariesGenerated: 10,
    averageReadingSpeed: 250, // words per minute
  };

  const recentActivity = [
    { type: 'read', title: 'Introduction to Psychology', date: '2023-03-15' },
    { type: 'summary', title: 'Cognitive Behavioral Therapy', date: '2023-03-14' },
    { type: 'read', title: 'The History of Ancient Rome', date: '2023-03-13' },
    { type: 'summary', title: 'Principles of Microeconomics', date: '2023-03-12' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Clock className="h-8 w-8 text-blue-500" />}
          title="Total Reading Time"
          value={`${Math.floor(studyStats.totalReadingTime / 60)} hours`}
        />
        <StatCard
          icon={<BookOpen className="h-8 w-8 text-green-500" />}
          title="Documents Read"
          value={studyStats.documentsRead.toString()}
        />
        <StatCard
          icon={<FileText className="h-8 w-8 text-purple-500" />}
          title="Summaries Generated"
          value={studyStats.summariesGenerated.toString()}
        />
        <StatCard
          icon={<BarChart2 className="h-8 w-8 text-red-500" />}
          title="Avg. Reading Speed"
          value={`${studyStats.averageReadingSpeed} wpm`}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          {recentActivity.map((activity, index) => (
            <li key={index} className="flex items-center">
              {activity.type === 'read' ? (
                <BookOpen className="h-5 w-5 mr-3 text-blue-500" />
              ) : (
                <FileText className="h-5 w-5 mr-3 text-purple-500" />
              )}
              <div>
                <p className="font-semibold">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-2 text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;