import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Save } from 'lucide-react';

const StudyPlan: React.FC = () => {
  const [studyItems, setStudyItems] = useState<StudyItem[]>([]);
  const [newItem, setNewItem] = useState<StudyItem>({
    title: '',
    date: '',
    duration: '',
    material: '',
  });

  interface StudyItem {
    title: string;
    date: string;
    duration: string;
    material: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.title && newItem.date && newItem.duration && newItem.material) {
      setStudyItems([...studyItems, newItem]);
      setNewItem({ title: '', date: '', duration: '', material: '' });
    }
  };

  const handleSaveStudyPlan = () => {
    // Here you would typically send the studyItems to your backend
    console.log('Saving study plan:', studyItems);
    alert('Study plan saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Study Plan</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Study Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Study session title"
            />
          </div>
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newItem.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={newItem.duration}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="60"
            />
          </div>
          <div>
            <label className="block mb-2">Study Material</label>
            <input
              type="text"
              name="material"
              value={newItem.material}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Chapter 1, Research Paper, etc."
            />
          </div>
        </div>
        <button
          onClick={handleAddItem}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Add to Study Plan
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Study Plan</h2>
        {studyItems.length > 0 ? (
          <ul className="space-y-4">
            {studyItems.map((item, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  <Calendar className="inline-block mr-1" size={16} />
                  {item.date} |{' '}
                  <Clock className="inline-block mr-1" size={16} />
                  {item.duration} minutes |{' '}
                  <BookOpen className="inline-block mr-1" size={16} />
                  {item.material}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No study items added yet.</p>
        )}
        {studyItems.length > 0 && (
          <button
            onClick={handleSaveStudyPlan}
            className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 flex items-center"
          >
            <Save className="mr-2" />
            Save Study Plan
          </button>
        )}
      </div>
    </div>
  );
};

export default StudyPlan;