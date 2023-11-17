import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/home/HomePage'
import BlogPage from './Pages/LeBlog/BlogPage'
import ItemPage from './Pages/AddAnItems/ItemPage'
import Navbar from './Components/Navbar'
import { useState } from 'react'


function App() {
 
  const [messages, setMessages]: any = useState<any>([]);
  function handleSubmitMessage(message: any) {
    setMessages([message, ...messages])
  }

  const [items, setItems]: any = useState<any>([]);
  function handleSubmitItem(item: any) {
    setItems([item, ...items])
  }

  return (
    <>

    <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage handleSubmitMessage={handleSubmitMessage} messages={messages} items={items} /> } ></Route>
        <Route path='/blog' element={ <BlogPage items={items} /> } ></Route>
        <Route path='/items' element={ <ItemPage handleSubmitItem={handleSubmitItem}  /> } ></Route>
      </Routes>
    </>
  )
}

export default App
