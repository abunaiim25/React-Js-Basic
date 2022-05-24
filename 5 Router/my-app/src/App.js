import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from './components/Navbar';
import BlogPage from './pages/BlogPage';
import User from './pages/User';
import AddBlog from './pages/AddBlog';
import { useState } from 'react';
import Protected from './routes/Protected';



function App() {

  //loginLogout
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>

      {/*<nav>
        <a className='px-2' href="/">Home</a>
        <a className='px-2' href="/blog">Blog</a>
        <a className='px-2' href="/contact">Contact</a>
      </nav>*/}

      <Navbar />
       {/** loginLogout */}
      {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log Out</button>   :    <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>}



      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
        {/** loginLogout */}
        <Route path="/add-blog" element={ <Protected isLoggedIn={isLoggedIn}>  <AddBlog />  </Protected>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;


// /home -> <Home />
// /contact -> <Contact />