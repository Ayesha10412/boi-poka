import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Book = ({book}) => {

    const {image, bookName, author,category,rating,tags,bookId} = book

    return (

      <Link to={`/books/${bookId}`} >
        <div className='border-2 rounded-xl p-4'>
            
            <div className='p-4 bg-gray-200  rounded-xl '>
                <img className='h-[165px] w-[135px] mx-auto p-3' src={image} alt="" /></div>

<div className='flex gap-4 mt-4'>
    {
        tags.map((tag, index)=> <button key={index} className='btn btn-sm text-sm text-green-500 font-bold'>{tag}</button>)
    }
</div>
<div className='text-left'>
    <h4 className='text-2xl text-[#131313f0] mt-5'>{bookName}</h4>
    <p className=' text-sm text-[#13131395] mt-3 pb-4 border-b-2'>By: {author}</p>
</div>
<div className='flex justify-between mt-4 px-3'>
<p className='text-xs font-semibold text-black '>{category}</p>
<p className=' font-semibold text-black flex items-center gap-2 text-sm'>{rating} < FaRegStar></FaRegStar>  </p>
</div>
        </div>
      </Link>

    );
};

export default Book;