// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());  // This should call the onSearch function passed from App
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for a book title..."
                className="p-2 border border-gray-300 rounded-l-md w-80 focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Search
            </button>
        </form>
    );
}

export default SearchBar;
