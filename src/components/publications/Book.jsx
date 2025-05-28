import React, { useState } from 'react';
import './book.css';

const books = [
  {
    title: 'Introduction to AI and ML',
    img: '/books/ai_ml.jpg',
    link: 'https://www.flipkart.com/introduction-ai-ml/p/itm3d2470841a19c',
  },
  {
    title: 'Electromagnetic Fields',
    img: '/books/em_fields.jpg',
    link: 'https://gcspublishers.com/product/electromagnetic-fields-by-dr-g-s-uthayakumar/',
  },
  {
    title: 'VLSI Design',
    img: '/books/vlsi.jpg',
    link: 'https://www.flipkart.com/vlsi-design/p/itm84b53a6d040ba',
  },
  {
    title: 'Digital Electronics',
    img: '/books/digital_electronics.jpg',
    link: 'https://slideplayer.com/amp/8657959/',
  },
];

const Book = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <section className="book-section">
      <h2>Books</h2>
      <div className="book-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            onClick={() => handleClick(book)}
          >
            <img src={book.img} alt={book.title} className="book-img" />
            <p className="book-title">{book.title}</p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="book-details">
          <h3>{selectedBook.title}</h3>
          <a href={selectedBook.link} target="_blank" rel="noopener noreferrer">
            Visit here
          </a>
        </div>
      )}
    </section>
  );
};

export default Book;
