import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Book from './Book';
import SearchBar from './SearchBar';
import './styles.css';

class App extends Component {
  state = {
    books: [],
    filteredBooks: [],
  };

  componentDidMount() {
    axios.get('/books.json').then((response) => {
      this.setState({ books: response.data, filteredBooks: response.data });
    });
  }

  handleSearch = (query) => {
    const { books } = this.state;
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredBooks });
  };

  render() {
    return (
      <div className="App">
          <h1>Bookstore</h1>
          <SearchBar handleSearch={this.handleSearch} />
          <div className="book-list">
          <div className="card">
            {this.state.filteredBooks.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

/*
  render() {
    return (
      <div className="App">
        <h1>Bookstore</h1>
        <SearchBar handleSearch={this.handleSearch} />
        <div className="book-list">
          {this.state.filteredBooks.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
      </div>
    );
  }
  */
}


export default App;
