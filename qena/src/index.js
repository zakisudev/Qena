import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Read = () => {
  return (
    <div>
      <section className="bookList">
        <Header />
      </section>
      <section className="container">
        <Book img={fBook.img} author={fBook.author} title={fBook.title} />
        <Book img={sBook.img} author={sBook.author} title={sBook.title} />
      </section>
    </div>
  );
};
const Header = () => {
  return (
    <div className="navbar">
      <br />
      <div className="vis">
        <a href="index.html" id="LOGO">
          QENA
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i class="fa-solid fa-bars"></i>
        </label>
      </div>
      <div className="menu">
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
const Book = ({ img, author, title }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>
        <a href="index.html">{title}</a>
      </h2>
      <h3>{author}</h3>
    </article>
  );
};
const fBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91qlE6JayPL._AC_UL600_SR600,400_.jpg',
  author: 'Rebecca Yaroos',
  title: 'Fourth Wing (The Empyrean, 1)',
};

const sBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Read />);
