import React, { useState } from 'react';

// Main App component
const App = () => {
  // Initial state containing language names and their current vote counts
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  /**
   * Increases the vote count for a specific language using its original index.
   * @param {number} index - The original index of the language in the languages state array.
   */
  const handleVote = (index) => {
    // 1. Create a copy of the current state array (essential for immutability)
    const newLanguages = [...languages];
    
    // 2. Safely increment the votes for the language at the given index
    newLanguages[index].votes += 1;
    
    // 3. Update the state, triggering a re-render
    setLanguages(newLanguages);
  };

  // Sort languages by votes in descending order for display. 
  // We sort a copy so the button still uses the correct original index.
  const sortedLanguages = [...languages].sort((a, b) => b.votes - a.votes);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-200">
        
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-10 tracking-tight">
          React Language Voting App
        </h1>

        <div className="space-y-6">
          {/* Map over the sorted array for display */}
          {sortedLanguages.map((lang) => {
            // Find the original index of the language in the UNSORTED state array
            // This is critical for handleVote to update the correct state object.
            const originalIndex = languages.findIndex(l => l.name === lang.name);

            return (
              <div 
                key={lang.name} 
                className="flex items-center bg-white border-b border-gray-200 py-4"
              >
                
                {/* Vote Count */}
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-4xl font-extrabold text-indigo-600">
                    {lang.votes}
                  </span>
                  <p className="text-xs text-gray-500">votes</p>
                </div>

                {/* Language Name */}
                <div className="flex-1 min-w-0 px-6">
                  <p className="text-2xl font-semibold text-gray-800">{lang.name}</p>
                </div>

                {/* Vote Button */}
                <button
                  // Call handleVote using the original index
                  onClick={() => handleVote(originalIndex)}
                  className="flex items-center px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-150 ease-in-out transform hover:scale-105 active:scale-95"
                  aria-label={`Vote for ${lang.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 00-2 2v6a2 2 0 002 2h4.586a2 2 0 011.414.586l3.414 3.414a2 2 0 002.828 0l3.414-3.414a2 2 0 011.414-.586H19a2 2 0 002-2V6a2 2 0 00-2-2H5z" />
                  </svg>
                  Vote
                </button>
              </div>
            );
          })}
        </div>
        
        <footer className="mt-8 text-center text-gray-500 text-sm">
          Built with React and Tailwind CSS. Click to vote!
        </footer>
      </div>
    </div>
  );
};

export default App;