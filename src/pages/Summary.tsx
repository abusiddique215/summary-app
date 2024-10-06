import React, { useState } from 'react';
import axios from 'axios';
import { FileText, Sliders } from 'lucide-react';

const Summary: React.FC = () => {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [tone, setTone] = useState('formal');
  const [focus, setFocus] = useState('main ideas');
  const [generating, setGenerating] = useState(false);

  const handleGenerateSummary = async () => {
    setGenerating(true);
    try {
      const response = await axios.post('/api/summarize', {
        content,
        summaryLength,
        tone,
        focus,
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
    }
    setGenerating(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Generate Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2" /> Input Content
          </h2>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-64"
            placeholder="Paste your content here..."
          ></textarea>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Sliders className="mr-2" /> Summarization Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Summary Length</label>
              <select
                value={summaryLength}
                onChange={(e) => setSummaryLength(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="formal">Formal</option>
                <option value="informal">Informal</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Focus</label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="main ideas">Main Ideas</option>
                <option value="key terms">Key Terms</option>
                <option value="statistical data">Statistical Data</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleGenerateSummary}
        disabled={generating || !content}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        {generating ? 'Generating Summary...' : 'Generate Summary'}
      </button>
      {summary && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Generated Summary</h2>
          <p className="whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;