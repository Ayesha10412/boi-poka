import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

const [readList, setReadList]= useState([]);
const [sort, setSort] = useState([]);

    const allBooks = useLoaderData();
    console.log(allBooks)
    useEffect(()=>{
        const storeReadList = getStoredReadList();
        const storedReadListInt = storeReadList.map(id=> parseInt(id))
        console.log(storeReadList, storedReadListInt, allBooks);
const readBookList = allBooks?.filter(book=> storedReadListInt.includes(book.bookId));
setReadList(readBookList);
    } ,[]);

    const handleSort = sortType =>{
      setSort(sortType);

      if(sortType=== 'No. of Pages'){
        const sortedReadList = [...readList].sort((a,b)=>a.totalPages - b.totalPages );
        setReadList(sortedReadList)

      }

      if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b)=>a.rating - b.rating)
        setReadList(sortedReadList)
      }

    }


    return (
        <div>
            <h2 className='my-8'>Listed Books</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                {
              sort? `Sort by: ${sort}`: 'Sort By'
              }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li onClick={()=>handleSort('Ratings')} ><a >Ratings</a></li>
                  <li onClick={()=>handleSort('No. of Pages')} ><a >Sort By number of pages</a></li>

                </ul>
            </div>
          
  <Tabs>
  <TabList>
  <Tab>Read List</Tab>
  <Tab>Wish List</Tab>             
                
  </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I read: {readList?.length} </h2>
      {
        readList?.map(book=> <Book key={book.bookId} book={book} ></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'> My Wish List</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBooks;