import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Founder from './pages/Founder';
import Products from './pages/Products';
import Story from './pages/Story';
import Blogs from './pages/Blogs';
import BlogDetails from './components/BlogCards/BlogDetails';
import ScrollToTop from './components/ScrollToTop';

import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/products" element={<Products />} />
        <Route path="/story" element={<Story />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

      </Routes>
    </Router>
  );
}

export default App;