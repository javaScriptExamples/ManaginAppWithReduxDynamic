//State argument is not application state, only the state
//this reducer is responsible for
//es altamente recomendado y de hecho no se recomienda agregar mas info a la funcion, se recomienda dejarlo lo mas limpio posible


export default function (state = null, action) {
    switch (action.type) {
        
        case 'BOOK_SELECTED': 
            //si un libro es seleccionado, se pasa el estado al action.payload
            return action.payload;
    }
      //si nada se selecciona se regresa el estado anterior, osea el libro anterior
    return state;
    
}
