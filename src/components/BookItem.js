// src/components/BookItem.js
import React from 'react';

function BookItem({ book }) {
    const coverImage = book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : 'https://via.placeholder.com/150';

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <img src={coverImage} alt={book.title} className="h-48 w-full object-cover mb-4" />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">
                {book.author_name?.join(', ') || 'Unknown Author'}
            </p>
            {book.first_publish_year && (
                <p className="text-gray-500">First Published: {book.first_publish_year}</p>
            )}
        </div>
    );
}

export default BookItem;
