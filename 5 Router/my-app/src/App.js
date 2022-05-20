import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>

      {/*<nav>
        <a className='px-2' href="/">Home</a>
        <a className='px-2' href="/blog">Blog</a>
        <a className='px-2' href="/contact">Contact</a>
      </nav>*/}

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;


// /home -> <Home />
// /contact -> <Contact />