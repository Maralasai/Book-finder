// src/components/BookList.js
import React from 'react';
import BookItem from './BookItem';

function BookList({ books,hasSearched }) {
    if (hasSearched && books.length === 0) {
        return <p className="text-center mt-4">No books found.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
                <BookItem key={book.key} book={book} />
            ))}
        </div>
    );
}

export default BookList;
