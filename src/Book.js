import React from 'react';
import './styles.css'; // Import the styles.css file with card styles

function Book({ title, author }) {
  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>

      {/* Review Input */}
      <div className="form-group">
        <label htmlFor={`review-${title}`}>Add a Review: </label>
        <input
          type="text"
          id={`review-${title}`}
          name={`review-${title}`}
          placeholder="Write a review..."
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Book;
