import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'Da Vinci Code', author: 'dan brown', id: 2},
        {title: 'Angels Flight', author: 'michael connelly', id: 3},
        {title: 'Lions Game', author: 'neslon Demille', id: 4}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuidv4() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;