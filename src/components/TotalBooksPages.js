import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TotalBooksPages = () => {
  const { books } = useContext(GlobalContext);

  const amounts = books.length > 0 ? books.map(book => parseFloat(book.pages)) : "";
  const totalpages = books.length > 0 ? 
    amounts
    .filter(item => item> 0)
    .reduce((acc, item) => (acc += item)) : 0

  const totalbooks =  books.length >0 ? amounts.length : 0;

  return (
    <div className="container mt-3">
        <div className="row justify-content-md-center">
        <div className="col-lg-3 col-sm-6 total-books">
          <div className="pr-5 pl-5 pb-3 pt-3">
           <h5>Total Books</h5>
           <p>{totalbooks}</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 total-pages">
          <div className="pr-5 pl-5 pb-3 pt-3">
           <h5>Total Pages</h5>
           <p>{totalpages}</p>
          </div>
        </div>
        </div>
      </div>
  )
}