import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

const [books, setBooks] = useState([]);

useEffect(()=>{
    fetch('./booksData.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
} ,[])


    return (
        <div className='mt-24 text-4xl font-bold text-black mb-7'>
            <h2 className='mb-6' >Books</h2>
<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
{

books.map(book=><Book key={book.bookId} book={book} ></Book>)


}

</div>

        </div>
    );
};

export default Books;