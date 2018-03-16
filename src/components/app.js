import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* booklist viene de book-list.js y se trae la clase del mismo nombre, es en donde se hacen las iteraciones*/}
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
