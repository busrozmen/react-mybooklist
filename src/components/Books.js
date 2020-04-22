import React, {useContext} from 'react';
import {Book} from './Book'
import { GlobalContext } from '../context/GlobalState';

export const Books = () => {

    const {books} = useContext(GlobalContext);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <table className="table table-striped col-sm-12 col-lg-6 mt-5 mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Pages</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>   
                        {books.length>0 &&
                        books.map(book => (
                            <Book book={book} key={book.id} />
                        ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
