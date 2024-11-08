import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddToDb';
import { Helmet } from 'react-helmet-async';

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
console.log(data)

    const id= parseInt(bookId);

  console.log(typeof bookId, typeof id,  typeof data[0].bookId)

    const book = data.find(book=> book.bookId === id)

    console.log(book)

const  { bookId: currentBookId, image} = book;

const handleMarkAsRead = (id) =>{
    
addToStoredReadList(id);

    }


    return (
        <div className='bg-slate-200 p-5 rounded-lg'>
            <Helmet>
                <title>Book Detail | { bookId}</title>
            </Helmet>
            <h2>Book Id: {currentBookId}</h2>
            <div >
                <img className='h-[300px]' src={image} alt="" />
            </div>
            <div className='flex gap-5 mt-6'>
            <button onClick={()=>handleMarkAsRead(bookId)} 
            className="btn bg-white text-green-900 border-2">Read</button>
            <button className="btn bg-green-400 text-white">WishList</button>
            </div>
        </div>
    );
};

export default BookDetail;