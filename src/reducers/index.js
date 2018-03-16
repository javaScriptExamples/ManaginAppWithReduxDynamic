//solo es estatica, por lo cual no se nota la diferencia, la siguiente apicacion si sera dinamica para que se muestre como funciona
//react con redux

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//combin
const rootReducer = combineReducers({
  //aqui se recive la funcion export de reducer_books.js, osea el array completo, no se le puso nombre pero con
  //el hecho de importartla se sabeque se exporta todo el array y para recibirlo se puede colocar cualquier nombre
  //en este caso es booksReducers
  books: BooksReducer,
  //segun yo aqui solo recibe el activebook, es decir el elemento al que le di click
  activeBook: ActiveBook
});

export default rootReducer;
