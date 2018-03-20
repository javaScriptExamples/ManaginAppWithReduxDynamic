//contendra todos los "actions creators" que hagamos

//single action creator llamado select book, y como parametro pasamos book que es un objeto
export function selectBook(book) {
    // console.log("a book has been selected ", book.title)

    /*selectBook es un ActionCreator, necesario para retornar un action.
    un objeto con un un tipo de propiedad*/
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}