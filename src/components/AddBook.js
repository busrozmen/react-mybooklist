import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddBook = () => {

    const [name, setName] = useState('')
    const [pages, setPages] = useState(0);

    const {AddBook} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const book = {
            id: Math.floor(Math.random() * 10000),
            name,
            pages: +pages
        }

        AddBook(book);
    }

    return(
        <div className="container addBook-form">
            <div className="row justify-content-md-center">
                <form onSubmit={onSubmit} className="col-lg-6 col-sm-12">
                    <div className="form-group">
                    <div className="row m-0">
                        <label htmlFor="bookName" className="col-3 text-left m-auto p-0">Book Name</label>
                        <input
                            type="text"
                            id="bookName"
                            placeholder="Enter Book Name..."
                            className="form-control col-9"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div></div>
                    <div className="form-group">
                        <div className="row m-0">
                        <label htmlFor="bookPages" className="col-3 text-left m-auto p-0">Book Pages</label>
                        <input                        
                            type="number"
                            id="bookPages"
                            placeholder="Enter Book Pages..."
                            className="form-control col-9"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)}
                        />
                    </div></div>
                    <button type="submit" className="col-12 p-2 btn btn-success">Add Book</button>
                </form>
            </div>
        </div>
    )
}