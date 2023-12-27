
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookmark=blog=>
  {
    console.log(blog,'bookmark added');
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  
  const handleMarkAsRead=(id,time)=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
    const remaininBookmarks=bookmarks.filter(bookmark=> bookmark.id !==id);
    setBookmarks(remaininBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
