//recordar que react y redux son librerias totalmente differentes
//mapStateToProps and mapDispatchToProps  pueden ser llamado como se me pegue mi reverenda gana, no estan definidas por redux

import React, { Component } from 'react';

//para no importar toda la libreria podemos traer solo un compnente solamente usando {connect} que es la parte de la libreria de redux quenecesito
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

//bindActionCreators es una funcion "action creators" para usarse y asegurarse que la action generada por el "action creator" finalice  a travez
//de los diferentes reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="List-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
       // console.log(this.props.asdf); //123
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    //whatever is returned will show up as props
    //inside of BookList
    //  return{asdf:'123'};
    return {
        //esta es la conexion entre redux y nuestro component
        books: state.books
    };
};

/*cualquier cosa que se regrese por esta funcion terminara como props en el BookList container*/
function mapDispatchToProps(dispatch) {

    /* vamos a regresar un bindActionCreator y se pasara como argumento un objeto con la llave (llave:valor) selectBook(primer selectBook)
     con un valor de SelectBook(segundo selectBook).
     el selectBook derecho es el actual action creator que importamos desde arriba. ademas se le agregara un segundo argumento (dispatch).
     En otras palabras, lo que hace bindActionCreators con el dispatches decir, ok entiendo que vas a llamar a select book y que es un 
     action creator que tu vas a llamar en algun punto cuando sea llamado,y  quiero asegurarme de que el resultado del flujo atraves de la
     funcion dispatch que tome todos los actions como si fuera un embudo*/
    return bindActionCreators({ selectBook: selectBook }, dispatch);

}

/*estimula a BookList desde un componente a un container, este necesita saber acerca del nuevo dispatch method, selectBook y hacerlo 
dispnible como prop*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

/**
 * Book-list.js is a container
 * 
 * REMEMBER a container is just a component that has direct access to the state that produced by redux, react and redux are two separe libraries
 * and its only  throw  this third library called react redux that we can meld the two together and get a component that's actually
 * aware of the state that is contained within redux
 */