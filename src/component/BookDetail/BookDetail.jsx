import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddToDb';

const BookDetail = () => {
    const {bookId} = useParams()

    const id= parseInt(bookId)

    const data = useLoaderData()

    const book = data.find(book=> book.bookId == id)
    // console.log(book)
const  {bookId: currentBookId, image} = book

const handleMarkAsRead = (id) =>{
addToStoredReadList(id)
}

    return (
        <div className='bg-slate-200 p-5 rounded-lg'>
            <h2>Book Id: {currentBookId}</h2>
            <div >
                <img className='h-[300px]' src={image} alt="" />
            </div>
            <div className='flex gap-5 mt-6'>
            <button onClick={handleMarkAsRead} className="btn bg-white text-green-900 border-2">Read</button>
            <button className="btn bg-green-400 text-white">WishList</button>
            </div>
        </div>
    );
};

export default BookDetail;