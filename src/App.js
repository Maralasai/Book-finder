// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [hasSearched,setHasSearched]=useState(false);

    const fetchBooks = async (title) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?title=${title}`);
            setBooks(response.data.docs); 
            setHasSearched(true); // Store fetched book data in state
        } catch (err) {
            setError('Failed to fetch books. Please try again.');
        }
        setLoading(false);
    };

    const handleSearch = (title) => {
        setSearchTerm(title);
        fetchBooks(title);
    };

    return (
        <div className="App bg-gray-100 min-h-screen p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Book Finder</h1>
            <SearchBar onSearch={handleSearch} />  {/* Ensure handleSearch is passed as onSearch */}
            {loading ? (
                <p className="text-center mt-4">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500 mt-4">{error}</p>
            ) : (
                <BookList books={books} hasSearched={hasSearched} />
            )}
        </div>
    );
}

export default App;
