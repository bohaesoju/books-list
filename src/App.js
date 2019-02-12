import React, { Component } from 'react';
import './App.css';
import Books from './books';

class App extends Component {

  state = {

  };

  componentDidMount(){
    this._getBooks();
  }

  _getBooks = async () => {
    const books = await this._callApi();
    this.setState({
        books
      });
  };

  _callApi = () => {
      return fetch('https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json')
          .then(response => response.json())
          .then(json => json["ISBN:9780980200447"] )
          .catch(err => console.log(err))
  };

  _renderMovies = () => {

    const {books} = this.state;
          return <Books
              description={books.publish_date}
              title={books.title}
              subtitle={books.cover.large}
              author={books.authors[0].name}
              page={books.number_of_pages}
          />
  };

  render() {
    return (
      <div className="App">
          {this.state.books ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
