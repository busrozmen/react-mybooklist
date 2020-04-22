import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const InitialState = {
    books: [
        {id: 1, name: 'Yüzyıllık Yalnızlık', pages: '350'},
        {id: 2, name: 'Sineklerin Tanrısı', pages: '262'},
        {id: 3, name: 'Bülbülü Öldürmek', pages: '546'},
        {id: 4, name: 'Dava', pages: '103'},
        {id: 5, name: 'Sahilde Kafka', pages: '923'}
    ]
}

// create context
export const GlobalContext = createContext(InitialState);

// provide component
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // actions 
    function deleteBook(id) {
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        });
    }

    function AddBook(book) {
        dispatch({
            type: 'ADD_BOOK',
            payload: book
        });
    }

    return (
        <GlobalContext.Provider value= {{
            books: state.books,
            deleteBook,
            AddBook
        }}>
            {children}
        </GlobalContext.Provider>
    )

}